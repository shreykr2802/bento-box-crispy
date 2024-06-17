<script>
	import BlogPostMain from "../../../component/molecule/BlogPost/BlogPostMain.svelte";
	export let data;
	console.log("blog", data)
</script>

<svelte:head>
	<title>Bento Box</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<BlogPostMain data={data}/>

<style>
</style>
