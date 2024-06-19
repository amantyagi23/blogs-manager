import React, { ReactNode, useContext } from 'react'
import { UserContext } from '../lib/providers/UserProvider'
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

interface IProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    if (user?.user != null) {
        return <>{children}</>
    }
    else {
        return <>Please Login <Button onClick={() => navigate("/login")}>Go To Login</Button> </>
    }
}

export default ProtectedRoute