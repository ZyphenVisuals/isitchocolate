<script lang="ts">
	import { onMount } from "svelte";
	import State from "./State.svelte";
	import * as HoverCard from "./ui/hover-card/index";
	let response: { status: "STABLE" | "UNSTABLE" | "DOWN"; time: Date }[] = [];
	export let id: string;

	function getRandomStatus(): "STABLE" | "UNSTABLE" | "DOWN" {
		let x = Math.random() * 3;
		if (x < 2.5) return "STABLE";
		if (x < 2.75) return "UNSTABLE";
		return "DOWN";
	}

	async function getStatus(id: string) {
		const dataStream = await fetch("/getHistoricalData/" + id);
		const data = await dataStream.json();
		return data.items;
	}
	let padding: number[] = [];

	let logdata: any;

	onMount(async () => {
		logdata = await getStatus(id);

		logdata.forEach((element: any) => {
			response.push({
				status: element.status,
				time: new Date(element.created),
			});
		});

		console.log(response);

		for (let i = 0; i < 30 - response.length; i++) {
			padding[i] = 1;
		}
	});
</script>

<div class="flex items-center flex-row-reverse">
	{#each response as item}
		{#if item.status == "STABLE"}
			<HoverCard.Root
				><HoverCard.Trigger>
					<div class="w-1 h-4 ml-1 bg-green-800"></div>
				</HoverCard.Trigger>
				<HoverCard.Content>
					<State status={item.status}></State>
					<p>
						{item.time.toLocaleString()}
					</p>
				</HoverCard.Content>
			</HoverCard.Root>
		{:else if item.status == "UNSTABLE"}
			<HoverCard.Root
				><HoverCard.Trigger>
					<div class="w-1 h-4 ml-1 bg-yellow-600"></div>
				</HoverCard.Trigger>
				<HoverCard.Content>
					<State status={item.status}></State>
					<p>
						{item.time.toLocaleString()}
					</p>
				</HoverCard.Content>
			</HoverCard.Root>
		{:else}
			<HoverCard.Root
				><HoverCard.Trigger>
					<div class="w-1 h-4 ml-1 bg-red-600"></div>
				</HoverCard.Trigger>
				<HoverCard.Content>
					<State status={item.status}></State>
					<p>
						{item.time.toLocaleString()}
					</p>
				</HoverCard.Content>
			</HoverCard.Root>
		{/if}
	{/each}
	{#each padding as x}
		<div class="w-1 h-4 ml-1 bg-stone-600"></div>
	{/each}
</div>
