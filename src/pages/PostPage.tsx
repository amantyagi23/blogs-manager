import { db } from '@/config/fireBaseConfig';
import { Button } from '@/shared/components/ui/button';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

interface IPost {
    postId: string;
    title: string;
    content: string;
    date: Date;
    author: string;

}

const PostPage = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null);
    const getData = async () => {
        try {
            const result: IPost[] = [];
            const response = await getDocs(collection(db, "blogs"));
            response.forEach((doc) => {
                const data: IPost = {
                    ...doc.data(),
                    postId: doc.id.toString()
                }
                result.push(data);
                // console.log(data);

            });
            setPosts(result);
        } catch (error) {
            //
            console.log(error);

        }
    }


    useEffect(() => {

        getData()
    }, [])

    return (
        <>

            {posts !== null ? <>{posts.map((post) => (<div key={post.postId}>{JSON.stringify(post)}</div>))}</> : <>Loading...</>}</>
    )
}

export default PostPage