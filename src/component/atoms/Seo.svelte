<script>
	import { page } from '$app/stores';
	import { SITE_URL, OG_IMAGE } from '$lib/seo.js';

	export let title;
	export let description;
	export let image = OG_IMAGE;
	export let type = 'website';

	$: canonical = SITE_URL + $page.url.pathname;
	$: ogImage = image.startsWith('http') ? image : SITE_URL + image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Shrey Kumar" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Shrey Kumar — Senior Full-Stack Engineer" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
