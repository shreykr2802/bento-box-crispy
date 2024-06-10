<script>
	import Background from "../../atoms/Background.svelte";
	import AboutContent from "./AboutContent.svelte";
</script>

<div class="main-container">
	<Background />
    <AboutContent />
</div>

<style>
	.main-container {
		display: grid;
		height: 100%;
		width: 100%;
		place-self: center;
	}
</style>
