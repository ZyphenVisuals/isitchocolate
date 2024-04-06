import type { PageServerLoad, Actions } from "./$types.js";
import { fail, error } from "@sveltejs/kit";
import { setError, superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { message } from "sveltekit-superforms";

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		let form = await superValidate(request, zod(formSchema));
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
		} catch (err: any) {
			const errors = err.originalError.data.data;
			console.log("Error: ", errors);
			if (errors.email) setError(form, "email", errors.email.message);
			if (errors.username) setError(form, "username", errors.username.message);
			return {
				form,
			};
		}

		return message(form, "Check your email for confirmation.");
	},
};
