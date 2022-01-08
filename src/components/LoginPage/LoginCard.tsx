import React, { FC, useState } from 'react';
import useAuth from '../../lib/hooks/useAuth';
import SignInInput from '../Inputs/SignInInput';
import ButtonLoginPage from './ButtonLoginPage';
import stl from './LoginPage.scss';
import WarningListCard from '../WarningCards/WarningListCard';

interface Props {
    setIsRegister: React.Dispatch<React.SetStateAction<Boolean>>;
}

const LoginCard: FC<Props> = ({ setIsRegister }) => {
    const {login: loginFunc, loginErrorMessage} = useAuth();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin () {
        if (login != '' && password != '') {
            loginFunc(login, password);
        }
    }

    function changeCard() {
        setIsRegister(true);
    }

    return (
        <div className={stl.cardContainer}>
            <h1 className={stl.textHead}>Sign in</h1>
            <div className={stl.inputContainer}>
                <SignInInput
                    placeholder="Login"
                    isSecure={false}
                    value={login}
                    inputHandle={setLogin}
                />
                <SignInInput
                    placeholder="Password"
                    isSecure={true}
                    value={password}
                    inputHandle={setPassword}
                />
            </div>
            <WarningListCard isVisible={loginErrorMessage != null} header={loginErrorMessage} />
            <ButtonLoginPage text="Sign in" action={handleLogin} />
            <p onClick={changeCard} className={stl.textAdditional}>
                Registration
            </p>
            <p onClick={changeCard} className={stl.textAdditional}>
                Forgot my password
            </p>
        </div>
    );
};

export default LoginCard;
