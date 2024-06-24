async function getCaseStudies(fetch) {
    const res = await fetch('/casestudy.json');
    const casestudies = await res.json();
    return casestudies;
}

export async function getCaseStudy(slug, fetch) {
    const casestudies = await getCaseStudies(fetch);
    return casestudies.find(caseStudy => caseStudy.slug === slug);
}
