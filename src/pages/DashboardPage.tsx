import CreatePost from '@/modules/post/CreatePost'
import ListPosts from '@/modules/post/ListPosts'
import { useState } from 'react'

const DashboardPage = () => {
    const [mutate, setMutate] = useState<boolean>(false);
    return (
        <div><CreatePost setMutate={setMutate} />
            <ListPosts mutate={mutate} setMutate={setMutate} />
        </div>
    )
}

export default DashboardPage