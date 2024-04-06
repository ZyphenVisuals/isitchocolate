import { z } from "zod";

export const formSchema = z
	.object({
		email: z.string().email({ message: "Invalid email." }),
		username: z
			.string()
			.min(2, { message: "Username must be at least 2 characters long." })
			.max(50, { message: "Username must be at most 50 characters long." }),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters wrong." }),
		passwordConfirmation: z
			.string()
			.min(8, { message: "Password must be at least 8 characters wrong." }),
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: "Passwords don't match",
	});

export type FormSchema = typeof formSchema;
