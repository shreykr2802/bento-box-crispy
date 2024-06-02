<script>
	export let label;
	export let style;
	export let IconComponent;
</script>

<button class={`button ${style}`} on:click={() => console.log('hello')}>
	<span><svelte:component this={IconComponent} /></span>
	{label}
</button>

<style lang="scss">
	.button {
		height: 2rem;
		width: 7rem;
		font-size: 0.7rem;
		font-family: var(--font-basic);
		display: inline-flex;
		align-items: center;
		justify-content: space-around;
		color: white;
		cursor: pointer;
		background-color: black;
		outline: none;
		border: 0;
		border-radius: 0.5rem;

		&.pink {
			background-color: var(--color-pink-100);
		}
	}
</style>
