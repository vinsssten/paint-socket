import React, { ChangeEventHandler, FC, ReactEventHandler } from 'react';
import { InputProps } from '../LoginPage/RegisterPage/RegisterCard';
import stl from './Inputs.scss';

const SignInInput: FC<InputProps> = ({ placeholder, isSecure, value, inputHandle }) => {
    function changeHandle(event: React.FormEvent<HTMLInputElement>) {
        if (event.nativeEvent.data === ' ') {
            event.preventDefault();
            console.log('space pressed');
        }
        inputHandle(event.currentTarget.value);
    }

    return (
        <input
            className={stl.authInput}
            type={isSecure ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={changeHandle}
            value={value}
        />
    );
};

export default SignInInput;
