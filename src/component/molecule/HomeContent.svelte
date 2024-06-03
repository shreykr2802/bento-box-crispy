<script>
	import DarkLightMode from '../atoms/DarkLightMode.svelte';
	import profileImg from '../../lib/images/shrey.png';
	import StackBox from '../atoms/StackBox.svelte';
</script>

<div class="home-content">
	<div class="left">
		<div class="row">
			<div class="box11">
				<section>
					<h1 style="color: var(--color-text-dark)">Hi, There I am Shrey</h1>
					<p style="color: var(--color-text-light)">Senior Software Engineer</p>
					<p style="color: var(--color-text-light)">MERN Stack | Javascript | ReactJs</p>
				</section>
			</div>
			<div class="box12"></div>
			<div class="box13"></div>
		</div>
		<div class="row">
			<div class="box21">
				<div class="img-wrapper" />
			</div>
			<div class="box22">
				<section>
					<h2 class="box-title">About</h2>
					<p class="box-description">Passionate about design and enjoy problem solving.</p>
				</section>
			</div>
			<div class="box23"></div>
		</div>
		<div class="row">
			<div class="box31"></div>
			<div class="box32">
				<section>
					<h2 class="box-title">Stack I use</h2>
					<div class="stack-images">
					<div class="stacks-used">
						<StackBox stackName="AWS" />
						<StackBox stackName="CSS3" />
						<StackBox stackName="JavaScript" />
						<StackBox stackName="Express" />
						<StackBox stackName="Git" />
						<StackBox stackName="HTML5" />
						<StackBox stackName="React" />
						<StackBox stackName="Redux" />
						<StackBox stackName="CodePen" />
						<StackBox stackName="Docker" />
						<StackBox stackName="ESLint" />
						<StackBox stackName="Figma" />
						<StackBox stackName="Jest" />
						<StackBox stackName="Knex.js" />
						<StackBox stackName="Kubernetes" />
						<StackBox stackName="Next.js" />
						<StackBox stackName="Svelte" />
						<StackBox stackName="Sass" />
						<StackBox stackName="PostgresSQL" />
						<StackBox stackName="Terraform" />
						<StackBox stackName="Vite.js" />
						<StackBox stackName="TypeScript" />
						<StackBox stackName="VSCode" />
						<StackBox stackName="Helm" />
					</div>
					<div class="stacks-used" aria-hidden="true">
						<StackBox stackName="AWS" />
						<StackBox stackName="CSS3" />
						<StackBox stackName="JavaScript" />
						<StackBox stackName="Express" />
						<StackBox stackName="Git" />
						<StackBox stackName="HTML5" />
						<StackBox stackName="React" />
						<StackBox stackName="Redux" />
						<StackBox stackName="CodePen" />
						<StackBox stackName="Docker" />
						<StackBox stackName="ESLint" />
						<StackBox stackName="Figma" />
						<StackBox stackName="Jest" />
						<StackBox stackName="Knex.js" />
						<StackBox stackName="Kubernetes" />
						<StackBox stackName="Next.js" />
						<StackBox stackName="Svelte" />
						<StackBox stackName="Sass" />
						<StackBox stackName="PostgresSQL" />
						<StackBox stackName="Terraform" />
						<StackBox stackName="Vite.js" />
						<StackBox stackName="TypeScript" />
						<StackBox stackName="VSCode" />
						<StackBox stackName="Helm" />
					</div>
				</div>
				</section>
			</div>
		</div>
	</div>
	<div class="right">
		<div class="box41"></div>
		<div class="box42"></div>
		<div class="box43"><DarkLightMode /></div>
		<div class="box44"></div>
	</div>
</div>

<style lang="scss">
	.home-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		display: flex;

		.left {
			display: flex;
			flex-flow: column;
			height: 100%;
			width: 75%;

			.row {
				display: flex;
				place-items: center;
				justify-content: space-between;
				height: calc(100% - var(--diff-factor));

				.box11 {
					border: var(--box-border);
					display: flex;
					flex-direction: column;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(46% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);

					section {
						margin: 2rem;
						padding: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						height: 100%;
					}
				}

				.box12 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(27% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
				}

				.box13 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(27% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
				}

				.box21 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(30% - var(--diff-factor));
					margin: var(--inner-box-margin);
					overflow: hidden;
					background-color: var(--color-box-background);

					.img-wrapper {
						height: 100%;
						width: 100%;
						background-image: url('../../lib/images/shrey.png');
						background-position: top;
						background-repeat: no-repeat;
						background-size: cover;
					}
				}

				.box22 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(40% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);

					section {
						margin: 1rem;
						display: flex;
						flex-direction: column;
						width: 100%;
					}
				}

				.box23 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(30% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
				}

				.box31 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(60% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
				}

				.box32 {
					border: var(--box-border);
					display: flex;
					flex-direction: column;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					width: calc(40% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);

					section {
						margin: 1rem;
						display: flex;
						flex-direction: column;
						overflow: hidden;
						max-width: 90%;
						position: relative;
						user-select: none;
						height: 100%;

						&:hover {
							.stacks-used {
								animation-play-state: running;
							}
						}

						.stack-images {
							display: flex;
							flex-direction: row;
							position: absolute;
							align-items: center;
							height: 100%;
							gap: 0.5rem;
						}
						.stacks-used {
							flex-shrink: 0;
							display: flex;

							animation:
								sidescroll linear infinite 20s,
								sidescroll linear infinite 40s reverse paused;
							animation-composition: add;
							will-change: transform;
							gap: 0.5rem;

							@keyframes sidescroll {
								from {
									transform: translateX(-10%);
								}
								to {
									transform: translateX(calc(-100% + 20%));
								}
							}
						}
					}
				}
			}
		}
		.right {
			display: flex;
			flex-flow: column;
			height: 100%;
			width: 25%;

			.box41 {
				border: var(--box-border);
				display: flex;
				border-radius: var(--inner-box-border-radius);
				height: calc(25% - var(--diff-factor));
				width: calc(100% - var(--diff-factor));
				margin: var(--inner-box-margin);
				padding: var(--inner-box-padding);
				background-color: var(--color-box-background);
			}
			.box42 {
				border: var(--box-border);
				display: flex;
				border-radius: var(--inner-box-border-radius);
				height: calc(30% - var(--diff-factor));
				width: calc(100% - var(--diff-factor));
				margin: var(--inner-box-margin);
				padding: var(--inner-box-padding);
				background-color: var(--color-box-background);
			}
			.box43 {
				border: var(--box-border);
				display: flex;
				border-radius: var(--inner-box-border-radius);
				height: calc(20% - var(--diff-factor));
				width: calc(100% - var(--diff-factor));
				margin: var(--inner-box-margin);
				padding: var(--inner-box-padding);
				background-color: var(--color-box-background);
			}
			.box44 {
				border: var(--box-border);
				display: flex;
				border-radius: var(--inner-box-border-radius);
				height: calc(25% - var(--diff-factor));
				width: calc(100% - var(--diff-factor));
				margin: var(--inner-box-margin);
				padding: var(--inner-box-padding);
				background-color: var(--color-box-background);
			}
		}
	}

	.box-title {
		font-weight: 300;
		color: var(--color-text-light);
		letter-spacing: 5px;
		margin: 0;
		padding: 0;
	}

	.box-description {
		font-size: 1.25rem;
		color: var(--color-text-dark);
		letter-spacing: 2px;
		margin-top: 2rem;
		padding: 0;
	}
</style>
