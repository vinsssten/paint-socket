import React, { FC } from 'react'
import stl from './LoginPage.scss'

interface Props {
    text: string
}

const ButtonLoginPage: FC<Props> = ({ text }) => {
    return (
        <div className={stl.mainButton}>
            {text}
        </div>
    )
}

export default ButtonLoginPage