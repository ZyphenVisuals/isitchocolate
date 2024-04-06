import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "$lib/pb_utils";

export const handle = async ({
	event,
	resolve,
}: {
	event: any;
	resolve: any;
}) => {
	event.locals.pb = new PocketBase(
		"https://isitchocolate.pocketbase.trinitystudios.xyz"
	);
	event.locals.pb.authStore.loadFromCookie(event.headers?.get("cookie") || "");

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}

	const response = await resolve(event);

	response.headers.set(
		"set-cookie",
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);

	return response;
};
