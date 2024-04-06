import { z } from "zod";

export const formSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Name must be at least 1 characters long." })
		.max(50, { message: "Name must be at most 50 characters long." }),
	description: z.string().optional(),
	public_url: z.string().url({ message: "Invalid URL" }),
	health_url: z.string().url({ message: "Invalid URL" }),
});

export type FormSchema = typeof formSchema;
