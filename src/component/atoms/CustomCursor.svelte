<script>
	import { onMount, onDestroy } from 'svelte';

	// Two-part magnetic cursor: an instant dot + an eased ring that grows over
	// interactive elements. mix-blend-mode keeps it visible on dark AND light.
	// It only takes over on precise (non-touch) pointers without reduced-motion —
	// otherwise the native cursor is left alone (see styles.scss cursor gating).
	let enabled = false;
	let dot;
	let ring;

	let targetX = 0;
	let targetY = 0;
	let ringX = 0;
	let ringY = 0;
	let scale = 1;
	let hovering = false;
	let down = false;
	let raf;

	const interactiveSelector =
		'a, button, select, input, textarea, [data-cursor], [role="button"], .chip';

	function onMove(e) {
		targetX = e.clientX;
		targetY = e.clientY;
		if (dot) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
	}
	function onOver(e) {
		hovering = !!(e.target instanceof Element && e.target.closest(interactiveSelector));
	}
	function onDown() {
		down = true;
	}
	function onUp() {
		down = false;
	}

	function loop() {
		ringX += (targetX - ringX) * 0.18;
		ringY += (targetY - ringY) * 0.18;
		const targetScale = hovering ? 1.9 : down ? 0.7 : 1;
		scale += (targetScale - scale) * 0.2;
		if (ring) {
			ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${scale})`;
		}
		raf = requestAnimationFrame(loop);
	}

	onMount(() => {
		const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
		enabled = fine.matches && !reduce.matches;
		if (!enabled) return;

		ringX = targetX = window.innerWidth / 2;
		ringY = targetY = window.innerHeight / 2;
		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseover', onOver);
		window.addEventListener('mousedown', onDown);
		window.addEventListener('mouseup', onUp);
		raf = requestAnimationFrame(loop);
	});

	onDestroy(() => {
		if (typeof window === 'undefined') return;
		cancelAnimationFrame(raf);
		window.removeEventListener('mousemove', onMove);
		window.removeEventListener('mouseover', onOver);
		window.removeEventListener('mousedown', onDown);
		window.removeEventListener('mouseup', onUp);
	});
</script>

{#if enabled}
	<div class="cursor-dot" bind:this={dot}></div>
	<div class="cursor-ring" bind:this={ring}></div>
{/if}

<style>
	.cursor-dot,
	.cursor-ring {
		position: fixed;
		left: 0;
		top: 0;
		pointer-events: none;
		z-index: 9999;
		border-radius: 50%;
		mix-blend-mode: difference;
		will-change: transform;
	}
	.cursor-dot {
		width: 7px;
		height: 7px;
		background: #ffffff;
	}
	.cursor-ring {
		width: 34px;
		height: 34px;
		border: 1.5px solid #ffffff;
	}
</style>
