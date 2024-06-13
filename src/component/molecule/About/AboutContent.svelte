<script>
	import CrossHomeButton from '../../atoms/CrossHomeButton.svelte';
</script>

<div class="about-content">
	<CrossHomeButton />
	<div class="container">
		<div class="column">
			<div class="box1"></div>
			<div class="box2"></div>
		</div>
		<div class="column">
			<div class="box3"></div>
			<div class="box4"></div>
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

			.column {
				display: flex;
				flex-flow: column wrap;
				gap: 1rem;
				width: calc(50% - 1rem);
				div {
					border: var(--box-border);
					border-radius: var(--inner-box-border-radius);
					background-color: var(--color-box-background);
					min-height: auto;
				}

				.box1 {
					height: 35rem;
				}

				.box2 {
					flex-grow: 1;
					min-height: 20rem;
				}

				.box3 {
					flex-grow: 1.1;
				}

				.box4 {
					flex-grow: 0.9;
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
