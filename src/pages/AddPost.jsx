import storageService from "../appwrite/configFor Database"
import { useState, useEffect, useLayoutEffect } from "react"
import { Container, PostCard, PostForm } from "../Components"

export default function Signup() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        storageService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    return (
        <div className="py-8">
            <Container>
                {posts.map((post) => (
                    <PostCard key={post.$id} post={post} />
                ))}
            </Container>
        </div>
    )
}