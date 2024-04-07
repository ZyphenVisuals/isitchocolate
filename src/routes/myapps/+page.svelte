<script lang="ts">
	import { buttonVariants } from "$lib/components/ui/button";
	import * as Dialog from "$lib/components/ui/dialog/index";
	import SettingsForm from "./app-form.svelte";
	import ListItem from "$lib/components/ListItem.svelte";
	export let data;
</script>

{#each data.res as app}
	{#if app.user == data.user.id}
		<a href="/app/{app.id}">
			<ListItem appData={app}></ListItem>
		</a>
	{/if}
{/each}
<div class="flex justify-around items-center mt-4">
	<Dialog.Root>
		<Dialog.Trigger
			class={buttonVariants({
				variant: "default",
				class:
					"bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black text-base",
			})}
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
