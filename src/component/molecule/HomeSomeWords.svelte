<script>
    let activeTab = 1;

    // setInterval(() => {
    //     activeTab = activeTab === 3 ? 1 : activeTab + 1;
    // }, 3000)
</script>

<div class="box31">
	<section>
		<h2 class="box-title">Some Words</h2>
        <div class="carousel">
            <div class="carousel-inner">
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div style="background: red" class={activeTab === 1 && "active"}/>
                <div style="background: blue" class={activeTab === 2 && "active"}/>
                <div style="background: green" class={activeTab === 3 && "active"}/>
            </div>
        </div>
	</section>
</div>

<style lang="scss">
	.box31 {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		height: calc(100% - var(--diff-factor));
		width: calc(60% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--inner-box-padding);
		background-color: var(--color-box-background);

		section {
			margin: 1rem;
			display: flex;
			flex-direction: column;
            height: 80%;
            overflow: hidden;

            .carousel {
                height: 100%;
                width: 100%;
                .carousel-inner {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    
                    transition: all 3s;

                    div {
                        height: 100%;
                        min-width: 100%;
                        display: none;
                        transform: translateX(-100%);

                        &.active {
                            display: block;
                        }
                    }
                }
            }
		}
	}
</style>
