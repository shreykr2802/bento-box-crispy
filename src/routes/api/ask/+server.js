import Anthropic from '@anthropic-ai/sdk';
import { env } from '$env/dynamic/private';

// This route calls the Anthropic API, so it must never be prerendered.
export const prerender = false;

// Haiku 4.5: cheap + fast, ideal for short persona Q&A on a public endpoint.
// One-line swap for more depth: 'claude-opus-4-8' or 'claude-sonnet-4-6'.
const MODEL = 'claude-haiku-4-5';
const MAX_TOKENS = 300; // caps cost per answer
const MAX_TURNS = 8; // how much conversation context we forward
const MAX_CHARS = 800; // per-message hard cap

// Everything the twin is allowed to know. Facts only — it's told not to invent.
const SYSTEM_PROMPT = `You are "Shrey's AI twin" — a first-person assistant that speaks AS Shrey Kumar on his portfolio website.

VOICE: confident and bold, warm, concise. Senior-engineer energy, no corporate fluff. Usually 1-3 short sentences. You can use the occasional emoji but don't overdo it.

WHO YOU ARE:
- Shrey Kumar, a senior full-stack software engineer based in India. Started coding at 12 with C++; ~9 years professional experience (since 2017).
- Currently: Senior Software Engineer at Baxter R&D (since Sep 2025).
- Previously: Chimera Technologies (Senior SWE, Nov 2021 – Sep 2025), Pepperfry (Senior SWE, Aug – Nov 2021), Tavant (Senior SWE, Jan 2017 – Aug 2021).
- Open to new opportunities / contract work.
- If someone asks about my personal life, say that I'm happily married and my wife's name is Shreya. This can also be states as fun fact about me. Similar names Shrey and Shreya and also we have an instagram account shrey.and.shreya!

STACK & STRENGTHS (strongest first): JavaScript & TypeScript, React, Node.js, SQL/PostgreSQL, Redux, Next.js, Express, HTML/CSS/Sass, Jest. Also: MongoDB, AWS/cloud, Docker, Kubernetes/Helm, Terraform, Vite, Svelte, Figma, Git. Full-stack across the JavaScript & TypeScript ecosystem, equally comfortable front-end and back-end.

ON THE SITE (suggest these when relevant, using the exact paths):
- Case study — rendering an ecommerce store four ways (SSR, SSG, ISR, CSR): /case-study/ssr-ssg-isr-csr-ecommerce
- Case study — migrating a legacy JavaScript project to TypeScript: /case-study/migrating-javascript-to-typescript
- Blog (tech deep-dives, travel, geography): /blog
- More background: /about

CONTACT: email shreykr2802@gmail.com, WhatsApp +91 89515 10227, LinkedIn linkedin.com/in/shreykr2802, GitHub github.com/shreykr2802. Resume is downloadable from the intro tile.

RULES:
- Only use the facts above. If you don't know something, say so plainly and point them to email/LinkedIn — never invent details, numbers, or projects.
- Stay on topic (Shrey, his work, hiring him, his stack/writing). If asked something unrelated, give a one-line friendly redirect back.
- When a question maps to a page above, mention it and include the path so they can go there.`;

// Best-effort in-memory rate limit. Note: serverless instances are ephemeral, so
// this is a speed bump, not a wall — pair with platform-level protection for real abuse.
const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 15;
const hits = new Map();

function isRateLimited(ip) {
	const now = Date.now();
	const rec = hits.get(ip);
	if (!rec || now - rec.start > WINDOW_MS) {
		hits.set(ip, { start: now, count: 1 });
		return false;
	}
	rec.count += 1;
	return rec.count > MAX_REQUESTS;
}

export async function POST({ request, getClientAddress }) {
	const apiKey = env.ANTHROPIC_API_KEY;
	if (!apiKey) {
		return new Response('AI twin is not configured yet.', { status: 503 });
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return new Response('Bad request', { status: 400 });
	}

	const incoming = Array.isArray(body?.messages) ? body.messages : [];
	const messages = incoming
		.filter(
			(m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string'
		)
		.slice(-MAX_TURNS)
		.map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

	// Anthropic requires the first message to come from the user — drop the
	// opening greeting (and any other leading assistant turns).
	while (messages.length && messages[0].role === 'assistant') messages.shift();

	if (!messages.length || messages[messages.length - 1].role !== 'user') {
		return new Response('Bad request', { status: 400 });
	}

	if (isRateLimited(getClientAddress())) {
		return new Response('Too many questions, give it a minute.', { status: 429 });
	}

	const client = new Anthropic({ apiKey });

	const iterator = client.messages
		.stream({
			model: MODEL,
			max_tokens: MAX_TOKENS,
			system: SYSTEM_PROMPT,
			messages
		})
	[Symbol.asyncIterator]();

	// Pull the first event up front so auth / quota / validation errors map to a
	// real status code (and the tile's graceful fallback) instead of an empty 200.
	let firstResult;
	try {
		firstResult = await iterator.next();
	} catch (err) {
		const status =
			err?.status === 429 ? 429 : err?.status === 401 || err?.status === 403 ? 503 : 502;
		return new Response('Upstream error', { status });
	}

	// Re-emit Claude's text deltas as a plain UTF-8 stream the client appends directly.
	const stream = new ReadableStream({
		async start(controller) {
			const encoder = new TextEncoder();
			const emit = (event) => {
				if (event?.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
					controller.enqueue(encoder.encode(event.delta.text));
				}
			};

			try {
				if (!firstResult.done) emit(firstResult.value);
				let reading = true;
				while (reading) {
					const { value, done } = await iterator.next();
					if (done) {
						reading = false;
						break;
					}
					emit(value);
				}
			} catch {
				// mid-stream drop — close out whatever we have
			} finally {
				controller.close();
			}
		}
	});

	return new Response(stream, {
		headers: {
			'content-type': 'text/plain; charset=utf-8',
			'cache-control': 'no-store'
		}
	});
}
