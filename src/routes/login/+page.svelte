<script lang="ts">
	import type { PageData } from "./$types.js";
	import * as Card from "$lib/components/ui/card/index";
	import SettingsForm from "./login-form.svelte";
	export let data: PageData;
</script>

<Card.Root class="w-1/3 mx-auto mt-16">
	<Card.Header>
		<Card.Title class="text-lg">Welcome back!</Card.Title>
		<Card.Description class="text-base"
			>Please log in to continue</Card.Description
		>
	</Card.Header>
	<Card.Content class="text-lg">
		<SettingsForm data={data.form} />
	</Card.Content>
</Card.Root>
