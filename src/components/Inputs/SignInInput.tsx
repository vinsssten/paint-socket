import React, { FC } from 'react'
import stl from './Inputs.scss'

interface Props {
    placeholder?: string
    isSecure: boolean
}

const SignInInput: FC<Props> = ({ placeholder, isSecure }) => {
    return (
        <input className={stl.authInput} 
            type={isSecure ? 'password' : 'text'}
            placeholder={placeholder}
        />
    )
}

export default SignInInput