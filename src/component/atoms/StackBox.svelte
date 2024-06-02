<script>
    export let image_url;
</script>

<div class="stack-box" style="background-image: url(/{image_url}.png);"></div>

<style>
	.stack-box {
		height: 5rem;
		width: 5rem;
		background-color: var(--color-stack-box);
		border-radius: 8px;
		background-size: 3rem;
		background-repeat: no-repeat;
		background-position: center;
        /* background-image: url(/src/lib/images/AWS.png); */
	}
</style>
