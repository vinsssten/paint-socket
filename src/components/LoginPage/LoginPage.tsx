import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import stl from './LoginPage.scss'

import LoginCard from './LoginCard';

function LoginPage() {
    const [isLoggined, setIsLoggined] = useState<Boolean>(false);
    const [isRegister, setIsRegister] = useState<Boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggined) {
            navigate('/singledrawing');
        }
    }, []);

    return (
        <div className={stl.mainContainer}>
            {!isRegister ? 
                <LoginCard />
                :
                <h1>Register</h1>
            }
        </div>
    )
}

export default LoginPage;
