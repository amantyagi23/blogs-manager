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


    return (
        <UserContext.Provider value={{}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider