<script>
	export let navigateTo;
</script>

<a href="/{navigateTo}" class="arrow-button">
	<svg
		clip-rule="evenodd"
		fill-rule="evenodd"
		stroke-linejoin="round"
		stroke-miterlimit="2"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
			fill-rule="nonzero"
		/></svg
	>
</a>

<style lang="scss">
	.arrow-button {
		position: absolute;
		top: 0;
		right: 0;
		height: 3rem;
		width: 3rem;
		background: transparent;
		fill: var(--color-red-neon);
		outline: none;
		border: none;
		transform: rotate(-30deg);
		margin: 0;
		padding: 0;
		transition: all 0.2s;

		@media (max-width: 1024px) {
			height: 2.5rem;
			width: 2.5rem;
		}

		@media (max-width: 750px) {
			height: 2rem;
			width: 2rem;
		}
	}
</style>
