<script>
	import Carousel from '../../atoms/Carousel.svelte';

	// ⚠️ PLACEHOLDER testimonials — realistic in format, but not real endorsements.
	// Replace with genuine quotes (e.g. your LinkedIn recommendations) before launch,
	// and add the recommender's profile link. Don't ship fabricated endorsements.
	const testimonials = [
		{
			quote:
				'Shrey took our checkout rewrite from "someday" to shipped in six weeks. He\'s as sharp on Postgres query plans as he is on React render performance.',
			name: 'Soumya Thomas',
			title: 'Project Manager · Tavant',
			initials: 'ST',
			color: '#5b8def'
		},
		{
			quote:
				'We handed him an ambiguous spec and he came back with the right questions, then the right architecture. Front-end polish and back-end rigor in one person.',
			name: 'Guang Wei',
			title: 'Technical Architect · DOXA',
			initials: 'GW',
			color: '#e8804b'
		},
		{
			quote:
				"He shipped our TypeScript migration with zero downtime and left the codebase cleaner than he found it. One of the most reliable engineers I've worked with.",
			name: 'Jithesh N',
			title: 'Project Manager · Chimera',
			initials: 'JN',
			color: '#48b287'
		}
	];

	const slidesToDisplay = testimonials.map((t) => ({
		content: `
		<figure style="display:flex;flex-direction:column;gap:0.9rem;max-width:34rem;margin:0;padding:0 0.5rem;">
			<blockquote style="margin:0;color:var(--color-text-dark);font-size:1.05rem;line-height:1.55;text-align:left;">&ldquo;${t.quote}&rdquo;</blockquote>
			<figcaption style="display:flex;align-items:center;gap:0.6rem;">
				<span style="width:42px;height:42px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:${t.color};color:#fff;font-family:var(--font-display);font-weight:700;font-size:0.95rem;">${t.initials}</span>
				<span style="display:flex;flex-direction:column;line-height:1.25;text-align:left;">
					<span style="color:var(--color-text-dark);font-weight:600;">${t.name}</span>
					<span style="color:var(--color-text-light);font-size:0.8rem;">${t.title}</span>
				</span>
			</figcaption>
		</figure>`
	}));
</script>

<div class="box31">
	<section>
		<h2 class="box-title">Don't take my word for it</h2>
		<Carousel {slidesToDisplay} indicatorPosition="bottom" />
	</section>
</div>

<style lang="scss">
	.box31 {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		height: calc(100% - var(--diff-factor));
		width: calc(60% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);

		section {
			margin: 1rem;
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: hidden;
		}
	}
	@media (max-width: 790px) {
		.box31 {
			width: calc(100% - var(--diff-factor));
			height: 100%;
			section {
				height: 100%;
			}
		}
	}
</style>
