import PocketBase from "pocketbase";
import { serializeNonPOJOs } from "$lib/pb_utils";
/*import { AsyncTask, CronJob, Task, ToadScheduler } from "toad-scheduler";
const scheduler = new ToadScheduler();
const updateAll = new Task("update_all", () => {});

const job = new CronJob(
	{
		cronExpression: "*/ /*5 * * * * *",
	},
	updateAll,
	{
		preventOverrun: true,
	}
);
scheduler.addCronJob(job);*/

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
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers?.get("cookie") || ""
	);

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
