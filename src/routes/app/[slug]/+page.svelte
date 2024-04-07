<script lang="ts">
	export let data: { appData: any };
</script>

<div
	class="mt-6 w-3/5 mx-auto flex justify-between py-[18px] px-4 rounded-2xl border-"
>
	<div>
		<img src={data.appData.favicon_url} alt="Icon of {data.appData.name}" />
		<p>{data.appData.name}</p>
	</div>
	<p>{data.appData.description}</p>
	<a href={data.appData.public_url}>Link for {data.appData.name}</a>
</div>
