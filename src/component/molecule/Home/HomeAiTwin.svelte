<script>
	import { tick } from 'svelte';

	const greeting =
		"Hey — I'm Shrey's AI twin. Ask me anything: my stack, my work, or whether I'm free to build something. 👋";

	const suggestions = [
		'Are you open to work?',
		"What's your strongest stack?",
		'Show me your best project',
		'Why should I hire you?'
	];

	let messages = [{ role: 'assistant', content: greeting }];
	let input = '';
	let loading = false;
	let scroller;

	async function scrollToBottom() {
		await tick();
		if (scroller) scroller.scrollTop = scroller.scrollHeight;
	}

	async function send(text) {
		const question = (text ?? input).trim();
		if (!question || loading) return;

		input = '';
		loading = true;
		messages = [...messages, { role: 'user', content: question }];
		const replyIndex = messages.length;
		messages = [...messages, { role: 'assistant', content: '' }];
		scrollToBottom();

		try {
			const res = await fetch('/api/ask', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ messages: messages.slice(0, -1) })
			});

			if (!res.ok || !res.body) {
				messages[replyIndex].content =
					res.status === 429
						? "Easy — too many questions at once. Give it a minute, then ask away."
						: "My twin's having a moment. Try again in a sec, or just email me: shreykr2802@gmail.com";
				messages = messages;
				return;
			}

			const reader = res.body.getReader();
			const decoder = new TextDecoder();
			while (true) {
				const { value, done } = await reader.read();
				if (done) break;
				messages[replyIndex].content += decoder.decode(value, { stream: true });
				messages = messages;
				scrollToBottom();
			}
		} catch {
			messages[replyIndex].content =
				'Connection hiccup. Mind trying that again? Or reach me at shreykr2802@gmail.com';
			messages = messages;
		} finally {
			loading = false;
			scrollToBottom();
		}
	}

	function onKeydown(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			send();
		}
	}

	// Turn internal paths, full URLs and emails in a reply into clickable links.
	// Everything else stays plain text (Svelte escapes it), so no XSS surface.
	function linkify(text) {
		const pattern =
			/(https?:\/\/[^\s)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\/(?:about|blog|case-study)[\w\-/]*)/g;
		const parts = [];
		let last = 0;
		let m;
		while ((m = pattern.exec(text)) !== null) {
			if (m.index > last) parts.push({ text: text.slice(last, m.index) });
			if (m[1]) parts.push({ text: m[1], href: m[1], external: true });
			else if (m[2]) parts.push({ text: m[2], href: `mailto:${m[2]}` });
			else if (m[3]) parts.push({ text: m[3], href: m[3] });
			last = m.index + m[0].length;
		}
		if (last < text.length) parts.push({ text: text.slice(last) });
		return parts;
	}
</script>

