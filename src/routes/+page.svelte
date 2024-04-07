<script>
	import ListItem from "$lib/components/ListItem.svelte";
	export let data;
	import { buttonVariants } from "$lib/components/ui/button/index";
</script>

{#each data.res as app}
	<a href="/app/{app.id}" class="flex-1">
		<ListItem appData={app}></ListItem>
	</a>
{/each}
