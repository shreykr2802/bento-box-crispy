<script>
	import CaseStudyMain from "../../../component/molecule/CaseStudy/CaseStudyMain.svelte";
	export let data;
</script>

<svelte:head>
	<title>Shrey Kumar | Ecommerce Case Study</title>
	<meta name="description" content={data.caseStudy.title} />
</svelte:head>

<CaseStudyMain data={data} />

<style>
</style>
