<script>
	import DownloadIcon from '../../Icons/DownloadIcon.svelte';
	import HomeDetailsIcon from '../../Icons/HomeDetailsIcon.svelte';
</script>

<div class="box11">
	<section>
		<div class="name-resume">
			<div class="name-details">
				<h1>Hi, there I am Shrey</h1>
				<div class="available-to-work">
					<span class="green-dot" />
					<p>Available to Work</p>
				</div>
			</div>
			<div class="resume">
				<div class="resume-download">
					<span>Resume</span>
					<DownloadIcon />
				</div>
				<div class="me-details">
					I'm a&nbsp;
					<span class="active">developer</span>
				</div>
			</div>
		</div>
		<div class="about-me">
			<div class="specific"><HomeDetailsIcon iconName="mern" />MERN</div>
			<div class="specific"><HomeDetailsIcon iconName="stack" />FullStack</div>
			<div class="specific"><HomeDetailsIcon iconName="js" />Javascript</div>
			<div class="specific"><HomeDetailsIcon iconName="react" />ReactJs</div>
			<div class="specific"><HomeDetailsIcon iconName="en" />English</div>
			<div class="specific"><HomeDetailsIcon iconName="dev" />Software Developer</div>
			<div class="specific"><HomeDetailsIcon iconName="location" />India</div>
		</div>
		<div class="contact-now">
			<a class="link-button" href="https://wa.me/+918951510227">
				<HomeDetailsIcon iconName="whatsapp" />WhatsApp Me
			</a>
			<a class="link-button" href="mailto:shreykr2802@gmail.com">
				<HomeDetailsIcon iconName="mail" />E-Mail Me
			</a>
		</div>
	</section>
</div>

<style lang="scss">
	.box11 {
		border: var(--box-border);
		display: flex;
		flex-direction: column;
		border-radius: var(--inner-box-border-radius);
		height: calc(100% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);
		width: 80%;

		section {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 100%;

			.name-resume {
				display: flex;
				margin: 0.5rem;
				gap: 1rem;

				.name-details {
					display: flex;
					flex-direction: column;
					align-items: center;
					font-size: 0.875rem;
					width: 50%;
					border: var(--box-border);
					border-radius: 12px;
					background-color: var(--color-box-background-hover);
					padding: 0.25rem;

					h1 {
						color: var(--color-red-neon);
						font-size: 1rem;
					}

					.available-to-work {
						display: flex;
						border: var(--box-border);
						height: 1.5rem;
						align-items: center;
						justify-content: space-around;
						font-size: 0.75rem;
						padding: 0 0.25rem;
						color: var(--color-text-dark);
						border-radius: 12px;
						background-color: var(--color-box-background);
						width: max-content;

						.green-dot {
							height: 8px;
							width: 8px;
							background-color: var(--color-green-neon);
							border-radius: 50%;
							margin: 0 0.5rem;
						}

						p {
							padding: 0;
							margin: 0 0.5rem;
						}
					}
				}
				.resume {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					font-size: 0.875rem;
					width: 50%;
					border: var(--box-border);
					border-radius: 12px;
					background-color: var(--color-box-background-hover);
					padding: 0.25rem;

					.resume-download {
						display: flex;
						border: var(--box-border);
						height: 2rem;
						align-items: center;
						justify-content: space-around;
						font-size: 0.75rem;
						padding: 0 0.25rem;
						color: var(--color-text-dark);
						border-radius: 12px;
						background-color: var(--color-box-background);
						width: 50%;
					}

					.me-details {
						font-size: 0.875rem;
						color: var(--color-text-dark);
						display: flex;

						span {
							color: var(--color-red-neon);
							position: relative;
							display: none;
							margin-left: 0.25rem;

							&::after {
								content: '|';
								position: absolute;
								right: 0;
								width: 100%;
								color: white;
								background: var(--color-box-background);
								animation: typing 4s steps(16) infinite;
							}

							@keyframes typing {
								to {
									width: 0;
								}
							}
						}
						.active {
							display: block;
						}
					}
				}
			}

			.about-me {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: flex-start;
				font-size: 0.875rem;
				border: var(--box-border);
				border-radius: 12px;
				background-color: var(--color-box-background-hover);
				padding: 0.25rem;
				margin: 0.5rem;
				gap: 0.5rem;

				.specific {
					display: flex;
					border: var(--box-border);
					height: 1.25rem;
					align-items: center;
					font-size: 0.875rem;
					padding: 0 0.5rem;
					color: var(--color-text-dark);
					border-radius: 12px;
					background-color: var(--color-box-background);
				}
			}

			.contact-now {
				display: flex;
				flex-flow: row;
				align-items: center;
				justify-content: flex-start;
				font-size: 0.875rem;
				padding: 0.25rem;
				margin: 0.5rem;
				gap: 0.5rem;
				align-self: center;

				.link-button {
					display: flex;
					border: var(--box-border);
					height: 2rem;
					align-items: center;
					font-size: 0.875rem;
					padding: 0 0.5rem;
					color: var(--color-text-dark);
					border-radius: 12px;
					cursor: pointer;
					background-color: var(--color-box-background-hover);
					text-decoration: none;
				}
			}
			@media (max-width: 1024px) {
				.contact-now {
					margin: 0rem;
					padding: 0;
					.link-button {
						height: 1.8rem;
					}
				}
			}

			@media (max-width: 950px) {
				.name-resume {
					margin: 0 0.5rem;
				}
				.about-me {
					margin: 0 0.5rem;
					.specific {
						font-size: 0.75rem;
					}
				}
				.contact-now {
					margin: 0rem;
					.link-button {
						height: 1.5rem;
						font-size: 0.75rem;
					}
				}
			}
			@media (max-width: 850px) {
				.name-resume {
					.name-details {
						h1 {
							margin: 0.25rem;
							font-size: 0.875rem;
						}
					}
				}
				.about-me {
					gap: 0.25rem;
					padding: 0;
				}
			}
			@media (max-width: 750px) {
				.name-resume {
					margin: 0.5rem;
				}
				.about-me {
					margin: 0.5rem;
					padding: 0.25rem;
					.specific {
						font-size: 0.75rem;
					}
				}
				.contact-now {
					margin: 0.5rem;
					.link-button {
						height: 1.5rem;
						font-size: 0.75rem;
					}
				}
			}
		}
		@media (max-width: 750px) {
			width: calc(100% - var(--diff-factor));
		}
	}
</style>
