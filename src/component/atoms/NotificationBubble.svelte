<script>
	export let totalCount;
	export let description;
</script>

<div class="notification-bubble">
	<span class="bubble">{totalCount}</span>
	<span class="text">{description}</span>
</div>

<style lang="scss">
	.notification-bubble {
		display: flex;
		align-items: center;
		justify-content: flex-start;
        width: 60%;

		.bubble {
			height: 1.5rem;
			width: 2rem;
			border-radius: 1rem;
			background-color: var(--color-orange-100);
			display: flex;
			align-items: center;
			justify-content: center;
            font-size: 0.75em;
            margin-right: 0.25rem;
		}

        .text {
            font-size: 0.75em;
            color: var(--color-green-200);
        }
	}
</style>
