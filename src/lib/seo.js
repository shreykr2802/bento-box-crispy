// ⚠️ SET THIS to your real production domain. It's the single source of truth for
// canonical URLs, Open Graph share images, and structured data. If it's wrong, social
// previews and the JSON-LD will point at the wrong place.
export const SITE_URL = 'https://shreykumar.com';

export const OG_IMAGE = `${SITE_URL}/og.png`;

// JSON-LD Person schema — helps Google/LLMs understand you as an entity.
export const personSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Shrey Kumar',
	url: SITE_URL,
	image: OG_IMAGE,
	jobTitle: 'Senior Full-Stack Software Engineer',
	worksFor: { '@type': 'Organization', name: 'Baxter R&D' },
	address: { '@type': 'PostalAddress', addressCountry: 'IN' },
	email: 'mailto:shreykr2802@gmail.com',
	knowsAbout: [
		'JavaScript',
		'TypeScript',
		'React',
		'Node.js',
		'Next.js',
		'Svelte',
		'PostgreSQL',
		'AWS',
		'Docker',
		'Kubernetes'
	],
	sameAs: [
		'https://github.com/shreykr2802',
		'https://www.linkedin.com/in/shreykr2802/',
		'https://www.instagram.com/shreykr2802',
		'https://codepen.io/shreykumar',
		'https://dribbble.com/shreykr2802'
	]
};
