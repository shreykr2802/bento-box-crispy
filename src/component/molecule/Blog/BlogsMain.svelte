<script>
	import Background from '../../atoms/Background.svelte';
	import BlogContent from './BlogContent.svelte';
	export let data;
</script>

<div class="main-container">
	<Background />
	<BlogContent data={data}/>
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
