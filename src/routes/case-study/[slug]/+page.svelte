<script>
	import CaseStudyMain from '../../../component/molecule/CaseStudy/CaseStudyMain.svelte';
	import Seo from '../../../component/atoms/Seo.svelte';
	export let data;
</script>

<Seo
	title={`${data.caseStudy.title} — Shrey Kumar`}
	description={data.caseStudy.description ?? data.caseStudy.title}
	type="article"
/>

<CaseStudyMain {data} />

<style>
</style>
