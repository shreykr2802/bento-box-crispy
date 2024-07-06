<script>
	import { onMount } from 'svelte';
    import Device from 'svelte-device-info';
	let clientX;
	let clientY;
	let isMouseDown = false;
    
    let hideCursor = false;

    onMount(() => {
        hideCursor = Device.isMobile || Device.isTablet || Device.isPhone;
    })
</script>

<svelte:window
	on:mousemove={(e) => {
		clientX = e.clientX;
		clientY = e.clientY;
	}}
	on:mousedown={() => (isMouseDown = true)}
	on:mouseup={() => (isMouseDown = false)}
/>

<div
	class="custom-cursor" class:hide={hideCursor}
	style="left: {clientX}px; top: {clientY}px; transform: translate(-50%, -50%) scale({isMouseDown ? 0.8 : 1});"
/>

<style lang="scss">
	.custom-cursor {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: var(--color-cursor);
		position: fixed;
		pointer-events: none;
		z-index: 9999;
        opacity: 0.8;
		transition: transform 0.1s ease;

        &.hide {
            display: none;
        }
	}

	:global(a:hover) ~ .custom-cursor,
	:global(button:hover) ~ .custom-cursor,
    :global(select:hover) ~ .custom-cursor,
	:global([onclick]:hover) ~ .custom-cursor {
		transform: translate(-50%, -50%) scale(1.5) !important;
	}
</style>
