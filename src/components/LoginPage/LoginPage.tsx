import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import stl from './LoginPage.scss';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterPage/RegisterCard';
import ToLocalDrawingCard from './ToLocalDrawingCard';
function LoginPage() {
    const [isRegister, setIsRegister] = useState<Boolean>(false);
    const navigate = useNavigate();

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
