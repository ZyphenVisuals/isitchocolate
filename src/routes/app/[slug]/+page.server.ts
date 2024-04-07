import { redirect } from "@sveltejs/kit";

export const load = async ({ locals, params }) => {
	try {
		const appData = await locals.pb.collection("apps").getOne(params.slug);
		return { appData };
	} catch (err) {
		redirect(307, "/");
	}
};
