<script lang="ts">
	import State from "./State.svelte";

	export let name: String;
	export let status: "STABLE" | "DOWN" | "UNSTABLE";
</script>

<div
	class="mt-6 w-4/5 mx-auto flex justify-between py-[10px] px-4 rounded-md border-2"
>
	<img src="" alt="app logo" />
	<p>{name}</p>
	<State {status}></State>
	<p>CAHRT</p>
</div>
