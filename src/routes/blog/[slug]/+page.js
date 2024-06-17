// src/routes/blog/[slug]/+page.js
import { getPost } from '$lib/api/posts';

export async function load({ params }) {
    const post = await getPost(params.slug);
    if (!post) {
        return {
            status: 404,
            error: new Error('Post not found')
        };
    }
    return { post };
}
