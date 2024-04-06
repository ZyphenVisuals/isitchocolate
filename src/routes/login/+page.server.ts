import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { message, setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
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

		try {
			await locals.pb
				.collection("users")
				.authWithPassword(form.data.username, form.data.password);
		} catch (err) {
			console.log(err);
			return message(form, "Incorrect login", { status: 401 });
		}

		redirect(307, "/");
	},
};
