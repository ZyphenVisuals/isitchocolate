<script lang="ts">
	export let status: "UP" | "DOWN";
</script>

<div class="w-24">
	{#if status == "UP"}
		<p class="text-green-400">● Up</p>
	{:else if status == "DOWN"}
		<p class="text-red-600">● Down</p>
	{:else}
		<p class="text-stone-600">● Loading</p>
	{/if}
</div>
