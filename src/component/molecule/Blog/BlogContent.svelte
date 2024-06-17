<script>
	import CrossHomeButton from '../../atoms/CrossHomeButton.svelte';
	export let data;
</script>

<div class="blog-content">
	<CrossHomeButton />
	<div class="container">
		{#each data.posts as post}
			<li>
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</li>
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
			display: flex;
			flex-direction: row;
			gap: 1rem;
			justify-content: center;
		}
	}
</style>
