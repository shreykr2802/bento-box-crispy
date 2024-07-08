import {
    PUBLIC_ASSETS_ENDPOINT_URL,
} from '$env/static/public';

export async function getPosts(fetch) {
    const res = await fetch(`${PUBLIC_ASSETS_ENDPOINT_URL}/posts.json`);
    const posts = await res.json();
    console.log("post", posts.sort((a, b) => b.id - a.id))
    return posts;
}

export async function getPost(slug, fetch) {
    const posts = await getPosts(fetch);
    return posts.find(post => post.slug === slug);
}
