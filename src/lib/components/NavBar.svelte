<script lang="ts">
	import { goto } from "$app/navigation";
	import logo from "../images/logo.png";
	import Button from "./ui/button/button.svelte";

	function goRegister(): void {
		goto("/register");
	}
	function goLogin(): void {
		goto("/login");
	}

	export let user: any;
</script>

<div class="flex items-center w-full justify-between px-10 h-28 border-b-2">
	<img src={logo} class="w-20" alt="isitchocolate logo" />
	{#if !user}
		<div>
			<Button on:click={goRegister} size="lg" variant="outline">
				<p class="text-lg">Sign up</p>
			</Button>
			<Button on:click={goLogin} size="lg" variant="outline">
				<p class="text-lg">Log in</p>
			</Button>
		</div>
	{:else}
		<Button size="lg" variant="outline">{user.username}</Button>
	{/if}
</div>
