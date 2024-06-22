import { db } from '@/config/fireBaseConfig';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { addDoc, collection, } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from '@/shared/lib/providers/UserProvider';


interface IFormType {
    title: string;
    content: unknown;
    date: Date;
    author: string;
}

interface Iprops {
    setMutate: (mutate: boolean) => void
}

const CreatePost: React.FC<Iprops> = ({ setMutate }) => {

    const myColors = [
        "purple",
        "#785412",
        "#452632",
        "#856325",
        "#963254",
        "#254563",
        "white"
    ];
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: myColors }],
            [{ background: myColors }]
        ]
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align"
    ];

    const [code, setCode] = useState(
        "hello guys you can also add fonts and another features to this editor."
    );
    const handleProcedureContentChange = (content: any) => {
        setCode(content);
    };
    const { register, reset, handleSubmit, } = useForm();

    const user = useContext(UserContext);
    const onSubmit = async (data: unknown) => {


        try {
            const customObject: IFormType = {
                title: data.title,
                content: code,
                author: user?.user ? user.user?.email : "",
                date: new Date(),

            }
            reset();

            console.log(customObject);

            const resp = await addDoc(collection(db, "blogs"), customObject);
            console.log(resp);
            setMutate(true)

        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Button type='submit'>Create</Button>
                <Input placeholder='Title' type='text' {...register("title")} />
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={code}
                    onChange={handleProcedureContentChange}
                />
            </form>
        </div>
    )
}

export default CreatePost