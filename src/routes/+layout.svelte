<script>
	import './styles.scss';
	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import CustomCursor from '../component/atoms/CustomCursor.svelte';
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
<main>
	<slot />
</main>

<footer></footer>

<style>
	main {
		height: 100%;
		width: 100%;
		background-color: var(--color-background);
	}
</style>
