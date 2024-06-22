import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/shared/components/ui/alert-dialog"
import { Button } from '@/shared/components/ui/button'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/config/fireBaseConfig'

interface IProps {
    postId: string,
    setMutate: (mutate: boolean) => void
}

const DeletePost: React.FC<IProps> = ({ postId, setMutate }) => {

    const deletePost = async () => {
        try {
            const response = await deleteDoc(doc(db, "blogs", postId));
            console.log(response);
            setMutate(true);
        } catch (error) {
            //
        }

    }
    return (
        <AlertDialog >
            <AlertDialogTrigger asChild>
                <Button variant="outline" >Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={deletePost}>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeletePost