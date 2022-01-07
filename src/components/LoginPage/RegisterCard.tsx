import React, { FC, useState } from 'react';
import SignInInput from '../Inputs/SignInInput';
import ButtonLoginPage from './ButtonLoginPage';
import stl from './LoginPage.scss';

interface Props {
    setIsRegister: React.Dispatch<React.SetStateAction<Boolean>>;
}

export interface InputProps {
    placeholder?: string;
    isSecure: boolean;
    value: string;
    inputHandle: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterCard: FC<Props> = ({ setIsRegister }) => {
    const [login, setLogin] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rpassword, setRPassword] = useState<string>('');

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

    function changeCard() {
        setIsRegister(false);
    }

    return (
        <div>
            <div className={stl.cardContainer}>
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
                <ButtonLoginPage text="Sign in" action={() => {}} />
                <p onClick={changeCard} className={stl.textAdditional}>
                    Go back to login
                </p>
            </div>
        </div>
    );
};

export default RegisterCard;
