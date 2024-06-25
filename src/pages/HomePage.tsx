
import ShowPost from "@/modules/post/ShowPost";
import axios from "axios";
import useSWR from 'swr'


interface IPostProps {
    id: string;
    title: string;
    description: string;
    image: string
}

const HomePage: React.FC = () => {
    // const [data, setData] = useState(null);
    // const getData = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     console.log(response.data);
    //     setData(response.data);


    // }

    const { data, error, isLoading } = useSWR("https://fakestoreapi.com/products", () => axios.get("https://fakestoreapi.com/products"))

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

                {data?.data?.map((post: IPostProps) => (<ShowPost key={post.id} desc={post.description} image={post.image} title={post.title} />))}

            </>
        )
    }


}

export default HomePage