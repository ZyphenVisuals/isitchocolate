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

	const { form: formData, enhance, message } = form;

	import * as Alert from "$lib/components/ui/alert/index";
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password</Form.Label>
			<Input type="password" {...attrs} bind:value={$formData.password} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="passwordConfirmation">
		<Form.Control let:attrs>
			<Form.Label>Confirm password</Form.Label>
			<Input
				type="password"
				{...attrs}
				bind:value={$formData.passwordConfirmation}
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Button
		class="mt-4 flex text-base mx-auto bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
		>Sign up</Form.Button
	>
	{#if $message}
		<Alert.Root
			class="mt-4 bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
		>
			<Alert.Title>Success!</Alert.Title>
			<Alert.Description>{$message}</Alert.Description>
		</Alert.Root>
	{/if}
</form>
