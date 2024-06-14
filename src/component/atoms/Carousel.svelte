<script>
	export let slidesToDisplay;
	let activeIndex = 0;
	let carouselInner;
	let carouselIndicators;
	let startX = 0;
	let isDragging = false;

	function updateIndicators() {
		const indicators = carouselIndicators.children;
		for (let i = 0; i < indicators.length; i++)
			indicators.item(i).classList.toggle('active', i === activeIndex % indicators.length);
	}

	function showSlide(index) {
		const slides = carouselInner.children;
		const totalSlides = slides.length;

		if (index >= totalSlides - 1) {
			activeIndex = 0;
			carouselInner.style.transition = 'none';
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			setTimeout(() => {
				carouselInner.style.transition = 'transform 1s ease';
				activeIndex++;
				carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
				updateIndicators();
			}, 50);
		} else if (index < 0) {
			activeIndex = totalSlides - 2;
			carouselInner.style.transition = 'none';
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			setTimeout(() => {
				carouselInner.style.transition = 'transform 1s ease';
				activeIndex--;
				carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
				updateIndicators();
			}, 50);
		} else {
			activeIndex = index;
			carouselInner.style.transform = `translateX(-${activeIndex * 100}%)`;
			updateIndicators();
		}
	}

	function nextClick() {
		showSlide(activeIndex + 1);
	}

	function prevClick() {
		showSlide(activeIndex - 1);
	}

	function goToSlide(index) {
		showSlide(index);
	}

	function handleTouchStart(event) {
		startX = event.touches ? event.touches[0].clientX : event.clientX;
		isDragging = true;
	}

	function handleTouchMove(event) {
		if (!isDragging) return;
		const currentX = event.touches ? event.touches[0].clientX : event.clientX;
		const diffX = startX - currentX;

		if (diffX > 50) {
			nextClick();
			isDragging = false;
		} else if (diffX < -50) {
			prevClick();
			isDragging = false;
		}
	}

	function handleTouchEnd() {
		isDragging = false;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="carousel"
	on:mousedown={handleTouchStart}
	on:mousemove={handleTouchMove}
	on:mouseup={handleTouchEnd}
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
>
	<div class="carousel-inner" bind:this={carouselInner}>
		<div>{@html slidesToDisplay[slidesToDisplay.length - 1].content}</div>
		{#each slidesToDisplay as slide}
			<div>{@html slide.content}</div>
		{/each}
		<div>{@html slidesToDisplay[0].content}</div>
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
	<ul class="carousel-indicators" bind:this={carouselIndicators}>
		{#each slidesToDisplay as _, index}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li on:click={() => goToSlide(index)} class={index === 0 && 'active'}></li>
		{/each}
	</ul>
</div>

<style lang="scss">
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
				justify-content: center;
				gap: 10px;
				user-select: none;
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
					background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.1));
				}
			}
			.right-button {
				right: 0;
				top: 0;
				&:hover {
					background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.1));
				}
			}
		}
		.carousel-indicators {
			position: absolute;
			bottom: 0px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			list-style: none;
			padding: 4px;
			margin: 0;
			border-radius: 16px;
			background-color: var(--color-carousel-indicator-background);
		}

		.carousel-indicators li {
			width: 10px;
			height: 10px;
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 50%;
			margin: 0 5px;
			cursor: pointer;
		}

		.carousel-indicators li.active {
			background-color: rgba(255, 255, 255, 1);
		}
	}
</style>
