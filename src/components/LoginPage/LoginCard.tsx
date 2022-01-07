import React, { FC } from 'react'
import SignInInput from '../Inputs/SignInInput'
import ButtonLoginPage from './ButtonLoginPage'
import stl from './LoginPage.scss'

interface Props {

}

const LoginCard: FC<Props> = ({  }) => {
    return (
        <div className={stl.cardContainer}>
            <h1 className={stl.textHead}>Sign in</h1>
            <div className={stl.inputContainer}>
                <SignInInput placeholder='Login' isSecure={false} />
                <SignInInput placeholder='Password' isSecure={true} />
            </div>
            <ButtonLoginPage text='Sign in'/>
            <p className={stl.textAdditional}>Registration</p>
        </div>
    )
}

export default LoginCard