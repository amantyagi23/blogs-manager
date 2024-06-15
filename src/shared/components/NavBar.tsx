import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button';

const NavBar = () => {
    const naviagte = useNavigate();
    return (
        <header>
            <Button onClick={() => naviagte("/login")}>Login</Button>
            <Button onClick={() => naviagte("/join")}>Register</Button>
        </header>
    )
}

export default NavBar