<script>
	import ArrowButton from './ArrowButton.svelte';
	export let post;
	import { PUBLIC_ASSETS_ENDPOINT_URL } from '$env/static/public';
</script>

<a class="blog-post-info-box" href={`/blog/${post.slug}`}>
	<h2 class="blog-title">{post.title}</h2>
	<p class="blog-description">{post.description}</p>
	<div class="main-image">
		<img src="{PUBLIC_ASSETS_ENDPOINT_URL}/blogImages/{post.slug}/main-image.png" alt={post.slug} />
	</div>
	<div class="small-info">
		{post.readTime}
	</div>
	<ArrowButton navigateTo="blog/${post.slug}" s />
</a>

<style lang="scss">
	.blog-post-info-box {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		background-color: var(--color-box-background);
		text-decoration: none;
		position: relative;
		padding: 1rem;
		display: grid;
		grid-template-rows: subgrid;
		grid-row: 1/5;

		.blog-title {
			font-weight: 500;
			color: var(--color-red-neon);
			margin: 0;
			padding: 0;
			text-transform: capitalize;
			font-size: 1rem;
		}

		.blog-description {
			font-size: 0.875rem;
			color: var(--color-text-dark);
			margin: 0.5rem 0;
		}

		.main-image {
			align-self: center;
			margin: 0;
			padding: 0;
			img {
				width: 100%;
			}
		}

		.small-info {
			font-size: 0.875rem;
			color: var(--color-text-dark);
			margin: 0.25rem 0;
			padding: 0;
		}
		:global(.arrow-button) {
			bottom: 0;
			right: 0;
			top: unset;
		}
		&:hover {
			background-color: var(--color-box-background-hover);
			:global(.arrow-button) {
				transform: scale(1.2);
			}
		}
		@media (max-width: 768px) {
			.blog-title {
				font-size: 0.875rem;
			}
			.blog-description,
			.small-info {
				font-size: 0.65rem;
			}
		}
	}
</style>
