<script>
	export let caseStudy;
	import Prism from 'prismjs';
	import 'prismjs/themes/prism.css';
	import { onMount } from 'svelte';
	import { PUBLIC_ASSETS_ENDPOINT_URL } from '$env/static/public';

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<div class="about-content">
	<div class="container">
		<div class="title">
			<p class="box-description">{caseStudy.title}</p>
			<p class="box-sub-title">Case Study</p>
		</div>
		<div class="initial-details">
			<div class="basic-details">
				<h5 class="box-sub-title">TITLE</h5>
				<p class="box-description-small">{caseStudy.title}</p>
				<h5 class="box-sub-title">TOPIC</h5>
				<span class="box-description-small">
					{@html caseStudy.topic}
				</span>
			</div>
			<div class="basic-description">
				<h5 class="box-sub-title">PROBLEM OVERVIEW</h5>
				<p class="box-description-small">
					{caseStudy.problemOverview}
				</p>
				<h5 class="box-sub-title">OBJECTIVES</h5>
				<span class="box-description-small">
					{@html caseStudy.objectives}
				</span>
			</div>
		</div>
		<h2 class="box-title">{caseStudy.mainTitle}</h2>
		{#each caseStudy.content as caseStudyContent}
			<div>
				<p class="box-description-small">{caseStudyContent.title}</p>
				<h5 class="box-sub-title">{caseStudyContent.useCase}</h5>
			</div>
			{#if caseStudyContent.image}
				<div class="section-image">
					<img
						src="{PUBLIC_ASSETS_ENDPOINT_URL}/casestudyImages/{caseStudy.slug}/{caseStudyContent.image}"
						alt={caseStudyContent.useCase}
					/>
				</div>
			{/if}
			<div>
				<h4 class="box-title">{caseStudyContent.title1}</h4>
				{@html caseStudyContent.html1}
				<h4 class="box-title">{caseStudyContent.title2}</h4>
				{@html caseStudyContent.html2}
			</div>
			{#if caseStudyContent.codeSnippets}
				<p class="box-description-small">{caseStudyContent.codeTitle}</p>
				{#each caseStudyContent.codeSnippets as codeSnippet}
					<div>
						<h4 class="box-title">{codeSnippet.title}</h4>
						<pre><code class={`language-${codeSnippet.codeType}`}>{codeSnippet.code}</code></pre>
					</div>
				{/each}
			{/if}
		{/each}
		<div class="benefits-outcomes">
			<h2 class="box-title">Benefits and Outcomes</h2>
			<div>{@html caseStudy.benefitsAndOutcomes}</div>
		</div>
		<div class="conclusion">
			<h5 class="box-sub-title">Conclusion</h5>
			<p class="box-description-small">
				{caseStudy.conclusion}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.about-content {
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

			.title {
				display: flex;
				flex-direction: column;
			}

			.initial-details {
				display: flex;
				flex-direction: row;
				gap: 1rem;

				.basic-details {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: 12rem;
					padding: 0.75rem;
					width: 30%;
				}

				.basic-description {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: 12rem;
					padding: 0.75rem;
					width: 70%;
				}

				@media (max-width: 800px) {
					flex-direction: column;
					.basic-details,
					.basic-description {
						width: calc(100% - var(--diff-factor));
					}
				}
			}

			.section-image {
				border: var(--box-border);
				border-radius: var(--inner-box-border-radius);
				background-color: var(--color-box-background);
				min-height: 12rem;
				padding: 0.5rem;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					margin: 2rem 1rem 0 1rem;
					aspect-ratio: 1/1;
					width: 80%;
					border-radius: 12px 12px 0 0;
				}
			}
			.benefits-outcomes {
				div {
					margin-left: 2.5rem;
				}
			}
			.conclusion {
				border: var(--box-border);
				display: flex;
				flex-direction: column;
				border-radius: var(--inner-box-border-radius);
				padding: var(--inner-box-margin);
				background-color: var(--color-box-background);
				color: var(--color-text-dark);
			}
			@media (max-width: 800px) {
				margin: 4rem 5%;
			}
		}
	}
</style>
