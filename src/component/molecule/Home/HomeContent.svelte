<script>
	import ArrowButton from '../../atoms/ArrowButton.svelte';
	import DarkLightMode from '../../atoms/DarkLightMode.svelte';
	import StackBox from '../../atoms/StackBox.svelte';
	import HomeAbout from './HomeAbout.svelte';
	import HomeBlog from './HomeBlog.svelte';
	import HomeNameDetails from './HomeNameDetails.svelte';
	import HomeSocials from './HomeSocials.svelte';
	import HomeSomeWords from './HomeSomeWords.svelte';
	import HomeStackUse from './HomeStackUse.svelte';
</script>

<div class="home-content">
	<div class="left">
		<div class="row">
			<HomeNameDetails />
			<div class="group">
				<a class="box12" href="/case-study/ssr-ssg-isr-csr-ecommerce">
					<div class="case-study-1-img"></div>
					<p class="case-title">Ecommerce - SSR, SSG, ISR, CSR</p>
					<ArrowButton navigateTo="/case-study/ssr-ssg-isr-csr-ecommerce" />
				</a>
				<div class="box13"></div>
			</div>
		</div>
		<div class="row">
			<div class="group">
				<div class="box21">
					<div class="img-wrapper" />
				</div>
				<HomeAbout />
			</div>
			<div class="box23"></div>
		</div>
		<div class="row">
			<HomeSomeWords />
			<div class="box32">
				<HomeStackUse />
			</div>
		</div>
	</div>
	<div class="right">
		<HomeSocials />
		<div class="group-right">
			<HomeBlog />
			<div class="box43"><DarkLightMode /></div>
			<div class="box44">
				<StackBox stackName="Svelte" />
				<div>
					<span>made with ♥️ in&nbsp;</span> <span class="svelte">svelte</span>
				</div>
				<div>created with the idea of <span class="svelte">bento-box</span></div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.home-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		display: flex;
		min-width: 0;

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

				.group {
					display: flex;
					height: 100%;
					width: 80%;

					.box12 {
						border: var(--box-border);
						display: flex;
						border-radius: var(--inner-box-border-radius);
						width: calc(50% - var(--diff-factor));
						height: calc(100% - var(--diff-factor));
						margin: calc(var(--inner-box-margin) + var(--inner-box-padding));
						transition: all 0.3s ease-in-out;
						cursor: pointer;
						position: relative;
						text-decoration: none;
						overflow: hidden;

						.case-study-1-img {
							height: 100%;
							width: 100%;
							background: url('$lib/images/casestudy1.png');
							background-size: cover;
							background-repeat: no-repeat;
							background-position: center;
						}

						.case-title {
							position: absolute;
							bottom: 0;
							left: 0;
							font-size: 1.5rem;
							font-weight: 700;
							color: var(--color-red-neon);
							display: block;
							background-color: var(--color-box-background-hover);
						}

						&:hover {
							.case-study-1-img {
								opacity: 0.8;
							}
							.case-title {
								display: block;
							}
							:global(.arrow-button) {
								transform: scale(1.2);
							}
						}
					}

					.box13 {
						border: var(--box-border);
						display: flex;
						border-radius: var(--inner-box-border-radius);
						height: calc(100% - var(--diff-factor));
						width: calc(50% - var(--diff-factor));
						margin: var(--inner-box-margin);
						padding: var(--inner-box-padding);
						background-color: var(--color-box-background);
					}
				}

				.box21 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					flex-grow: 1;
					width: calc(30% - var(--diff-factor));
					margin: var(--inner-box-margin);
					overflow: hidden;
					background-color: var(--color-box-background);

					.img-wrapper {
						height: 100%;
						width: 100%;
						background-image: url('$lib/images/shrey.png');
						background-position: top;
						background-repeat: no-repeat;
						background-size: cover;
					}
				}

				.box23 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: calc(100% - var(--diff-factor));
					flex-grow: 1;
					width: calc(30% - var(--diff-factor));
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
				}
			}
		}
		.right {
			display: flex;
			flex-flow: column;
			height: 100%;
			width: 25%;
			.group-right {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				justify-content: space-between;

				.box43 {
					border: var(--box-border);
					display: flex;
					border-radius: var(--inner-box-border-radius);
					height: 100%;
					width: calc(100% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
				}
				.box44 {
					border: var(--box-border);
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					border-radius: var(--inner-box-border-radius);
					height: 100%;
					width: calc(100% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);
					color: var(--color-text-dark);

					div {
						margin: 1rem;
						text-align: center;
					}
					.svelte {
						color: var(--color-red-neon);
					}
				}
			}
		}
	}

	@media (max-width: 1024px) {
		.home-content {
			flex-direction: column;
			margin: 0.75rem;
			padding: 0.25rem;
			.left {
				width: 100%;
				height: 100%;
				justify-content: space-between;
				.row {
					height: 100%;
				}
			}
			.right {
				flex-direction: column;
				width: 100%;
				height: auto;
				.group-right {
					flex-direction: row;
					height: 100%;
					order: 1;
					.box42,
					.box43,
					.box44 {
						height: calc(100% - var(--diff-factor));
					}
				}
			}
		}
	}

	@media (max-width: 750px) {
		.home-content {
			flex-direction: column;
			margin: 0.75rem;
			padding: 0.25rem;
			.left {
				width: 100%;
				.row {
					flex-flow: column nowrap;
					height: 100%;
					.box11 {
						width: calc(100% - var(--diff-factor));
						section {
							margin: 1rem;
							padding: 0.5rem;
						}
					}
					.group {
						width: 100%;
						min-height: 15rem;
						align-items: center;
					}
					.box23,
					.box32 {
						width: calc(100% - var(--diff-factor));
						min-height: 12rem;
					}
				}
			}
		}
	}

	@media (max-width: 640px) {
		.home-content {
			.right {
				.group-right {
					flex-direction: column;

					.box42,
					.box44 {
						min-height: 5rem;
					}
				}
			}
		}
	}
</style>
