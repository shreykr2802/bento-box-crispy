// src/routes/case-study/[slug]/+page.js
import { getCaseStudy } from '$lib/api/casestudy';

export async function load({ params, fetch }) {
    const caseStudy = await getCaseStudy(params.slug, fetch);
    if (!caseStudy) {
        return {
            status: 404,
            error: new Error('caseStudy not found')
        };
    }
    return { caseStudy };
}
