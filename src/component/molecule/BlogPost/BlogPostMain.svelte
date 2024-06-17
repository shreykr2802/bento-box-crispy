<script>
	import Background from '../../atoms/Background.svelte';
	import BlogPostContent from './BlogPostContent.svelte';
	export let data;
</script>

<div class="main-container">
	<Background />
	<BlogPostContent data={data}/>
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
