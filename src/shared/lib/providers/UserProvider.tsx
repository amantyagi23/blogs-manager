import { auth } from "@/config/fireBaseConfig";
import { createUserWithEmailAndPassword, signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode, useState } from "react"
import Cookies from "js-cookie";
interface IUser {
    id: string,
    name: string,
    email: string
}

interface IUserContextType {
    user: IUser | null;
    loading: boolean;
    getMe: () => Promise<void>;
    registerUser: (email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;

}

export const UserContext = createContext<IUserContextType | undefined>(undefined);


interface Iprops {
    children: ReactNode;
}

const UserProvider: React.FC<Iprops> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const registerUser = async (email: string, password: string) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw new Error(error.message.toString());
        }
    }
    const loginUser = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            const accessToken = response.user.accessToken;
            Cookies.set("accessToken", accessToken, { domain: "http://localhost:5173/", path: "/", expires: 60, sameSite: "Lax", secure: false });



        } catch (error) {
            throw new Error(error.message.toString());
        }
    }

    const logoutUser = () => {
        setUser(null)
    }

    const getMe = () => {

    }

    return (
        <UserContext.Provider value={{ loginUser: loginUser, registerUser: registerUser, loading: loading, user: user, logoutUser: logoutUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider