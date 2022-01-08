import React, { FC, useState } from 'react';
import useAuth from '../../lib/hooks/useAuth';
import SignInInput from '../Inputs/SignInInput';
import ButtonLoginPage from '../Buttons/ButtonLoginPage';
import stl from './LoginPage.scss';
import WarningListCard from '../Cards/WarningCards/WarningListCard';
import { Link } from 'react-router-dom';
import EmptyCard from '../Cards/EmptyCard';

interface Props {
    
}

const LoginCard: FC<Props> = ({ }) => {
    const {login: loginFunc, loginErrorMessage} = useAuth();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleLogin () {
        if (login != '' && password != '') {
            loginFunc(login, password);
        }
    }

    return (
        <EmptyCard>
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
                <Link className={stl.textAdditional} to='/signup'>Registration</Link>
                <Link className={stl.textAdditional} to='/signup'>Forgot my password</Link>
            </div>
        </EmptyCard>
        
           
        
    );
};

export default LoginCard;
