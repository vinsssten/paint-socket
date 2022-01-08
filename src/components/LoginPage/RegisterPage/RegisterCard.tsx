import React, { FC, useState } from 'react';
import EmptyCard from '../../Cards/EmptyCard';
import SignInInput from '../../Inputs/SignInInput';
import WarningListCard from '../../Cards/WarningCards/WarningListCard';
import ButtonLoginPage from '../../Buttons/ButtonLoginPage';
import stl from '../LoginPage.scss';
import { Link } from 'react-router-dom';

interface Props {
    
}

export interface InputProps {
    placeholder?: string;
    isSecure: boolean;
    value: string;
    inputHandle: React.Dispatch<React.SetStateAction<string>>;
}

//TODO: Need to refactor
const RegisterCard: FC<Props> = ({  }) => {
    const [login, setLogin] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rpassword, setRPassword] = useState<string>('');

    const [isVisibleWarningCard, setIsVisibleWarningCard] = useState<boolean>(false);

    const inputsArray: InputProps[] = [
        { placeholder: 'Login', isSecure: false, value: login, inputHandle: setLogin },
        { placeholder: 'Username',isSecure: false, value: username,inputHandle: setUsername, },
        { placeholder: 'Password', isSecure: true, value: password, inputHandle: setPassword,},
        { placeholder: 'Repeat password', isSecure: true, value: rpassword, inputHandle: setRPassword},
    ];


    function handleRegister () {
        if (login != '' && username !== '' && password != '' && rpassword != '') {
            if (login.length < 5 || username.length < 4 || password.length < 6 || rpassword != rpassword) {
                setIsVisibleWarningCard(true);
            } else {
                console.log('register');
            }

        } else {
            setIsVisibleWarningCard(true);
        }
    }

    return (
        <EmptyCard>
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
                <Link className={stl.textAdditional} to='/signin'>Go to login</Link>
            </div>
        </EmptyCard>
    );
};

export default RegisterCard;
