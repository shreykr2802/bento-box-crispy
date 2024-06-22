<script>
	import Carousel from '../../atoms/Carousel.svelte';
	import Divider from '../../atoms/Divider.svelte';
	import HomeStackUse from '../Home/HomeStackUse.svelte';
	import Outside1 from '../../../lib/images/Outside1.webp';
	import Outside2 from '../../../lib/images/Outside2.webp';
	import Outside3 from '../../../lib/images/Outside3.webp';

	const slidesToDisplay = [
		{
			content: `
        <span class="carousel-title">Javascript Expert</span>
        <span class="carousel-description">
			I've immersed myself in the depths of JavaScript for an extended duration, systematically unraveling its myriad concepts to achieve a comprehensive mastery.
        </span>`
		},
		{
			content: `
        <span class="carousel-title">Frontend Libraries</span>
        <span class="carousel-description">
			Whether it's React.js, Next.js, or Svelte, I delve into frontend libraries with an insatiable curiosity to learn and ultimately master their intricacies. 
        </span>`
		},
		{
			content: `
        <span class="carousel-title">Take Challenge Personally</span>
        <span class="carousel-description">
			Taking on challenges personally drives my growth and learning, pushing boundaries to achieve deeper understanding and mastery.
        </span>`
		}
	];

	const imagesToDisplay = [
		{
			content: `<div style="border-radius: 1rem;"><img src="${Outside1}" style="width:100%;border-radius: 1rem;" alt="outisde1"/></div>`
		},
		{
			content: `<div style="border-radius: 1rem;"><img src="${Outside2}" style="width:100%;border-radius: 1rem;" alt="outisde2"/></div>`
		},
		{
			content: `<div style="border-radius: 1rem;"><img src="${Outside3}" style="width:100%;border-radius: 1rem;" alt="outisde3"/></div>`
		}
	];
</script>

<div class="about-content">
	<div class="container">
		<div class="column">
			<div class="col-group">
				<div class="box1">
					<section>
						<h1 class="box-title">What I'm about?</h1>
						<Divider />
						<h5 class="box-sub-title">MY STORY</h5>
						<p class="box-description-small">
							My passion for technology began at the age of 12 when I discovered C++. Since then, I
							have continually pursued knowledge and exploration in technology and programming
							languages. With a diverse skill set, I consistently deliver comprehensive solutions
							across both front-end and back-end development. My journey is fueled by a commitment
							to innovation and excellence. I approach every task with meticulous attention to
							detail and a strong problem-solving mindset.
						</p>
						<h5 class="box-sub-title">WHAT I DO NOW</h5>
						<p class="box-description-small">
							Today I'm a Senior Software Engineer at Chimera Technologies, providng them the best
							solution.
						</p>
					</section>
				</div>
			</div>
			<div class="col-group">
				<div class="box2">
					<section>
						<h5 class="box-sub-title">EXPERIENCE</h5>
						<ul>
							<li>Chimera Technologies</li>
							<li>Senior Software Engineer</li>
							<li>Nov-2021 - current</li>
							<li>Pepperfry</li>
							<li>Senior Software Engineer</li>
							<li>Aug-2021 - Nov-2021</li>
							<li>Tavant</li>
							<li>Senior Software Engineer</li>
							<li>Jan-2017 - Aug 2021</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="col-group">
				<div class="box3">
					<section>
						<h5 class="box-sub-title">WHAT I DO BEST</h5>
						<Carousel {slidesToDisplay} showButtons={false} indicatorPosition="bottom"/>
					</section>
				</div>
				<div class="box4">
					<HomeStackUse />
				</div>
			</div>
			<div class="col-group">
				<div class="box5">
					<section>
						<Carousel slidesToDisplay={imagesToDisplay} showButtons={false} />
					</section>
				</div>
				<div class="box6"></div>
			</div>
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
			flex-direction: row;
			gap: 1rem;
			justify-content: center;

			.column {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				width: min((50% - 1rem), 30rem);

				.col-group {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					div {
						border: var(--box-border);
						border-radius: var(--inner-box-border-radius);
						background-color: var(--color-box-background);
						min-height: 12rem;
						padding: 0.75rem;
						section {
							margin: 1.5rem;
						}
					}

					.box1 {
						height: max-content;
					}

					.box2 {
						min-height: 20rem;
						ul {
							list-style: none;
							padding: 0;

							:nth-child(3n + 1) {
								font-size: 1.25rem;
								color: var(--color-text-dark);
								margin-top: 0.5rem;
								padding: 0;
								letter-spacing: 1px;
								line-height: 30px;
								word-spacing: 2px;
								word-break: break-word;
								overflow-wrap: break-word;
							}

							:nth-child(3n + 2) {
								font-size: 1rem;
								color: var(--color-text-light);
								padding: 0;
								letter-spacing: 1px;
								line-height: 30px;
								word-spacing: 2px;
								word-break: break-word;
								overflow-wrap: break-word;
							}

							:nth-child(3n + 3) {
								font-size: 0.75rem;
								font-weight: 700;
								color: var(--color-text-darker);
								letter-spacing: 2px;
								margin-bottom: 0.5rem;
							}
						}
					}

					.box3 {
						section {
							overflow: hidden;
							margin: 0.5rem;
							height: 100%;

							.box-sub-title {
								margin: 0.5rem 0 2rem 0.5rem;
							}
						}
					}

					.box4 {
						flex-grow: 0.7;
					}

					.box5 {
						section {
							overflow: hidden;
							margin: 0rem;
						}
					}

					.box6 {
						flex-grow: 0.8;
					}
				}
			}
		}

		@media (max-width: 1200px) {
			.container {
				flex-direction: column;
				margin: 4rem 2% 2% 2%;

				.column {
					flex-flow: row nowrap;
					gap: 1rem;
					width: 100%;

					.col-group {
						flex-direction: column;
						width: 100%;
						.box1 {
							height: 100%;
							section {
								margin: 1.5rem;
							}
						}
					}
				}
				.column:first-child.col-group:nth-child(2) {
					width: 35%;
				}
			}
		}

		@media (max-width: 1100px) {
			.container {
				.column {
					flex-flow: row wrap;
					.box4 {
						flex-grow: 1;
					}
				}
				.column:nth-child(2) {
					.col-group:nth-child(2) {
						flex-flow: row nowrap;
						div {
							width: 50%;
						}
					}
				}
			}
		}

		@media (max-width: 850px) {
			.container {
				margin: 3rem 1% 1% 1%;

				.column {
					.col-group {
						div {
							section {
								margin: 0.5rem !important;
							}
						}
						.box4 {
							flex-grow: 1;
						}
						.box2 {
							ul {
								:nth-child(3n + 1) {
									font-size: 1rem;
								}

								:nth-child(3n + 2) {
									font-size: 0.75rem;
								}

								:nth-child(3n + 3) {
									font-size: 0.5rem;
								}
							}
						}
					}
				}
			}
		}

		@media(max-width: 780px) {
			.container {
				margin: 4rem 1% 1% 1%;
				.column:nth-child(2) {
					.col-group:nth-child(2) {
						div {
							min-height: auto;
						}
					}
				}
			}
		}
	}
</style>
