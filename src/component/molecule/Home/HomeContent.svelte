<script>
	import ArrowButton from '../../atoms/ArrowButton.svelte';
	import DarkLightMode from '../../atoms/DarkLightMode.svelte';
	import HomeSocials from './HomeSocials.svelte';
	import HomeSomeWords from './HomeSomeWords.svelte';
	import HomeStackUse from './HomeStackUse.svelte';
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
					<ArrowButton navigateTo="about" />
				</section>
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
					flex-grow: 1;
					width: calc(30% - var(--diff-factor));
					margin: var(--inner-box-margin);
					overflow: hidden;
					background-color: var(--color-box-background);

					.img-wrapper {
						height: 100%;
						width: 100%;
						background-image: url('../../../lib/images/shrey.png');
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
					flex-grow: 2;
					width: calc(40% - var(--diff-factor));
					margin: var(--inner-box-margin);
					padding: var(--inner-box-padding);
					background-color: var(--color-box-background);

					section {
						margin: 1rem;
						display: flex;
						flex-direction: column;
						width: 100%;
						position: relative;
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
</style>
