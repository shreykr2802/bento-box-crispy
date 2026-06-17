<script>
	import BlogPostMain from '../../../component/molecule/BlogPost/BlogPostMain.svelte';
	import Seo from '../../../component/atoms/Seo.svelte';
	export let data;
</script>

<Seo title={data.post.title} description={data.post.description} type="article" />

<BlogPostMain {data} />

<style>
</style>
