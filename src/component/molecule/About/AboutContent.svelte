<script>
	import CrossHomeButton from '../../atoms/CrossHomeButton.svelte';
	import Divider from '../../atoms/Divider.svelte';
	import HomeStackUse from '../Home/HomeStackUse.svelte';
</script>

<div class="about-content">
	<CrossHomeButton />
	<div class="container">
		<div class="column">
			<div class="box1">
				<section>
					<h1 class="box-title">What I'm about?</h1>
					<Divider />
					<h5 class="box-sub-title">MY STORY</h5>
					<p class="box-description-small">
						My passion for technology began at the age of 12 when I discovered C++. Since then, I
						have continually pursued knowledge and exploration in technology and programming
						languages. With a diverse skill set, I consistently deliver comprehensive solutions
						across both front-end and back-end development. My journey is fueled by a commitment to
						innovation and excellence. I approach every task with meticulous attention to detail and
						a strong problem-solving mindset.
					</p>
					<h5 class="box-sub-title">WHAT I DO NOW</h5>
					<p class="box-description-small">
						Today I'm a Senior Software Engineer at Chimera Technologies, providng them the best
						solution.
					</p>
				</section>
			</div>
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
		<div class="column">
			<div class="box3">
				<section>
					<h5 class="box-sub-title">WHAT I DO BEST</h5>
					<p class="box-description-small">
						My passion for technology began at the age of 12 when I discovered C++. Since then, I
						have continually pursued knowledge and exploration in technology and programming
						languages. With a diverse skill set, I consistently deliver comprehensive solutions
						across both front-end and back-end development. My journey is fueled by a commitment to
						innovation and excellence. I approach every task with meticulous attention to detail and
						a strong problem-solving mindset.
					</p>
				</section>
			</div>
			<div class="box4">
				<HomeStackUse />
			</div>
			<div class="box5"></div>
			<div class="box6"></div>
		</div>
	</div>
</div>

<style lang="scss">
	.about-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);

		.container {
			margin: 10rem;
			display: flex;
			flex-flow: row wrap;
			gap: 1rem;
			justify-content: center;

			.column {
				display: flex;
				flex-flow: column wrap;
				gap: 1rem;
				width: min((50% - 1rem), 30rem);

				div {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: 10rem;
					padding: 0.75rem;
					section {
						margin: 1.5rem;
					}
				}

				.box1 {
					height: 40rem;
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
					flex-grow: 1.1;
				}

				.box4 {
					flex-grow: 0.7;
				}

				.box5 {
					flex-grow: 1;
				}

				.box6 {
					flex-grow: 0.8;
				}
			}
		}
	}
</style>
