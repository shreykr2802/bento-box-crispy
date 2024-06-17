// src/routes/blog/[slug]/+page.js
import { getPost } from '$lib/api/posts';

export async function load({ params, fetch }) {
    const post = await getPost(params.slug, fetch);
    if (!post) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }
    return { post };
}
