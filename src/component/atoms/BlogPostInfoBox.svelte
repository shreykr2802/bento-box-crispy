<script>
	import ArrowButton from './ArrowButton.svelte';
	export let post;
</script>

<a class="blog-post-info-box" href={`/blog/${post.slug}`}>
	<div>
		<h2 class="blog-title">{post.title}</h2>
		<p class="blog-description">{post.description}</p>
		<ArrowButton navigateTo={`blog/${post.slug}`} />
	</div>
</a>

<style lang="scss">
	.blog-post-info-box {
		border: var(--box-border);
		flex: 1 1 30%;
		border-radius: var(--inner-box-border-radius);
		padding: 1rem;
		margin: 1rem;
		background-color: var(--color-box-background);
		text-decoration: none;
		position: relative;

		div {
			margin: 1rem;

			.blog-title {
				font-weight: 500;
				color: var(--color-text-light);
				letter-spacing: 4px;
				margin: 0;
				padding: 0;
				text-transform: capitalize;
				font-size: 1rem;
			}

			.blog-description {
				font-size: 0.875rem;
				color: var(--color-text-dark);
				letter-spacing: 2px;
				margin-top: 2rem;
				padding: 0;
			}
		}
	}
</style>
