<script>
	export let tag;
</script>

<div class="notification-bubble">
	<span class="bubble">{tag}</span>
</div>

<style lang="scss">
	.notification-bubble {
		display: flex;
		align-items: center;
		justify-content: flex-start;
        width: 60%;

		.bubble {
			height: 1.5rem;
			padding: 0.25rem;
			width: auto;
			min-width: 4rem;
			border-radius: 1rem;
			background-color: var(--color-orange);
			color: var(--color-text-dark);
			display: flex;
			align-items: center;
			justify-content: center;
            font-size: 0.75em;
            margin-right: 0.25rem;
		}
	}
</style>
