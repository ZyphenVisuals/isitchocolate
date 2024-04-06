<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import { ModeWatcher } from "mode-watcher";
	import "../app.pcss";
</script>

<ModeWatcher></ModeWatcher>
<NavBar></NavBar>
<slot />
