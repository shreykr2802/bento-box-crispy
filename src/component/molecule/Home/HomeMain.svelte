<script>
	import Background from "../../atoms/Background.svelte";
	import HomeContent from "./HomeContent.svelte";
</script>

<div class="main-container">
	<Background />
	<HomeContent />
</div>

<style>
	.main-container {
		display: grid;
		height: 100%;
		width: 100%;
		place-self: center;
	}
</style>
