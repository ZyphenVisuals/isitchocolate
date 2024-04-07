<script lang="ts">
	//import type { AppData } from "$types";
	import Bars from "./Bars.svelte";
	export let appData: any;
</script>

<div
	class="mt-6 w-3/5 mx-auto flex justify-between py-[18px] px-4 rounded-2xl border-2"
>
	<div class="flex items-center">
		<img src={appData.favicon_url} alt="app logo" class="w-8" />
		<p class="ml-2">{appData.name}</p>
	</div>
	<Bars></Bars>
</div>
