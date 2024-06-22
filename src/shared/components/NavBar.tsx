import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button';
import { UserContext } from '../lib/providers/UserProvider';

const NavBar = () => {
    const naviagte = useNavigate();
    const user = useContext(UserContext);
    const logout = () => {
        user?.logoutUser();
        naviagte("/login");
    }
    return (
        <header>
            {user?.user ? <>{`welcome ${user.user.email}`} <Link to={"/dashboard"}>Dashboard</Link> <Button onClick={logout}>Logout</Button></> : <>
                <Button onClick={() => naviagte("/login")}>Login</Button>
                <Button onClick={() => naviagte("/join")}>Register</Button>
            </>}
        </header>
    )
}

export default NavBar