<script>
	import Background from '../../atoms/Background.svelte';
	import CaseStudyContent from './CaseStudyContent.svelte';
</script>

<div class="main-container">
	<Background />
	<CaseStudyContent />
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
