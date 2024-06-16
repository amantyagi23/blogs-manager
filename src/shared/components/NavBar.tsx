import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button';
import { UserContext } from '../lib/providers/UserProvider';

const NavBar = () => {
    const naviagte = useNavigate();
    const user = useContext(UserContext);
    return (
        <header>
            {user?.user ? `welcome ${user.user.email}` : <>
                <Button onClick={() => naviagte("/login")}>Login</Button>
                <Button onClick={() => naviagte("/join")}>Register</Button>
            </>}
        </header>
    )
}

export default NavBar