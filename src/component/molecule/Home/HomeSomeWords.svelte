<script>
	import person1 from '../../../lib/images/memoji1.png';
	import person2 from '../../../lib/images/memoji2.png';
	import person3 from '../../../lib/images/memoji3.png';
	import Carousel from '../../atoms/Carousel.svelte';

	const slidesData = [
		{
			content: `
        <img class="carousel-img" style="background-color: bisque; border-radius: 50%;" src="${person1}" alt="person1" />
        <span class="carousel-title" style="align-self: center;">Arjun Mehta</span>
        <span class="carousel-description">
          Shrey's expertise in JavaScript and fullstack development transformed our project. His
          innovative solutions and commitment to quality were outstanding. Highly recommend!
        </span>`
		},
		{
			content: `
        <img class="carousel-img" style="background-color: aquamarine; border-radius: 50%" src="${person2}" alt="person2" />
        <span class="carousel-title" style="align-self: center;">Ravi Patel</span>
        <span class="carousel-description">
          Shrey is a phenomenal fullstack developer. His proficiency in both front-end and
          back-end technologies ensured our project was a success. Truly a pleasure to work with!
        </span>`
		},
		{
			content: `
        <img class="carousel-img" style="background-color: salmon; border-radius: 50%" src="${person3}" alt="person3" />
        <span class="carousel-title" style="align-self: center;">Neha Sharma</span>
        <span class="carousel-description">
          Shrey's skills in JavaScript and fullstack development are top-notch. He delivered
          exceptional results, on time and beyond expectations. An invaluable asset to our team!
        </span>`
		}
	];
	const slidesToDisplay = slidesData.map((slide) => ({ content: slide.content }));
</script>

<div class="box31">
	<section>
		<h2 class="box-title">Some Words</h2>
		<Carousel {slidesToDisplay} indicatorPosition="bottom"/>
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
	@media (max-width: 750px) {
		.box31 {
			width: calc(100% - var(--diff-factor));
			height: 100%; 
			section {
				height: 100%;
			}
		}
	}
</style>
