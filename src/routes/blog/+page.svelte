<script>
	import BlogsMain from '../../component/molecule/Blog/BlogsMain.svelte';
	import Seo from '../../component/atoms/Seo.svelte';
	export let data;
</script>

<Seo
	title="Shrey Kumar — Writing"
	description="Tech deep-dives, travel, and the occasional rabbit hole. Fair warning: you'll lose ten minutes in here."
/>

<BlogsMain {data} />

<style>
</style>
