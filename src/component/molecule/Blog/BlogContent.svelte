<script>
	import BlogPostInfoBox from '../../atoms/BlogPostInfoBox.svelte';
	export let data;
</script>

<div class="blog-content">
	<div class="container">
		{#each data.posts as post}
			<BlogPostInfoBox {post} />
		{/each}
	</div>
</div>

<style lang="scss">
	.blog-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		min-width: 0; 

		.container {
			margin: 4rem 10%;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: auto auto auto auto;
			gap: 1rem;
		}
	}
	@media(max-width: 768px) {
		.blog-content {
			.container {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
