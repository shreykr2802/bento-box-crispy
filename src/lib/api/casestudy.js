import {
    PUBLIC_ASSETS_ENDPOINT_URL,
} from '$env/static/public';

async function getCaseStudies(fetch) {
    const res = await fetch(`${PUBLIC_ASSETS_ENDPOINT_URL}/casestudy.json`);
    const casestudies = await res.json();
    return casestudies;
}

export async function getCaseStudy(slug, fetch) {
    const casestudies = await getCaseStudies(fetch);
    return casestudies.find(caseStudy => caseStudy.slug === slug);
}
