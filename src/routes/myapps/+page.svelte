<script lang="ts">
	import type { PageData } from "./$types.js";
	import { buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog/index";
	import SettingsForm from "./app-form.svelte";
	export let data: PageData;
</script>

<div class="h-[calc(100vh-112px)] flex justify-around items-center">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: "default" })}
			>Add app
		</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add app</Dialog.Title>
				<Dialog.Description>Please insert app information</Dialog.Description>
			</Dialog.Header>
			<SettingsForm data={data.form} />
		</Dialog.Content>
	</Dialog.Root>
</div>
