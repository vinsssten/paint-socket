import React, { FC } from 'react';
import SignInInput from '../Inputs/SignInInput';
import ButtonLoginPage from './ButtonLoginPage';
import stl from './LoginPage.scss';

interface Props {
    setIsRegister: React.Dispatch<React.SetStateAction<Boolean>>;
}

const RegisterCard: FC<Props> = ({ setIsRegister }) => {

    function changeCard () {
        setIsRegister(false)
    }

    return (
        <div>
            <div className={stl.cardContainer}>
            <h1 className={stl.textHead}>Sign up</h1>
            <div className={stl.inputContainer}>
                <SignInInput placeholder='Login' isSecure={false} />
                <SignInInput placeholder='Nickname' isSecure={false} />
                <SignInInput placeholder='Password' isSecure={true} />
                <SignInInput placeholder='Repeat password' isSecure={true} />
            </div>
            <ButtonLoginPage text='Sign in'/>
            <p onClick={changeCard} className={stl.textAdditional}>Go back to login</p>
        </div>
        </div>
    )
}

export default RegisterCard