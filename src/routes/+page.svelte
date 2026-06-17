<script>
	import HomeMain from '../component/molecule/Home/HomeMain.svelte';
	import Seo from '../component/atoms/Seo.svelte';
	import { personSchema } from '$lib/seo.js';
</script>

<Seo
	title="Shrey Kumar — Full-Stack Engineer who ships | shreykr2802"
	description="Senior full-stack engineer. 7 years turning hard problems into shipped product — React, Node, TypeScript. Half this page is interactive; go press something."
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(personSchema)}<\/script>`}
</svelte:head>

<HomeMain />

<style>
</style>
