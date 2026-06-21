<script>
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import { PUBLIC_ASSETS_ENDPOINT_URL } from '$env/static/public';

	let open = false;
	let query = '';
	let selected = 0;

	const commands = [
		{ label: 'Go to Home', keywords: 'home start', group: 'Navigate', run: () => goto('/') },
		{ label: 'About — the full story', keywords: 'about bio story', group: 'Navigate', run: () => goto('/about') },
		{ label: 'Read the blog', keywords: 'blog writing posts articles', group: 'Navigate', run: () => goto('/blog') },
		{
			label: 'Tailor my résumé to a job',
			keywords: 'tailor job role recruiter fit hire match resume jd',
			group: 'AI',
			run: () => goto('/tailor')
		},
		{ label: 'Ask my AI twin', keywords: 'ai chat ask twin question', group: 'AI', run: askTwin },
		{
			label: 'Case study — render a store 4 ways (SSR/SSG/ISR/CSR)',
			keywords: 'case study ecommerce ssr ssg isr csr render',
			group: 'Work',
			run: () => goto('/case-study/ssr-ssg-isr-csr-ecommerce')
		},
		{
			label: 'Case study — legacy JS → TypeScript',
			keywords: 'case study typescript migration legacy',
			group: 'Work',
			run: () => goto('/case-study/migrating-javascript-to-typescript')
		},
		{ label: 'Toggle light / dark theme', keywords: 'theme dark light mode', group: 'Actions', run: toggleTheme },
		{ label: 'Copy email address', keywords: 'email copy contact mail', group: 'Actions', run: copyEmail },
		{
			label: 'Download résumé',
			keywords: 'resume cv download pdf',
			group: 'Actions',
			run: () => window.open(`${PUBLIC_ASSETS_ENDPOINT_URL}/Shrey-Kumar-Resume.pdf`, '_blank')
		},
		{ label: 'GitHub', keywords: 'github code repos open source', group: 'Links', run: () => window.open('https://github.com/shreykr2802', '_blank') },
		{ label: 'LinkedIn', keywords: 'linkedin connect', group: 'Links', run: () => window.open('https://www.linkedin.com/in/shreykr2802/', '_blank') }
	];

	$: filtered = (() => {
		const s = query.trim().toLowerCase();
		if (!s) return commands;
		return commands.filter((c) =>
			`${c.label} ${c.keywords} ${c.group}`.toLowerCase().includes(s)
		);
	})();

	// keep the selection in range as the list filters
	$: if (selected > filtered.length - 1) selected = 0;

	function openPalette() {
		open = true;
		query = '';
		selected = 0;
	}
	function close() {
		open = false;
	}
	function run(cmd) {
		close();
		cmd.run();
	}

	function toggleTheme() {
		const isLight = document.body.classList.toggle('light-mode');
		localStorage.setItem('light-mode', isLight ? 'on' : 'off');
	}
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText('shreykr2802@gmail.com');
		} catch {
			/* clipboard blocked — no-op */
		}
	}
	function askTwin() {
		goto('/').then(() =>
			setTimeout(() => document.querySelector('.ai-twin input')?.focus(), 250)
		);
	}

	function onKeydown(e) {
		const k = e.key.toLowerCase();
		if ((e.metaKey || e.ctrlKey) && k === 'k') {
			e.preventDefault();
			open ? close() : openPalette();
			return;
		}
		if (!open) return;
		if (e.key === 'Escape') {
			e.preventDefault();
			close();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			selected = Math.min(selected + 1, filtered.length - 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selected = Math.max(selected - 1, 0);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (filtered[selected]) run(filtered[selected]);
		}
	}

	function autofocus(node) {
		node.focus();
	}

	onMount(() => window.addEventListener('keydown', onKeydown));
	onDestroy(() => {
		if (typeof window !== 'undefined') window.removeEventListener('keydown', onKeydown);
	});
</script>

<button class="kbar-hint" on:click={openPalette} aria-label="Open command palette (Cmd/Ctrl + K)">
	<kbd>⌘</kbd><kbd>K</kbd>
</button>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="kbar-backdrop" on:click={close} role="presentation">
		<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
		<div class="kbar" on:click|stopPropagation role="dialog" aria-modal="true" aria-label="Command palette">
			<input
				use:autofocus
				bind:value={query}
				placeholder="Type a command or search…"
				aria-label="Command search"
			/>
			<ul class="kbar-list">
				{#each filtered as cmd, i (cmd.label)}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
					<li class:active={i === selected} on:click={() => run(cmd)} on:mouseenter={() => (selected = i)}>
						<span class="kbar-label">{cmd.label}</span>
						<span class="kbar-group">{cmd.group}</span>
					</li>
				{:else}
					<li class="kbar-empty">No matches</li>
				{/each}
			</ul>
			<div class="kbar-foot">
				<span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
				<span><kbd>↵</kbd> select</span>
				<span><kbd>esc</kbd> close</span>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	kbd {
		font-family: var(--font-display);
		font-size: 0.7rem;
		line-height: 1;
		padding: 2px 5px;
		border-radius: 5px;
		border: var(--box-border);
		background: var(--color-surface-2);
		color: var(--color-text-light);
	}

	.kbar-hint {
		position: fixed;
		bottom: 1.25rem;
		right: 1.25rem;
		z-index: 9000;
		display: flex;
		gap: 4px;
		align-items: center;
		padding: 0.45rem 0.55rem;
		border-radius: 10px;
		background: var(--color-box-background);
		border: var(--box-border);
		box-shadow: var(--tile-shadow);
		transition: transform 0.2s ease, border-color 0.2s ease;

		&:hover {
			transform: translateY(-2px);
			border-color: var(--color-red-neon);
		}

		@media (hover: none) {
			display: none;
		}
	}

	.kbar-backdrop {
		position: fixed;
		inset: 0;
		z-index: 9500;
		background: rgba(0, 0, 0, 0.55);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 14vh 1rem 1rem;
		animation: kbarIn 0.15s ease;
	}

	@keyframes kbarIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.kbar {
		width: min(94vw, 560px);
		background: var(--color-box-background);
		border: var(--box-border);
		border-radius: 16px;
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.6);
		overflow: hidden;

		input {
			width: 100%;
			box-sizing: border-box;
			background: transparent;
			border: none;
			outline: none;
			padding: 1rem 1.1rem;
			color: var(--color-text-dark);
			font-family: var(--font-basic);
			font-size: 1rem;
			border-bottom: var(--box-border);

			&::placeholder {
				color: var(--color-text-light);
			}
		}

		.kbar-list {
			list-style: none;
			margin: 0;
			padding: 0.4rem;
			max-height: 48vh;
			overflow-y: auto;
			scrollbar-width: thin;

			li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.75rem;
				padding: 0.6rem 0.7rem;
				border-radius: 10px;
				color: var(--color-text-dark);
				font-size: 0.9rem;

				&.active {
					background: var(--color-box-background-hover);
				}
				.kbar-label {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.kbar-group {
					flex-shrink: 0;
					color: var(--color-text-light);
					font-size: 0.7rem;
					letter-spacing: 1px;
					text-transform: uppercase;
				}
				&.kbar-empty {
					justify-content: center;
					color: var(--color-text-light);
				}
			}
		}

		.kbar-foot {
			display: flex;
			gap: 1rem;
			padding: 0.6rem 0.9rem;
			border-top: var(--box-border);
			color: var(--color-text-light);
			font-size: 0.7rem;

			kbd {
				margin-right: 2px;
			}
		}
	}
</style>
