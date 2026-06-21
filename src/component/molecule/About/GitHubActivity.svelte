<script>
	import { onMount } from 'svelte';

	const USER = 'shreykr2802';
	const PROFILE = `https://github.com/${USER}`;
	const CACHE_KEY = 'gh-activity-v1';
	const TTL = 60 * 60 * 1000; // refresh at most hourly

	let loading = true;
	let failed = false;
	let stats = null;
	let topRepos = [];
	let weeks = [];
	let totalContributions = 0;

	function apply(d) {
		stats = { repos: d.repos, stars: d.stars, followers: d.followers };
		topRepos = d.top || [];
		totalContributions = d.total || 0;
		weeks = buildWeeks(d.contributions);
	}

	function buildWeeks(contributions) {
		if (!Array.isArray(contributions) || !contributions.length) return [];
		const days = contributions.slice(-371);
		const pad = new Date(days[0].date).getDay(); // 0 = Sunday
		const cells = [...Array(pad).fill(null), ...days];
		const out = [];
		for (let i = 0; i < cells.length; i += 7) out.push(cells.slice(i, i + 7));
		return out;
	}

	async function load() {
		try {
			const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
			if (cached && Date.now() - cached.t < TTL) {
				apply(cached.d);
				loading = false;
				return;
			}
		} catch {
			/* ignore bad cache */
		}

		try {
			const [userRes, reposRes, contribRes] = await Promise.all([
				fetch(`https://api.github.com/users/${USER}`),
				fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`),
				fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`).catch(() => null)
			]);

			if (!userRes.ok || !reposRes.ok) throw new Error('github unavailable');

			const user = await userRes.json();
			const repos = await reposRes.json();
			let contrib = null;
			try {
				if (contribRes && contribRes.ok) contrib = await contribRes.json();
			} catch {
				/* heatmap is optional */
			}

			const owned = Array.isArray(repos) ? repos.filter((r) => !r.fork) : [];
			const stars = owned.reduce((s, r) => s + (r.stargazers_count || 0), 0);
			const top = [...owned]
				.sort((a, b) => b.stargazers_count - a.stargazers_count)
				.slice(0, 4)
				.map((r) => ({
					name: r.name,
					url: r.html_url,
					desc: r.description,
					stars: r.stargazers_count,
					lang: r.language
				}));

			const data = {
				repos: user.public_repos,
				followers: user.followers,
				stars,
				top,
				contributions: contrib?.contributions ?? null,
				total: contrib?.total?.lastYear ?? Object.values(contrib?.total ?? {})[0] ?? null
			};

			apply(data);
			localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d: data }));
		} catch {
			failed = true;
		} finally {
			loading = false;
		}
	}

	onMount(load);
</script>

<div class="gh">
	<div class="gh-head">
		<h5 class="box-sub-title">On GitHub</h5>
		<a class="gh-handle" href={PROFILE} target="_blank" rel="noopener noreferrer">@{USER} ↗</a>
	</div>

	{#if loading}
		<p class="gh-muted">Loading live activity…</p>
	{:else if failed || !stats}
		<p class="gh-muted">
			Couldn't load live data right now — see it on <a
				href={PROFILE}
				target="_blank"
				rel="noopener noreferrer">github.com/{USER}</a
			>.
		</p>
	{:else}
		<div class="gh-stats">
			<div><strong>{stats.repos}</strong><span>repos</span></div>
			<div><strong>{stats.stars}</strong><span>stars</span></div>
			<div><strong>{stats.followers}</strong><span>followers</span></div>
			{#if totalContributions}
				<div><strong>{totalContributions}</strong><span>contributions / yr</span></div>
			{/if}
		</div>

		{#if weeks.length}
			<div class="heatmap" aria-label="GitHub contributions over the last year">
				{#each weeks as week}
					<div class="week">
						{#each week as day}
							<span
								class="cell"
								data-level={day ? day.level : 'pad'}
								title={day ? `${day.count} on ${day.date}` : ''}
							></span>
						{/each}
					</div>
				{/each}
			</div>
		{/if}

		{#if topRepos.length}
			<ul class="gh-repos">
				{#each topRepos as repo}
					<li>
						<a href={repo.url} target="_blank" rel="noopener noreferrer">
							<span class="repo-top">
								<span class="repo-name">{repo.name}</span>
								{#if repo.stars}<span class="repo-stars">★ {repo.stars}</span>{/if}
							</span>
							{#if repo.desc}<span class="repo-desc">{repo.desc}</span>{/if}
							{#if repo.lang}<span class="repo-lang">{repo.lang}</span>{/if}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style lang="scss">
	.gh {
		border: var(--box-border);
		border-radius: var(--inner-box-border-radius);
		background-color: var(--color-box-background);
		box-shadow: var(--tile-highlight), var(--tile-shadow);
		padding: var(--space-5);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);

		.gh-head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: var(--space-2);

			.box-sub-title {
				margin: 0;
			}
			.gh-handle {
				color: var(--color-red-neon);
				font-size: 0.85rem;
			}
		}

		.gh-muted {
			color: var(--color-text-light);
			font-size: 0.9rem;
			margin: 0;

			a {
				color: var(--color-red-neon);
			}
		}

		.gh-stats {
			display: flex;
			flex-wrap: wrap;
			gap: var(--space-5);

			div {
				display: flex;
				flex-direction: column;
				line-height: 1.1;

				strong {
					font-family: var(--font-display);
					font-size: 1.6rem;
					color: var(--color-text-dark);
				}
				span {
					color: var(--color-text-light);
					font-size: 0.75rem;
				}
			}
		}

		.heatmap {
			display: flex;
			gap: 3px;
			overflow-x: auto;
			padding-bottom: 4px;
			scrollbar-width: thin;

			.week {
				display: flex;
				flex-direction: column;
				gap: 3px;
			}
			.cell {
				width: 11px;
				height: 11px;
				flex-shrink: 0;
				border-radius: 2px;
				background: var(--color-surface-2);

				&[data-level='pad'] {
					background: transparent;
				}
				&[data-level='1'] {
					background: rgba(109, 211, 61, 0.3);
				}
				&[data-level='2'] {
					background: rgba(109, 211, 61, 0.55);
				}
				&[data-level='3'] {
					background: rgba(109, 211, 61, 0.78);
				}
				&[data-level='4'] {
					background: rgba(109, 211, 61, 1);
				}
			}
		}

		.gh-repos {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-2);

			a {
				display: flex;
				flex-direction: column;
				gap: 4px;
				height: 100%;
				padding: var(--space-3);
				border: var(--box-border);
				border-radius: 12px;
				background-color: var(--color-surface-2);
				transition: border-color 0.2s ease;

				&:hover {
					border-color: var(--color-red-neon);
				}

				.repo-top {
					display: flex;
					align-items: baseline;
					justify-content: space-between;
					gap: var(--space-2);

					.repo-name {
						color: var(--color-red-neon);
						font-weight: 600;
						font-size: 0.95rem;
					}
					.repo-stars {
						color: var(--color-text-light);
						font-size: 0.8rem;
						flex-shrink: 0;
					}
				}
				.repo-desc {
					color: var(--color-text-light);
					font-size: 0.8rem;
					line-height: 1.4;
				}
				.repo-lang {
					color: var(--color-text-darker);
					font-size: 0.72rem;
				}
			}
		}
	}

	@media (max-width: 640px) {
		.gh .gh-repos {
			grid-template-columns: 1fr;
		}
	}
</style>
