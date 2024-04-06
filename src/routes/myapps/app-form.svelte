<script lang="ts">
	import * as Form from "$lib/components/ui/form/index";
	import { Input } from "$lib/components/ui/input/index";
	import { formSchema, type FormSchema } from "./schema";
	import {
		type SuperValidated,
		type Infer,
		superForm,
	} from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<Form.Label>Description (optional)</Form.Label>
			<Input {...attrs} bind:value={$formData.description} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="public_url">
		<Form.Control let:attrs>
			<Form.Label>App url</Form.Label>
			<Input {...attrs} bind:value={$formData.public_url} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="health_url">
		<Form.Control let:attrs>
			<Form.Label>Health check endpoint</Form.Label>
			<Input {...attrs} bind:value={$formData.health_url} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button
		class="mt-4 flex mx-auto bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
		>Submit</Form.Button
	>
</form>
