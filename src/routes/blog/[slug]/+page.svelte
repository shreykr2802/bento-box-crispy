<script>
	import BlogPostMain from "../../../component/molecule/BlogPost/BlogPostMain.svelte";
	export let data;
</script>

<svelte:head>
	<title>{data.post.title}</title>
	<meta name="description" content="{data.post.description}" />
</svelte:head>

<BlogPostMain data={data}/>

<style>
</style>
