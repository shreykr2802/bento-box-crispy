<script>
	import BlogsMain from "../../component/molecule/Blog/BlogsMain.svelte";
	export let data;
</script>

<svelte:head>
	<title>Shrey Kumar — Writing</title>
	<meta
		name="description"
		content="Tech deep-dives, travel, and the occasional rabbit hole. Fair warning: you'll lose ten minutes in here."
	/>
</svelte:head>

<BlogsMain data={data}/>

<style>
</style>
