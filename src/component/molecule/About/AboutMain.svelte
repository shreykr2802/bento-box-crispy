<script>
	import Background from '../../atoms/Background.svelte';
	import AboutContent from './AboutContent.svelte';
</script>

<div class="main-container">
	<Background />
	<AboutContent />
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
