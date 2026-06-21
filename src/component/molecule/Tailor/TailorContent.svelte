<script>
	let job = '';
	let result = '';
	let loading = false;
	let error = '';

	$: ready = job.trim().length >= 30;

	async function tailor() {
		if (!ready || loading) return;
		loading = true;
		error = '';
		result = '';

		try {
			const res = await fetch('/api/tailor', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ job })
			});

			if (!res.ok || !res.body) {
				error =
					res.status === 429
						? 'Too many requests — give it a minute and try again.'
						: res.status === 400
							? 'Paste a bit more of the job description (at least a paragraph).'
							: 'Something went wrong. Try again, or email shreykr2802@gmail.com.';
				return;
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			let chunk = await reader.read();
			while (!chunk.done) {
				result += decoder.decode(chunk.value, { stream: true });
				chunk = await reader.read();
			}
		} catch {
			error = 'Connection hiccup. Mind trying that again?';
		} finally {
			loading = false;
		}
	}
</script>

<div class="tailor-content">
	<section class="card">
		<h1 class="box-title">Tailor my résumé to your role</h1>
		<p class="lead">
			Paste a job description. My AI twin maps my <em>actual</em> experience to it — honestly, gaps and
			all — and drafts a short pitch. Powered by Claude.
		</p>

		<textarea
			bind:value={job}
			rows="9"
			maxlength="6000"
			placeholder="Paste the job description here…"
			disabled={loading}
			aria-label="Job description"
		></textarea>

		<div class="actions">
			<button class="go" on:click={tailor} disabled={!ready || loading}>
				{loading ? 'Tailoring…' : 'Tailor it →'}
			</button>
			<span class="hint">
				{ready ? 'Honest fit analysis in ~10 seconds.' : 'Paste at least a paragraph to start.'}
			</span>
		</div>

		{#if error}
			<p class="error">{error}</p>
		{/if}

		{#if result}
			<div class="result">
				{result}{#if loading}<span class="caret" />{/if}
			</div>
		{/if}
	</section>
</div>

<style lang="scss">
	.tailor-content {
		margin: var(--outer-box-margin);
		padding: var(--outer-box-padding);
		border-radius: var(--outer-box-border-radius);
		border: var(--box-border);
		min-width: 0;
		min-height: calc(100vh - 2 * var(--outer-box-margin));
		display: flex;
		justify-content: center;

		.card {
			width: min(100%, 46rem);
			margin: 6rem 1rem 2rem;
			display: flex;
			flex-direction: column;
			gap: var(--space-4);
			height: max-content;

			.lead {
				color: var(--color-text-light);
				font-size: 1rem;
				line-height: 1.6;
				margin: 0;

				em {
					color: var(--color-text-dark);
					font-style: italic;
				}
			}

			textarea {
				width: 100%;
				box-sizing: border-box;
				resize: vertical;
				background-color: var(--color-box-background);
				border: var(--box-border);
				border-radius: var(--inner-box-border-radius);
				padding: var(--space-4);
				color: var(--color-text-dark);
				font-family: var(--font-basic);
				font-size: 0.95rem;
				line-height: 1.5;
				outline: none;
				box-shadow: var(--tile-shadow);

				&:focus {
					border-color: var(--color-red-neon);
				}
				&::placeholder {
					color: var(--color-text-light);
				}
			}

			.actions {
				display: flex;
				align-items: center;
				gap: var(--space-4);
				flex-wrap: wrap;

				.go {
					font-family: var(--font-display);
					font-weight: 600;
					font-size: 0.95rem;
					color: #fff;
					background-color: var(--color-red-neon);
					border: none;
					border-radius: 12px;
					padding: 0.7rem 1.4rem;
					transition:
						transform 0.15s ease,
						opacity 0.15s ease;

					&:hover:not(:disabled) {
						transform: translateY(-2px);
					}
					&:disabled {
						opacity: 0.45;
					}
				}
				.hint {
					color: var(--color-text-light);
					font-size: 0.8rem;
				}
			}

			.error {
				color: var(--color-red-neon);
				font-size: 0.9rem;
				margin: 0;
			}

			.result {
				background-color: var(--color-box-background);
				border: var(--box-border);
				border-radius: var(--inner-box-border-radius);
				padding: var(--space-5);
				color: var(--color-text-dark);
				font-size: 0.95rem;
				line-height: 1.65;
				white-space: pre-wrap;
				word-break: break-word;
				box-shadow: var(--tile-shadow);

				.caret {
					display: inline-block;
					width: 8px;
					height: 1.05em;
					margin-left: 2px;
					vertical-align: text-bottom;
					background-color: var(--color-red-neon);
					animation: blink 1s steps(1) infinite;
				}

				@keyframes blink {
					50% {
						opacity: 0;
					}
				}
			}
		}
	}

	@media (max-width: 640px) {
		.tailor-content .card {
			margin-top: 5rem;
		}
	}
</style>
