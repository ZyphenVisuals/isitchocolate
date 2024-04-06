<script lang="ts">
	import { goto } from "$app/navigation";
	import logo from "../images/logo.png";
	import Button from "./ui/button/button.svelte";
	import * as DropdownMenu from "./ui/dropdown-menu";
	import { buttonVariants } from "$lib/components/ui/button";
	function goRegister(): void {
		goto("/register");
	}
	function goLogin(): void {
		goto("/login");
	}
	function goApps(): void {
		goto("/myapps");
	}
	function goHome(): void {
		goto("/");
	}

	export let user: any;
</script>

<div class="flex items-center w-full justify-between px-10 h-28 border-b-2">
	<button on:click={goHome}>
		<img src={logo} class="w-20" alt="isitchocolate logo" />
	</button>
	{#if !user}
		<div>
			<Button
				on:click={goRegister}
				size="lg"
				variant="outline"
				class="bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
			>
				<p class="text-lg">Sign up</p>
			</Button>
			<Button
				on:click={goLogin}
				size="lg"
				variant="outline"
				class="bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
			>
				<p class="text-lg">Log in</p>
			</Button>
		</div>
	{:else}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					size="lg"
					variant="outline"
					class="bg-[linear-gradient(90deg,#ff66c4,#ffde59)] text-black"
					>{user.username}</Button
				>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item>
					<Button on:click={goApps} variant="ghost" size="lg">My apps</Button>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<form action="/logout" method="post">
						<button class={buttonVariants({ variant: "ghost", size: "lg" })}
							>Log out</button
						>
					</form>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	{/if}
</div>
