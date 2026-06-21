import Anthropic from '@anthropic-ai/sdk';
import { env } from '$env/dynamic/private';
import { BIO } from '$lib/shrey.js';

// Calls the Anthropic API — never prerender.
export const prerender = false;

const MODEL = 'claude-haiku-4-5';
const MAX_TOKENS = 600;
const MAX_JOB_CHARS = 6000;

const SYSTEM_PROMPT = `You are a sharp, honest career assistant. A recruiter or hiring manager has pasted a job description. Assess how well Shrey Kumar fits it and help them see it fast.

Everything true about Shrey:
${BIO}

Respond in plain text (use "•" for bullets — no markdown headers or asterisks), in exactly this structure:
Fit: <Strong | Good | Partial | Weak> — one short clause why.

Where he fits:
• 3–5 bullets, each mapping a specific requirement from the job description to Shrey's real experience.

Worth a conversation about:
• 1–2 honest bullets on genuine gaps or stretch areas. Don't pretend they aren't there.

In his words:
A 2–3 sentence first-person pitch Shrey could send for this role.

Rules: Use ONLY the facts above — never invent skills, employers, projects, or numbers. If the role is clearly outside his domain (e.g. non-engineering), say so plainly in the verdict. Keep it tight and skimmable.`;

// Best-effort in-memory rate limit (per-instance; pair with platform protection).
const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 10;
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
		return new Response('Tailoring is not configured yet.', { status: 503 });
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return new Response('Bad request', { status: 400 });
	}

	const job = typeof body?.job === 'string' ? body.job.trim().slice(0, MAX_JOB_CHARS) : '';
	if (job.length < 30) {
		return new Response('Job description too short', { status: 400 });
	}

	if (isRateLimited(getClientAddress())) {
		return new Response('Too many requests, give it a minute.', { status: 429 });
	}

	const client = new Anthropic({ apiKey });
	const iterator = client.messages
		.stream({
			model: MODEL,
			max_tokens: MAX_TOKENS,
			system: SYSTEM_PROMPT,
			messages: [{ role: 'user', content: `Job description:\n\n${job}` }]
		})
		[Symbol.asyncIterator]();

	let firstResult;
	try {
		firstResult = await iterator.next();
	} catch (err) {
		const status =
			err?.status === 429 ? 429 : err?.status === 401 || err?.status === 403 ? 503 : 502;
		return new Response('Upstream error', { status });
	}

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
				// mid-stream drop — close out what we have
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
