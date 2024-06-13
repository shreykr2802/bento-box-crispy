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
		min-height: 100vh;
		width: 100%;
	}
</style>
