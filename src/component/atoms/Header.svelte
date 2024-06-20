<script>
	import logo from '$lib/images/shrey-logo.png';
	import CrossHomeButton from './CrossHomeButton.svelte';
    export let goBackTo;
</script>

<header class="header">
	<a class="logo" href="/">
		<img src={logo} alt="logo" />
    </a>
	<div class="back">
        <CrossHomeButton goBackTo={goBackTo}/>
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
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		background-color: var(--color-box-background);
		height: 3rem;
        align-items: center;
        justify-content: space-between;
        position: sticky;

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
