<script>
	import logo from '$lib/images/shrey-logo.png';
	import CrossHomeButton from '../component/atoms/CrossHomeButton.svelte';
	export let goBackTo;
</script>

<header class="header">
	<a class="logo" href="/">
		<img src={logo} alt="logo" />
	</a>
	<div class="back">
		<CrossHomeButton {goBackTo} />
	</div>
	<nav class="links">
		<ul>
			<li><a href="/">home</a></li>
			<li><a href="/about">about</a></li>
			<li><a href="/blog">blog</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.header {
		display: flex;
		border-radius: var(--inner-box-border-radius);
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		width: calc(100% - 4rem);
		left: 2rem;
		top: 2rem;
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5.5px);
		-webkit-backdrop-filter: blur(5.4px);
		z-index: 10;

		.logo {
			margin-left: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				height: 3rem;
			}
		}
		.back {
			margin-top: -3rem;
		}
		.links {
			display: flex;
			width: 25%;
			margin-right: 3rem;
			ul {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding: 0;
				li {
					list-style: none;
					a {
						text-decoration: none;
						color: var(--color-red-neon);

						&:hover {
							font-weight: 500;
						}
					}
				}
			}
		}
	}
</style>
