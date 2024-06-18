<script>
	import BlogsMain from "../../component/molecule/Blog/BlogsMain.svelte";
	export let data;
</script>

<svelte:head>
	<title>Bento Box</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<BlogsMain data={data}/>

<style>
</style>
