import { auth } from "@/config/fireBaseConfig";
import { toast } from "@/shared/components/ui/use-toast";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, ReactNode, useState } from "react"

interface IUser {
    id: string,
    name: string,
    email: string
}

interface IUserContextType {
    user: IUser | null;
    loading: boolean;
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
            toast({
                title: "User Register Successful",
                description: new Date().toISOString()
            })


        } catch (error) {
            console.log("Hello");

            toast({
                title: "Error",
                description: `${error.message.toString()}`
            })

        }
    }
    const loginUser = async (email: string, password: string) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }

    const logoutUser = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ loginUser: loginUser, registerUser: registerUser, loading: loading, user: user, logoutUser: logoutUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider