<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import { ModeWatcher } from "mode-watcher";
	import "../app.pcss";

	export let data;
</script>

<ModeWatcher></ModeWatcher>
<NavBar user={data.user}></NavBar>
<slot />
