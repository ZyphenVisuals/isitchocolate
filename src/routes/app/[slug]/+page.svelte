<script lang="ts">
	export let data: { appData: any };
	import ImmediateState from "$lib/components/ImmediateState.svelte";
	import { Separator } from "$lib/components/ui/separator/index";
	import { onMount } from "svelte";

	import * as Select from "$lib/components/ui/select/index.js";
	import { Trigger } from "$lib/components/ui/dialog";
	import { Value } from "svelte-radix";
	import BigBars from "$lib/components/BigBars.svelte";

	const fruits = [
		{ value: 1000, label: "1 Second" },
		{ value: 3000, label: "3 Seconds" },
		{ value: 10000, label: "10 Seconds" },
		{ value: 60000, label: "1 Minute" },
	];

	let status: "UP" | "DOWN";
	let timeout: any;
	function changeInterval(time: any) {
		clearInterval(timeout);
		timeout = setInterval(() => {
			updateData();
		}, time);
	}
	async function updateData() {
		try {
			const response = await fetch(data.appData.health_url);
			if (response.ok) {
				status = "UP";
			} else {
				status = "DOWN";
			}
		} catch (error) {
			console.error(error);
			status = "DOWN";
		}
	}
	onMount(async () => {
		timeout = setInterval(() => {
			updateData();
		}, 3000);
	});
</script>

<div class="flex flex-col">
	<div class="mt-6 w-3/5 mx-auto py-[18px] px-4 rounded-2xl border-2 text-lg">
		<div class="flex mx-auto justify-between">
			<div class="flex items-center">
				<img
					src={data.appData.favicon_url}
					alt="Icon of {data.appData.name}"
					class="w-10"
				/>
				<p class="pl-2 pr-2">{data.appData.name}</p>
			</div>
			<div>
				<ImmediateState {status}></ImmediateState>

				<Select.Root
					onSelectedChange={(v) => {
						v && changeInterval(v.value);
					}}
				>
					<Select.Trigger class="w-[180px]">
						<Select.Value placeholder="3 Seconds" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Fruits</Select.Label>
							{#each fruits as fruit}
								<Select.Item value={fruit.value} label={fruit.label}
									>{fruit.label}</Select.Item
								>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<Separator class="my-3" />
		<div class="flex h-5 items-center space-x-4 text-lg">
			<div>{data.appData.description}</div>
			<Separator orientation="vertical" />
			<div>
				Click here to visit {data.appData.name}:
				<a href={data.appData.public_url} target="_blank"
					>{data.appData.public_url}</a
				>
			</div>
		</div>
	</div>
	<div class="mt-8">
		<BigBars id={data.appData.id}></BigBars>
	</div>
</div>
