import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		redirect(307, "/");
	}
	const res = await locals.pb.collection("apps").getFullList();

	return {
		form: await superValidate(zod(formSchema)),
		res: res,
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const favicon_url = form.data.public_url + "/favicon.ico";

		const data = {
			name: form.data.name,
			description: form.data.description,
			public_url: form.data.public_url,
			health_url: form.data.health_url,
			favicon_url: favicon_url,
			user: locals.user.id,
		};

		await locals.pb.collection("apps").create(data);

		return message(form, "App has been added!");
	},
};
