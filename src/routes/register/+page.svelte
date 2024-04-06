<script lang="ts">
	import type { PageData } from "./$types.js";
	import SettingsForm from "./register-form.svelte";
	import * as Card from "$lib/components/ui/card/index";
	export let data: PageData;
</script>

<Card.Root class="w-1/3 mx-auto mt-16">
	<Card.Header>
		<Card.Title>Hello there!</Card.Title>
		<Card.Description>Please create an account to continue</Card.Description>
	</Card.Header>
	<Card.Content>
		<SettingsForm data={data.form} />
	</Card.Content>
</Card.Root>
