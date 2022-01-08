import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import stl from './LoginPage.scss';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterPage/RegisterCard';
import ToLocalDrawingCard from './ToLocalDrawingCard';
import useAuth from '../../lib/hooks/useAuth';

//FIXME: Regenerator runtime error
function LoginPage() {
    const { isAuth } = useAuth();
    const [isRegister, setIsRegister] = useState<Boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate('/mainpage');
        }
    }, [isAuth]);

    return (
        <div className={stl.mainContainer}>
            <div className={stl.mainContainer}>
                <LoginCard />
                <ToLocalDrawingCard />
            </div>
        </div>
    );
}

export default LoginPage;
