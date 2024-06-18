<script>
	import { onMount } from 'svelte';
	import CrossHomeButton from '../../atoms/CrossHomeButton.svelte';
	import Divider from '../../atoms/Divider.svelte';
	import NotificationBubble from '../../atoms/NotificationBubble.svelte';
	export let data;

	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="blog-content">
	<CrossHomeButton goBackTo="/blog" />
	<section class="container">
		<div class="header">
			<div class="blog-data-box title-details">
				<div>
					<h1 class="box-title">{data.post.title}</h1>
					<Divider />
					<div class="date-tag">
						<div>
							<h5 class="box-sub-title">Date</h5>
							<p class="box-description-small">
								{Date(data.post.date).substring(0, 15)}
							</p>
						</div>
						<div>
							<h5 class="box-sub-title">Tags</h5>
							<span class="blog-tags">
								{#each data.post.tags as tag}
									<NotificationBubble {tag} />
								{/each}
							</span>
						</div>
					</div>
					<div>
						<h5 class="box-sub-title">Description</h5>
						<p class="box-description-small">
							{data.post.description}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="main-image">
			<img src="/blogImages/1/main-image.png" alt="hoisting and closure javascript" />
		</div>
		<div class="introduction">
			<h2>Introduction</h2>
			<p class="box-description-small">
				{data.post.introduction}
			</p>
		</div>
		<div class="content">
			{#each data.post.content as content}
				<div class="each-content">
					<p class="box-sub-title">{content.heading}</p>
					{#if content.code}
						<pre><code class="language-javascript">{content.code}</code></pre>
					{/if}
				</div>
			{/each}
		</div>
		<div class="conclusion">
			<div class="blog-data-box title-details">
				<div>
					<h5 class="box-sub-title">Conclusion</h5>
					<p class="box-description-small">
						{data.post.conclusion}
					</p>
				</div>
				<div>
					<h5 class="box-sub-title">Links and Refs</h5>
					<p class="box-description-small">
						{#each data.post.artifacts as artifact}
							<a href={artifact} alt="outside link" target="_blank">{artifact}</a><br />
						{/each}
					</p>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.blog-data-box {
		border: var(--box-border);
		display: flex;
		border-radius: var(--inner-box-border-radius);
		padding: var(--inner-box-margin);
		background-color: var(--color-box-background);
		color: var(--color-text-dark);

		div {
			margin: var(--inner-box-margin);
			.box-title {
				color: var(--color-red-neon);
				letter-spacing: 2px;
			}
			.box-sub-title {
				margin: 1rem 0;
			}
		}
	}
	.blog-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		min-width: 0;

		.container {
			margin: 4rem 10%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			justify-content: center;

			.header {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				.title-details {
					flex-direction: column;
					margin-bottom: 1rem;
					width: 100%;
				}
				.description {
					width: 100%;
				}
				.date-tag {
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: space-between;
					.blog-tags {
						display: flex;
						width: 100%;
						flex-direction: row;
					}
				}
			}
			.introduction {
				h2 {
					color: var(--color-text-dark);
				}
			}
			.main-image {
				align-self: center;
			}
			.content {
				.each-content {
					display: flex;
					flex-direction: column;

					.box-sub-title {
						color: var(--color-red-neon);
					}
				}
			}
			.conclusion {
				.title-details {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				a {
					color: var(--color-red-neon)
				}
			}
		}
	}
</style>
