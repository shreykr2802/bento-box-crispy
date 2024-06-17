export async function getPosts() {
    const res = await fetch('/posts.json');
    const posts = await res.json();
    return posts;
}

export async function getPost(slug) {
    const posts = await getPosts();
    return posts.find(post => post.slug === slug);
}
