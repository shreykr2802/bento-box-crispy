<script>
	import DownloadIcon from '../../Icons/DownloadIcon.svelte';
	import HomeDetailsIcon from '../../Icons/HomeDetailsIcon.svelte';
	import { PUBLIC_ASSETS_ENDPOINT_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	let typedTextSpan;
	let cursorSpan;
	const textArray = ['JS Developer', 'Web Enthusiast', 'UI Dev', 'FullStack Dev'];
	const typingDelay = 200;
	const erasingDelay = 100;
	const newTextDelay = 2000;
	let textArrayIndex = 0;
	let charIndex = 0;
	onMount(() => {
		if (textArray.length) setTimeout(type, newTextDelay + 250);
	});
	function type() {
		if (charIndex < textArray[textArrayIndex].length) {
			if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
			typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
			charIndex++;
			setTimeout(type, typingDelay);
		} else {
			cursorSpan.classList.remove('typing');
			setTimeout(erase, newTextDelay);
		}
	}
	function erase() {
		if (charIndex > 0) {
			if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
			typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
			charIndex--;
			setTimeout(erase, erasingDelay);
		} else {
			cursorSpan.classList.remove('typing');
			textArrayIndex++;
			if (textArrayIndex >= textArray.length) textArrayIndex = 0;
			setTimeout(type, typingDelay + 1100);
		}
	}
</script>

<div class="box11">
	<section>
		<div class="name-resume">
			<div class="name-details">
				<h1>Hi, there I am Shrey</h1>
				<div class="available-to-work">
					<span class="outer-green-dot"><span class="green-dot" /></span>
					<p>Available to Work</p>
				</div>
			</div>
			<div class="resume">
				<a
					class="resume-download"
					href="{PUBLIC_ASSETS_ENDPOINT_URL}/Shrey-Kumar-Resume.pdf"
					download="Shrey-Kumar-Resume.pdf"
				>
					<span>Resume</span>
					<DownloadIcon />
				</a>
				<div class="me-details">
					<p>
						I'm a<span class="typed-text" bind:this={typedTextSpan}></span><span
							class="cursor"
							bind:this={cursorSpan}>&nbsp;</span
						>
					</p>
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
					justify-content: space-between;

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

						.outer-green-dot {
							display: block;
							position: relative;
							height: 8px;
							width: 8px;
							border-radius: 50%;
							background-color: var(--color-green-neon);
							z-index: 10;

							.green-dot {
								display: block;
								position: absolute;
								height: 8px;
								width: 8px;
								background-color: rgba(109, 211, 61, 0.4);
								border-radius: 50%;
								animation: pulse 1s ease-in-out infinite;

								@keyframes pulse {
									0% {
										transform: scale(0);
									}
									50% {
										transform: scale(1.4);
									}
									100% {
										transform: scale(0);
									}
								}
							}
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
						cursor: pointer;
						text-decoration: none;
					}

					.me-details {
						font-size: 0.875rem;
						color: var(--color-text-dark);
						display: flex;

						p {
							font-size: 0.875rem;
							text-align: center;
							overflow: hidden;
							margin: 0;
							padding: 0;

							span.typed-text {
								color: var(--color-red-neon);
								font-weight: normal;
								margin-left: 0.25rem;
							}
							span.cursor {
								display: inline-block;
								background-color: #ccc;
								margin-left: 0.1rem;
								width: 3px;
								animation: blink 1s infinite;

								@keyframes blink {
									0% {
										background-color: #ccc;
									}
									49% {
										background-color: #ccc;
									}
									50% {
										background-color: transparent;
									}
									99% {
										background-color: transparent;
									}
									100% {
										background-color: #ccc;
									}
								}
							}
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
