// Delegated 3D tilt-on-hover for the bento boxes.
// Attach once to a container (e.g. <main use:tiltGroup>); it tilts whichever
// matching box the cursor is over, pivoting corner-to-corner toward the pointer.
// No-ops on touch / coarse pointers and for prefers-reduced-motion.

const DEFAULT_SELECTOR =
	'.box1, .box2, .box3, .box4, .box5, .box6, .box7,' +
	'.box11, .box12, .box21, .box22, .box23, .box31, .box32, .box42, .box43, .box44, .ai-twin';

export function tiltGroup(container, options = {}) {
	const selector = options.selector ?? DEFAULT_SELECTOR;
	const max = options.max ?? 6; // degrees — keep it slight

	let current = null;
	let rect = null;

	function reset(el) {
		if (!el) return;
		el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
		el.style.transform = '';
		el.style.willChange = '';
	}

	function onMove(e) {
		const el = e.target instanceof Element ? e.target.closest(selector) : null;

		if (el !== current) {
			reset(current);
			current = el;
			if (current) {
				current.style.transition = 'transform 0.12s ease-out';
				current.style.willChange = 'transform';
				// Capture the rect while the box is still untransformed.
				rect = current.getBoundingClientRect();
			}
		}

		if (!current || !rect) return;

		const px = (e.clientX - rect.left) / rect.width - 0.5;
		const py = (e.clientY - rect.top) / rect.height - 0.5;
		const rotateX = (-py * 2 * max).toFixed(2);
		const rotateY = (px * 2 * max).toFixed(2);
		current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
	}

	function onLeave() {
		reset(current);
		current = null;
		rect = null;
	}

	const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
	const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

	if (fine.matches && !reduce.matches) {
		container.addEventListener('mousemove', onMove);
		container.addEventListener('mouseleave', onLeave);
	}

	return {
		destroy() {
			container.removeEventListener('mousemove', onMove);
			container.removeEventListener('mouseleave', onLeave);
		}
	};
}
