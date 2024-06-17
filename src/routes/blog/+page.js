// src/routes/blog/+page.js
import { getPosts } from '$lib/api/posts';

export async function load({fetch}) {
    const posts = await getPosts(fetch);
    return { posts };
}
