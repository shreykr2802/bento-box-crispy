<script>
	import person1 from '../../../lib/images/memoji1.png';
	import person2 from '../../../lib/images/memoji2.png';
	import person3 from '../../../lib/images/memoji3.png';
	let activeIndex = 0;
	let carouselInner;

	function showSlide(index) {
		const slides = carouselInner.children;
		const totalSlides = slides.length;

		if (index >= totalSlides) {
			activeIndex = 1;
			carouselInner.style.transition = 'none';
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			setTimeout(() => {
				carouselInner.style.transition = 'transform 1s ease';
				activeIndex++;
				carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			}, 50);
		} else if (index < 0) {
			activeIndex = totalSlides - 2;
			carouselInner.style.transition = 'none';
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			setTimeout(() => {
				carouselInner.style.transition = 'transform 1s ease';
				activeIndex--;
				carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			}, 50);
		} else {
			activeIndex = index;
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
		}
	}

	function nextClick() {
		showSlide(activeIndex + 1);
	}

	function prevClick() {
		showSlide(activeIndex - 1);
	}

	const drag = (e) => {
		console.log(e)
	} 
</script>

<div class="box31">
	<section>
		<h2 class="box-title">Some Words</h2>
		<div class="carousel">
			<div class="carousel-inner" bind:this={carouselInner}>
				<div>
					<img style="background-color: salmon;" src={person3} alt="person3" />
					<span style="color: var(--color-text-dark);">Neha Sharma</span>
					<span class="description"
						>Shrey's skills in JavaScript and fullstack development are top-notch. He delivered
						exceptional results, on time and beyond expectations. An invaluable asset to our team!</span
					>
				</div>
				<div>
					<img style="background-color: bisque;" src={person1} alt="person1" />
					<span style="color: var(--color-text-dark);">Arjun Mehta</span>
					<span class="description"
						>Shrey's expertise in JavaScript and fullstack development transformed our project. His
						innovative solutions and commitment to quality were outstanding. Highly recommend!</span
					>
				</div>
				<div>
					<img style="background-color: aquamarine;" src={person2} alt="person2" />
					<span style="color: var(--color-text-dark);">Ravi Patel</span>
					<span class="description"
						>Shrey is a phenomenal fullstack developer. His proficiency in both front-end and
						back-end technologies ensured our project was a success. Truly a pleasure to work with!</span
					>
				</div>
				<div>
					<img style="background-color: salmon;" src={person3} alt="person3" />
					<span style="color: var(--color-text-dark);">Neha Sharma</span>
					<span class="description"
						>Shrey's skills in JavaScript and fullstack development are top-notch. He delivered
						exceptional results, on time and beyond expectations. An invaluable asset to our team!</span
					>
				</div>
				<div>
					<img style="background-color: bisque;" src={person1} alt="person1" />
					<span style="color: var(--color-text-dark);">Arjun Mehta</span>
					<span class="description"
						>Shrey's expertise in JavaScript and fullstack development transformed our project. His
						innovative solutions and commitment to quality were outstanding. Highly recommend!</span
					>
				</div>
				<!-- <div c><button /><button /><button /></div> -->
			</div>
			<div class="carousel-button">
				<button on:click={prevClick} class="left-button">
					<svg
						clip-rule="evenodd"
						fill-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
							fill-rule="nonzero"
						/></svg
					>
				</button>
				<button on:click={nextClick} class="right-button">
					<svg
						clip-rule="evenodd"
						fill-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
							fill-rule="nonzero"
						/></svg
					>
				</button>
			</div>
		</div>
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
			height: 90%;
			overflow: hidden;

			.carousel {
				height: 100%;
				width: 100%;
				position: relative;

				.carousel-inner {
					height: 100%;
					width: 100%;
					display: flex;
					transition: transform 1s ease-in-out;

					div {
						min-width: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						user-select: none;

						img {
							width: 5rem;
							border-radius: 50%;
						}

						.description {
							color: var(--color-text-light);
							margin: 0.5rem 1rem;
							text-align: justify;
						}
					}
				}
				.carousel-button {
					button {
						position: absolute;
						height: 100%;
						background-color: transparent;
						width: 2rem;
						color: var(--color-stack-box-hover);
						border: none;
						border-radius: 8px;
						fill: var(--color-text-light);
					}
					.left-button {
						left: 0;
						top: 0;
						&:hover {
							background-image: linear-gradient(
								to left,
								rgba(0, 0, 0, 0),
								rgba(255, 255, 255, 0.1)
							);
						}
					}
					.right-button {
						right: 0;
						top: 0;
						&:hover {
							background-image: linear-gradient(
								to right,
								rgba(0, 0, 0, 0),
								rgba(255, 255, 255, 0.1)
							);
						}
					}
				}
			}
		}
	}
</style>
