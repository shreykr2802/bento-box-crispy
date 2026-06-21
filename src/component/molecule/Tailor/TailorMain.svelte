<script>
	import Background from '../../atoms/Background.svelte';
	import TailorContent from './TailorContent.svelte';
</script>

<div class="main-container">
	<Background />
	<TailorContent />
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
