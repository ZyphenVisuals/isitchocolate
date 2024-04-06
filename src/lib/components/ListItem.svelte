<script lang="ts">
	import State from "./State.svelte";

	export let name: String;
	export let status: "STABLE" | "DOWN" | "UNSTABLE";
</script>

<div
	class="mt-6 w-3/5 mx-auto flex justify-between py-[18px] px-4 rounded-2xl border-2"
>
	<img src="https://www.reddit.com/favicon.ico" alt="app logo" />
	<p>{name}</p>
	<State {status}></State>
	<p>CAHRT</p>
</div>
