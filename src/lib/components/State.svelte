<script lang="ts">
	export let status: "STABLE" | "DOWN" | "UNSTABLE";
</script>

<div class="w-24">
	{#if status == "STABLE"}
		<p class="text-green-400">● Stable</p>
	{:else if status == "UNSTABLE"}
		<p class="text-yellow-400">● Unstable</p>
	{:else}
		<p class="text-red-600">● Down</p>
	{/if}
</div>
