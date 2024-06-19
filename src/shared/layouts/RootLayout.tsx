import React, { ReactNode, useContext, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { UserContext } from '../lib/providers/UserProvider'


interface Props {
    children: ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
    const user = useContext(UserContext);

    useEffect(() => {
        user?.getMe()
    }, []);
    return (
        <>
            <NavBar />
            {children}

        </>
    )
}

export default RootLayout