import {
    PUBLIC_ASSETS_ENDPOINT_URL,
} from '$env/static/public';

export async function getPosts(fetch) {
    const res = await fetch(`${PUBLIC_ASSETS_ENDPOINT_URL}/posts.json`);
    const posts = await res.json();
    return posts;
}

export async function getPost(slug, fetch) {
    const posts = await getPosts(fetch);
    return posts.find(post => post.slug === slug);
}
