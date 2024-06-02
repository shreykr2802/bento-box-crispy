<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<!-- <Header /> -->

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
