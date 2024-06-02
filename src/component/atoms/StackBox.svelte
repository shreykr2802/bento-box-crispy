<script>
    export let image_url = 'AWS';
</script>

<div class="stack-box" style="--image-url: url(../../lib/images/{image_url}.png)"></div>

<style>
	.stack-box {
		height: 5rem;
		width: 5rem;
		background-color: var(--color-stack-box);
		border-radius: 8px;
        background-image: var(--image-url);
		background-size: 3rem;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
