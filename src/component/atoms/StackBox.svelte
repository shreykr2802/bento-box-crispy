<script>
    export let stackName;
</script>

<div class="stack-box" style="background-image: url(/images/{stackName}.png);"  {...$$restProps}></div>

<style lang="scss">
	.stack-box {
		height: 4.5rem;
		width: 4.5rem;
		background-color: var(--color-stack-box);
		border-radius: 12px;
		background-size: 2.5rem;
		background-repeat: no-repeat;
		background-position: center;

        &:hover {
            background-color: var(--color-stack-box-hover);
        }
	}
</style>
