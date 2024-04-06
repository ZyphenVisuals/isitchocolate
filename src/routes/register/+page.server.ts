import type { PageServerLoad, Actions } from "./$types.js";
import { fail, error } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
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
			await locals.pb.collection("users").create({
				username: form.data.username,
				email: form.data.email,
				password: form.data.password,
				passwordConfirm: form.data.passwordConfirmation,
			});
			await locals.pb.collection("users").requestVerification(form.data.email);
		} catch (err) {
			console.log("Error: ", err);
			throw error(500, "Something went wrong.");
		}
		return {
			form,
		};
	},
};
