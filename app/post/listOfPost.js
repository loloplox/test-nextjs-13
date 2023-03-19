import LikeButton from "./LikeButton";

function fetchPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())

}

export default async function ListOfPost() {
    const posts = await fetchPosts()

    return (
        posts.slice(0, 5).map(posts => (
            <article key={posts.id}>
                <h2>{posts.title}</h2>
                <p>{posts.body}</p>
                <LikeButton/>
            </article>
        ))
    )
}
