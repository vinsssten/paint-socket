import React, { FC, useEffect, useState } from 'react';
import SignInInput from '../Inputs/SignInInput';
import WarningListCard from '../WarningCards/WarningListCard';
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

//TODO: Need to refactor
const RegisterCard: FC<Props> = ({ setIsRegister }) => {
    const [login, setLogin] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rpassword, setRPassword] = useState<string>('');

    const [isVisibleWarningCard, setIsVisibleWarningCard] = useState<boolean>(false);
    const [warningsHeader, setWarningsHeader] = useState<string>('');
    const [warningsList, setWarningsList] = useState<string[]>([]);

    const inputsArray: InputProps[] = [
        { placeholder: 'Login', isSecure: false, value: login, inputHandle: setLogin },
        { placeholder: 'Username',isSecure: false, value: username,inputHandle: setUsername, },
        { placeholder: 'Password', isSecure: true, value: password, inputHandle: setPassword,},
        { placeholder: 'Repeat password', isSecure: true, value: rpassword, inputHandle: setRPassword},
    ];


    function handleRegister () {
        if (login != '' && username !== '' && password != '' && rpassword != '') {
            setWarningsHeader('');
            if (login.length < 5 || username.length < 4 || password.length < 6 || rpassword != rpassword) {
                setIsVisibleWarningCard(true);
            } else {
                console.log('register');
            }

        } else {
            setWarningsHeader('All fields must be filled in!');
            setIsVisibleWarningCard(true);
        }
    }

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
                <WarningListCard isVisible={isVisibleWarningCard} preset='RegistrationFields'/>
                <ButtonLoginPage text="Sign in" action={handleRegister} />
                <p onClick={changeCard} className={stl.textAdditional}>
                    Go back to login
                </p>
            </div>
        </div>
    );
};

export default RegisterCard;
