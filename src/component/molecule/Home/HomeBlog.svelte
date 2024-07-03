<script>
	import ArrowButton from '../../atoms/ArrowButton.svelte';
</script>

<a class="box42" href="/blog">
	<section>
		<h2 class="box-title">Blogs</h2>
		<p class="box-description">In my free time I do write quite a few blogs.</p>
		<ArrowButton navigateTo="blog" />
	</section>
</a>

<style lang="scss">
	.box42 {
		border: var(--box-border);
		display: flex;
		border-radius: var(--inner-box-border-radius);
		height: calc(100% - var(--diff-factor));
		width: calc(50% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);

		section {
			margin: 1rem;
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;
		}

		&:hover {
			background-color: var(--color-box-background-hover);
			section {
				:global(.arrow-button) {
					transform: scale(1.2);
				}
			}
		}
	}
	@media (max-width: 1024px) {
		.box42 {
			height: calc(100% - var(--diff-factor));
		}
	}

	@media (max-width: 640px) {
		.box42 {
			min-height: 5rem;
		}
	}
</style>