<div class="ai-twin">
	<div class="ai-head">
		<span class="dot"><span class="dot-pulse" /></span>
		<h5 class="box-sub-title">ASK MY AI TWIN</h5>
	</div>

	<div class="messages" bind:this={scroller}>
		{#each messages as message, i}
			<div class="msg {message.role}">
				{#if message.role === 'assistant'}
					{#if message.content}
						{#each linkify(message.content) as part}{#if part.href}<a
									href={part.href}
									target={part.external ? '_blank' : undefined}
									rel={part.external ? 'noopener noreferrer' : undefined}>{part.text}</a
								>{:else}{part.text}{/if}{/each}
					{:else if loading && i === messages.length - 1}
						<span class="typing"><span /><span /><span /></span>
					{/if}
				{:else}
					{message.content}
				{/if}
			</div>
		{/each}
	</div>

	<div class="suggestions">
		{#each suggestions as s}
			<button type="button" class="chip" on:click={() => send(s)} disabled={loading}>{s}</button>
		{/each}
	</div>

	<div class="composer">
		<input
			type="text"
			bind:value={input}
			on:keydown={onKeydown}
			placeholder="Ask me anything…"
			maxlength="500"
			disabled={loading}
			aria-label="Ask Shrey's AI twin a question"
		/>
		<button type="button" class="send" on:click={() => send()} disabled={loading || !input.trim()} aria-label="Send">
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
				<path
					d="M2.5 12 21 3.5 16 21l-4.5-6.5L4 13z"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>
</div>

<style lang="scss">
	.ai-twin {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		width: calc(100% - var(--diff-factor));
		margin: var(--inner-box-margin);
		padding: var(--space-2);
		background-color: var(--color-box-background);
		color: var(--color-text-dark);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);

		.ai-head {
			display: flex;
			align-items: center;
			gap: var(--space-2);

			.box-sub-title {
				margin: 0;
				padding: 0;
				letter-spacing: 2px;
			}

			.dot {
				position: relative;
				height: 8px;
				width: 8px;
				border-radius: 50%;
				background-color: var(--color-green-neon);

				.dot-pulse {
					position: absolute;
					inset: 0;
					border-radius: 50%;
					background-color: rgba(109, 211, 61, 0.4);
					animation: pulse 1.4s ease-in-out infinite;

					@keyframes pulse {
						0% {
							transform: scale(0);
						}
						50% {
							transform: scale(2);
						}
						100% {
							transform: scale(0);
						}
					}
				}
			}
		}

		.messages {
			display: flex;
			flex-direction: column;
			gap: var(--space-2);
			height: 190px;
			overflow-y: auto;
			padding: var(--space-1);
			scrollbar-width: thin;

			.msg {
				font-size: 0.8rem;
				line-height: 1.4;
				padding: var(--space-2) var(--space-2);
				border-radius: 12px;
				max-width: 90%;
				word-break: break-word;
				overflow-wrap: break-word;

				&.assistant {
					align-self: flex-start;
					background-color: var(--color-box-background-hover);
					border: var(--box-border);
					border-bottom-left-radius: 2px;

					a {
						color: var(--color-red-neon);
						text-decoration: underline;
						text-underline-offset: 2px;
					}
				}

				&.user {
					align-self: flex-end;
					background-color: var(--color-red-neon);
					color: white;
					border-bottom-right-radius: 2px;
				}
			}

			.typing {
				display: inline-flex;
				gap: 3px;
				align-items: center;

				span {
					height: 5px;
					width: 5px;
					border-radius: 50%;
					background-color: var(--color-text-light);
					animation: blink 1.2s infinite both;
				}
				span:nth-child(2) {
					animation-delay: 0.2s;
				}
				span:nth-child(3) {
					animation-delay: 0.4s;
				}

				@keyframes blink {
					0%,
					80%,
					100% {
						opacity: 0.2;
					}
					40% {
						opacity: 1;
					}
				}
			}
		}

		.suggestions {
			display: flex;
			flex-wrap: wrap;
			gap: var(--space-1);

			.chip {
				font-family: inherit;
				font-size: 0.7rem;
				color: var(--color-text-dark);
				background-color: var(--color-box-background-hover);
				border: var(--box-border);
				border-radius: 999px;
				padding: var(--space-1) var(--space-2);
				transition: all 0.15s ease;

				&:hover:not(:disabled) {
					color: var(--color-red-neon);
					border-color: var(--color-red-neon);
				}
				&:disabled {
					opacity: 0.5;
				}
			}
		}

		.composer {
			display: flex;
			align-items: center;
			gap: var(--space-2);
			border: var(--box-border);
			border-radius: 12px;
			background-color: var(--color-box-background-hover);
			padding: var(--space-1) var(--space-1) var(--space-1) var(--space-2);

			input {
				flex: 1;
				min-width: 0;
				background: transparent;
				border: none;
				outline: none;
				color: var(--color-text-dark);
				font-family: inherit;
				font-size: 0.8rem;

				&::placeholder {
					color: var(--color-text-light);
				}
			}

			.send {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 1.9rem;
				width: 1.9rem;
				flex-shrink: 0;
				border: none;
				border-radius: 9px;
				background-color: var(--color-red-neon);
				color: white;
				transition: transform 0.15s ease, opacity 0.15s ease;

				&:hover:not(:disabled) {
					transform: scale(1.08);
				}
				&:disabled {
					opacity: 0.4;
				}
			}
		}
	}
</style>
