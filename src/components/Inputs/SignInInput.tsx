import React, { ChangeEventHandler, FC } from 'react'
import { InputProps } from '../LoginPage/RegisterCard';
import stl from './Inputs.scss'

const SignInInput: FC<InputProps> = ({ placeholder, isSecure, value, inputHandle }) => {
    function changeHandle (event: any) {
        inputHandle(event.target.value);
    }

    return (
        <input className={stl.authInput} 
            type={isSecure ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={changeHandle}
            value={value}
        />
    )
}

export default SignInInput