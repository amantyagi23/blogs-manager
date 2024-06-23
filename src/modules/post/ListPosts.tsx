import { db } from '@/config/fireBaseConfig';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { UserContext } from '@/shared/lib/providers/UserProvider';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'

import { Delete } from 'lucide-react';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';


export interface IPost {
    postId: string;
    title: string;
    content: string;
    date: Date;
    author: string;

}

interface Iprops {
    mutate: boolean;
    setMutate: (mutate: boolean) => void
}
const ListPosts: React.FC<Iprops> = ({ mutate, setMutate }) => {


    const user = useContext(UserContext);
    const [posts, setPosts] = useState<IPost[] | null>(null);
    const getData = async () => {
        try {
            const result: IPost[] = [];

            const q = query(collection(db, "blogs"), where("author", "==", user?.user?.email));
            const response = await getDocs(q);
            response.forEach((doc) => {
                const data: IPost = {
                    ...doc.data(),
                    postId: doc.id.toString()
                }
                result.push(data);
                // console.log(data);

            });
            setPosts(result);
            setMutate(false);
        } catch (error) {
            //
            console.log(error);

        }
    }

    useEffect(() => {
        getData()
    }, [mutate === true])


    return (
        <>
            <h2>Post List</h2>
            <div>{posts !== null ? <>{posts.map((post) => (<Card key={post.postId}  > <CardHeader> <CardTitle>{post.title}</CardTitle>  <span>{post.author}</span> <UpdatePost post={post} setMutate={setMutate} /> <DeletePost setMutate={setMutate} postId={post.postId} /> </CardHeader><CardContent><div dangerouslySetInnerHTML={{ __html: post.content }}></div></CardContent></Card>))}</> : <>Loading...</>}</div >

            {posts?.length == 0 && <>No Posts Yet</>}
        </>
    )
}

export default ListPosts