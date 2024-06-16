import { UserContext } from "@/shared/lib/providers/UserProvider"
import { useContext } from "react"




const HomePage: React.FC = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Home Page</h1>
            {user?.user ? JSON.stringify(user.user) : "Please Login"}
        </>
    )
}

export default HomePage