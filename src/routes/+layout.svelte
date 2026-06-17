<script>
	import './styles.scss';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import CustomCursor from '../component/atoms/CustomCursor.svelte';
	import { tiltGroup } from '$lib/actions/tilt.js';
	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

{#if $page.route.id !== '/'}
	<Header
		goBackTo={$page.route.id === '/blog' ||
		$page.route.id === '/about' ||
		$page.route.id.includes('/case-study')
			? '/'
			: '/blog'}
	/>
{/if}
<CustomCursor />
<main use:tiltGroup>
	<slot />
</main>

<footer></footer>

<style>
	main {
		height: 100%;
		width: 100%;
		background-color: var(--color-background);
		background-image:
			radial-gradient(58% 50% at 16% 0%, rgba(255, 59, 59, 0.08), transparent 70%),
			radial-gradient(48% 45% at 100% 100%, rgba(255, 59, 59, 0.05), transparent 72%);
		background-repeat: no-repeat;
	}
</style>
