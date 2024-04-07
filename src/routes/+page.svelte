<script>
	import ListItem from "$lib/components/ListItem.svelte";
	export let data;
</script>

{#each data.res as app}
	<a href="/app/{app.id}">
		<ListItem appData={app}></ListItem>
	</a>
{/each}
