export async function getPosts(fetch) {
    const res = await fetch('/posts.json');
    const posts = await res.json();
    return posts;
}

export async function getPost(slug, fetch) {
    const posts = await getPosts(fetch);
    return posts.find(post => post.slug === slug);
}
