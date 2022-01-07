import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import stl from './LoginPage.scss'

import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

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
                <LoginCard setIsRegister={setIsRegister}/>
                :
                <RegisterCard setIsRegister={setIsRegister}/>
            }
        </div>
    )
}

export default LoginPage;
