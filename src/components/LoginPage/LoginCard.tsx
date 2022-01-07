import React, { FC, useState } from 'react';
import SignInInput from '../Inputs/SignInInput';
import ButtonLoginPage from './ButtonLoginPage';
import stl from './LoginPage.scss';

interface Props {
    setIsRegister: React.Dispatch<React.SetStateAction<Boolean>>;
}

const LoginCard: FC<Props> = ({ setIsRegister }) => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
            <ButtonLoginPage text="Sign in" action={() => {}} />
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
