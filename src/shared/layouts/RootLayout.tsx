import React, { ReactNode } from 'react'
import NavBar from '../components/NavBar'


interface Props {
    children: ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default RootLayout