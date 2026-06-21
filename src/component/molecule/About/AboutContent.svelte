<script>
	import Carousel from '../../atoms/Carousel.svelte';
	import Divider from '../../atoms/Divider.svelte';
	import HomeStackUse from '../Home/HomeStackUse.svelte';
	import Outside1 from '$lib/images/Outside1.webp';
	import Outside2 from '$lib/images/Outside2.webp';
	import Outside3 from '$lib/images/Outside3.webp';
	import DarkLightMode from '../../atoms/DarkLightMode.svelte';
	import CircleProgress from '../../atoms/CircleProgress.svelte';
	import GitHubActivity from './GitHubActivity.svelte';

	const slidesToDisplay = [
		{
			content: `
        <span class="carousel-title">JavaScript, to the core</span>
        <span class="carousel-description">
			Years deep in JavaScript — and not just the parts that work. I know why it behaves the way it does, the weird edge cases included.
        </span>`
		},
		{
			content: `
        <span class="carousel-title">React, Next & Svelte</span>
        <span class="carousel-description">
			I learn frameworks the way other people learn a city: until I know every shortcut. React, Next.js, Svelte — pick one, I'm fluent.
        </span>`
		},
		{
			content: `
        <span class="carousel-title">I take it personally</span>
        <span class="carousel-description">
			Hand me the problem the team's been avoiding. That's the one I actually want.
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
						<h1 class="box-title">What I'm about.</h1>
						<Divider />
						<h5 class="box-sub-title">MY STORY</h5>
						<p class="box-description-small">
							It started at 12 — the first time C++ did exactly what I told it to. I've chased that
							feeling ever since: take something hard, make it work, then make it look easy.
							Front-end or back-end, I don't pick a side; I ship the whole stack. Every build gets
							the same two things — obsessive attention to detail, and a flat refusal to leave a
							problem half-solved.
						</p>
						<h5 class="box-sub-title">WHAT I'M DOING NOW</h5>
						<p class="box-description-small">
							Right now I'm a Senior Software Engineer at Baxter R&D, building the kind of
							solutions that don't come back as bug tickets.
						</p>
					</section>
				</div>
			</div>
			<div class="col-group">
				<div class="box2">
					<section>
						<h5 class="box-sub-title">WHERE I'VE SHIPPED</h5>
						<ul>
							<li style="color: var(--color-red-neon);">Baxter R&D</li>
							<li>Senior Software Engineer</li>
							<li>Sep-2025 - current</li>
							<li style="color: var(--color-red-neon);">Chimera Technologies</li>
							<li>Senior Software Engineer</li>
							<li>Nov-2021 - Sep-2025</li>
							<li style="color: var(--color-red-neon);">Pepperfry</li>
							<li>Senior Software Engineer</li>
							<li>Aug-2021 - Nov-2021</li>
							<li style="color: var(--color-red-neon);">Tavant</li>
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
						<h5 class="box-sub-title">WHAT I'M BEST AT</h5>
						<Carousel {slidesToDisplay} showButtons={false} indicatorPosition="bottom" />
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
				<div class="box7">
					<section>
						<h5 class="box-sub-title">SKILLS</h5>
						<div class="skills">
							<CircleProgress skillPercentage={90} skillName="Javascript" />
							<CircleProgress skillPercentage={85} skillName="React" />
							<CircleProgress skillPercentage={85} skillName="Redux" />
							<CircleProgress skillPercentage={80} skillName="CSS/SCSS" />
							<CircleProgress skillPercentage={85} skillName="Typescript" />
							<CircleProgress skillPercentage={80} skillName="HTML" />
							<CircleProgress skillPercentage={87} skillName="NodeJS" />
							<CircleProgress skillPercentage={80} skillName="Express" />
							<CircleProgress skillPercentage={78} skillName="Jest" />
							<CircleProgress skillPercentage={75} skillName="NextJS" />
							<CircleProgress skillPercentage={89} skillName="SQL" />
							<CircleProgress skillPercentage={70} skillName="MongoDB" />
							<CircleProgress skillPercentage={70} skillName="AWS/Cloud" />
							<CircleProgress skillPercentage={60} skillName="K8S" />
							<CircleProgress skillPercentage={50} skillName="Svelte" />
						</div>
					</section>
				</div>
			</div>
		</div>
		<div class="column">
			<div class="col-group">
				<GitHubActivity />
				<div class="box6">
					<DarkLightMode />
					<div class="made-text">
						<span>made with ♥️ in&nbsp;</span> <span class="svelte">svelte</span>
					</div>
					<div class="made-text">
						arranged like a <span class="svelte">bento-box</span> — every tile earns its spot
					</div>
				</div>
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
			flex-flow: row wrap;
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
								margin: 0.5rem 0 0.5rem 0.5rem;
							}
						}
					}

					.box4 {
						flex-grow: 1;
					}

					.box7 {
						section {
							overflow: hidden;
							margin: 0.5rem;
							height: 100%;
							.box-sub-title {
								margin: 0.5rem 0 0.5rem 0.5rem;
							}
							.skills {
								display: flex;
								flex-flow: row wrap;
								align-items: center;
								justify-content: space-between;
								gap: 0.25rem;
								border: 0;
							}
						}
					}

					.box5 {
						section {
							overflow: hidden;
							margin: 0rem;
						}
					}

					.box6 {
						flex-grow: 1;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						.made-text {
							width: 100% !important;
							min-height: auto;
							border: 0;
							text-align: center;
							color: var(--color-text-darker);
						}
						.svelte {
							color: var(--color-red-neon);
						}
					}
				}
				&:nth-child(3) {
					width: min((100% - 2rem), 60rem);
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
					&:nth-child(1) {
						.col-group:nth-child(2) {
							width: 50%;
						}
					}
					&:nth-child(2) {
						.col-group:nth-child(1) {
							width: 50%;
						}
						.col-group:nth-child(2) {
							.box5 {
								order: 2;
							}
							.box7 {
								order: 1;
							}
						}
					}
					&:nth-child(3) {
						width: 100%;
					}
				}
			}
		}

		// @media (max-width: 850px) {
		// 	.container {
		// 		.column {
		// 			flex-flow: row wrap;
		// 			.box4 {
		// 				flex-grow: 1;
		// 			}
		// 		}
		// 		.column:nth-child(2) {
		// 			.col-group:nth-child(2) {
		// 				flex-flow: row nowrap;
		// 				div {
		// 					width: 50%;
		// 				}
		// 			}
		// 		}
		// 	}
		// }

		@media (max-width: 850px) {
			.container {
				margin: 5rem 1% 1% 1%;

				.column {
					flex-flow: row wrap;
					.box4 {
						flex-grow: 1;
					}
					.col-group {
						div {
							padding: var(--space-1);
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
					&:nth-child(1) {
						.col-group:nth-child(2) {
							width: 100%;
						}
					}
					&:nth-child(2) {
						.col-group:nth-child(1) {
							width: 100%;
						}
						.col-group:nth-child(2) {
							flex-flow: row nowrap;
							div {
								width: 100%;
							}
							.box5 {
								order: 2;
							}
							.box7 {
								order: 1;
							}
						}
					}
					&:nth-child(3) {
						width: 100%;
					}
				}
			}
		}

		@media (max-width: 780px) {
			.container {
				.column:nth-child(2) {
					.col-group:nth-child(2) {
						flex-direction: column;
						width: 100%;
						div {
							min-height: auto;
							width: auto;
						}
					}
				}
			}
		}
	}
</style>
