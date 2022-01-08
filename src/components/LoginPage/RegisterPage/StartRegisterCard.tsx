import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonLoginPage from '../../Buttons/ButtonLoginPage';
import WarningListCard from '../../Cards/WarningCards/WarningListCard';
import SignInInput from '../../Inputs/SignInInput';
import { InputProps } from './RegisterCard';

import stl from '../LoginPage.scss';

interface Props {
    serverMessage: string | null;
    isLoading: boolean;
    registration: Function;
}

const StartRegisterCard: FC<Props> = ({ isLoading, registration, serverMessage }) => {
    const [login, setLogin] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rpassword, setRPassword] = useState<string>('');

    const [isVisibleWarningCard, setIsVisibleWarningCard] = useState<boolean>(false);

    function handleRegister() {
        if (
            login.length < 5 ||
            username.length < 4 ||
            password.length < 6 ||
            rpassword != rpassword
        ) {
            setIsVisibleWarningCard(true);
        } else {
            registration(login, username, password);
        }
    }

    const inputsArray: InputProps[] = [
        { placeholder: 'Login', isSecure: false, value: login, inputHandle: setLogin },
        {
            placeholder: 'Username',
            isSecure: false,
            value: username,
            inputHandle: setUsername,
        },
        {
            placeholder: 'Password',
            isSecure: true,
            value: password,
            inputHandle: setPassword,
        },
        {
            placeholder: 'Repeat password',
            isSecure: true,
            value: rpassword,
            inputHandle: setRPassword,
        },
    ];

    return (
        <>
            <h1 className={stl.textHead}>Sign up</h1>
            <div className={stl.inputContainer}>
                {inputsArray.map((value, index) => (
                    <SignInInput
                        key={index}
                        placeholder={value.placeholder}
                        isSecure={value.isSecure}
                        value={value.value}
                        inputHandle={value.inputHandle}
                    />
                ))}
            </div>
            {serverMessage ? (
                <WarningListCard isVisible={true} header={serverMessage} />
            ) : (
                <WarningListCard
                    isVisible={isVisibleWarningCard}
                    preset="RegistrationFields"
                />
            )}
            <ButtonLoginPage text="Sign in" action={handleRegister} />
            <Link className={stl.textAdditional} to="/signin">
                Go to login
            </Link>
            {isLoading ? <h1>Loading...</h1> : null}
        </>
    );
};

export default StartRegisterCard;
