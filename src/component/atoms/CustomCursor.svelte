<script>
	let clientX;
	let clientY;
	let isMouseDown = false;
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
	id="custom-cursor"
	style="left: {clientX}px; top: {clientY}px; transform: translate(-50%, -50%) scale({isMouseDown ? 0.8 : 1});"
/>

<style>
	#custom-cursor {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: var(--color-text-dark);
		position: fixed;
		pointer-events: none;
		z-index: 9999;
		mix-blend-mode: screen;
        opacity: 0.8;
		transition: transform 0.1s ease;
	}

	:global(a:hover) ~ #custom-cursor,
	:global(button:hover) ~ #custom-cursor,
    :global(select:hover) ~ #custom-cursor,
	:global([onclick]:hover) ~ #custom-cursor {
		transform: translate(-50%, -50%) scale(1.5) !important;
	}
</style>
