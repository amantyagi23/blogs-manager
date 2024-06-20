import { db } from '@/config/fireBaseConfig';
import { Button } from '@/shared/components/ui/button';
import { UserContext } from '@/shared/lib/providers/UserProvider';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'


interface IPost {
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

            const q = query(collection(db, "blogs"), where("author", "==", user?.user?.id));
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
        <div>{posts !== null ? <>{posts.map((post) => (<div key={post.postId}>{JSON.stringify(post)}</div>))}</> : <>Loading...</>}</div>
    )
}

export default ListPosts