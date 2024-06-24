import ShowPost from "@/modules/post/ShowPost";
import { CustomSkelton } from "@/shared/components/CustomSkelton";
import axios from "axios";
import useSWR from 'swr'
import { Suspense, useEffect, useState } from "react";

const HomePage: React.FC = () => {
    // const [data, setData] = useState(null);
    // const getData = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     console.log(response.data);
    //     setData(response.data);


    // }

    const { data, error, isLoading, mutate } = useSWR("https://fakestoreapi.com/products", () => axios.get("https://fakestoreapi.com/products"))

    // setTimeout(getData, 10000);

    if (isLoading) {
        return <>Loading</>
    }
    if (error) {
        return <>{JSON.stringify(error)}</>
    }
    else {
        console.log(data);

        return (
            <>
                <h1>Home Page</h1>

                {data?.data?.map((post) => (<ShowPost key={post.id} desc={post.description} image={post.image} title={post.title} />))}

            </>
        )
    }


}

export default HomePage