<script>
	import Background from '../../atoms/Background.svelte';
	import CaseStudyContent from './CaseStudyContent.svelte';
	export let data;
	console.log("data", data);
</script>

<div class="main-container">
	<Background />
	<CaseStudyContent caseStudy={data.caseStudy} />
</div>

<style>
	.main-container {
		display: grid;
		min-height: 100vh;
		width: 100%;
	}
</style>
