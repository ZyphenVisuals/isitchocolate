<script>
	import ListItem from "$lib/components/ListItem.svelte";
	import { DateRangeField } from "bits-ui";
	export let data;
	console.log(data.res);
</script>

{#each data.res as app}
	<a href="/app/{app.id}">
		<ListItem appData={app}></ListItem>
	</a>
{/each}
