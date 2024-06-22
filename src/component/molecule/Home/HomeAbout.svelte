<script>
	import HomeDetailsIcon from '../../Icons/HomeDetailsIcon.svelte';
	import ArrowButton from '../../atoms/ArrowButton.svelte';
</script>

<a class="box22" href="/about">
	<section>
		<h2 class="box-title" style="margin:1rem 0 0 1rem;">About</h2>
		<p class="box-description" style="margin:1rem 0 0 1rem;">
			Passionate about design and enjoy problem solving.
		</p>
		<div class="about-more">
			<div class="specific">
				<span>10 <span style="color: var(--color-red-neon)">+</span></span>
				<div class="specific-name"><HomeDetailsIcon iconName="project" />Projects</div>
			</div>
			<div class="specific">
				<span>7 <span style="color: var(--color-red-neon)">+</span></span>
				<div class="specific-name"><HomeDetailsIcon iconName="experience" />Years</div>
			</div>
			<div class="specific">
				<span>20 <span style="color: var(--color-red-neon)">+</span></span>
				<div class="specific-name"><HomeDetailsIcon iconName="client" />Clients</div>
			</div>
		</div>
		<ArrowButton navigateTo="about" />
	</section>
</a>

<style lang="scss">
	.box22 {
		border: var(--box-border);
		display: flex;
		border-radius: var(--inner-box-border-radius);
		height: calc(100% - var(--diff-factor));
		flex-grow: 2;
		width: calc(40% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);
		text-decoration: none;

		section {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;
            justify-content: space-between;

			.about-more {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				justify-content: space-around;
				font-size: 0.875rem;
				border: var(--box-border);
				border-radius: 12px;
				background-color: var(--color-box-background-hover);
				padding: 0.25rem;
				margin: 0.5rem 0.5rem 1rem 0.5rem;
				gap: 0.5rem;

				.specific {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					border: var(--box-border);
					align-items: center;
					font-size: 0.875rem;
					padding: 0.5rem;
					color: var(--color-text-dark);
					border-radius: 12px;
					background-color: var(--color-box-background);

					span {
						font-size: 2rem;
					}

					.specific-name {
						background-color: var(--color-box-background-hover);
						border-radius: 12px;
						width: 100%;
						text-align: center;
						color: var(--color-text-dark);
						display: flex;
						align-items: center;
						padding: 0 0.25rem;
					}
				}
				@media (max-width: 1024px) {
					gap: 0;
					margin: 0;
					.specific {
						font-size: 0.75rem;
						padding: 0.375rem;
						span {
							font-size: 1.5rem;
						}
					}
				}

				@media (max-width: 810px) {
					padding: 0;
                    flex-flow: row nowrap;
				}

                @media (max-width: 550px) {
					.specific {
						font-size: 0.5rem;
						padding: 0.25rem;
						span {
							font-size: 1rem;
						}
					}
				}

                @media (max-width: 480px) {
					.specific {
						font-size: 0.5rem;
						span {
							font-size: 0.75rem;
						}
					}
				}
			}
		}

		&:hover {
			background-color: var(--color-box-background-hover);
			section {
				:global(.arrow-button) {
					transform: scale(1.2);
				}
			}
		}
		@media (max-width: 750px) {
			section {
				justify-content: space-between;
                padding: 0.5rem;
			}
		}
	}
</style>
