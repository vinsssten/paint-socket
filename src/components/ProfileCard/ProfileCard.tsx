import React, { FC } from 'react'
import useAuth from '../../lib/hooks/authHooks/useAuth'
import ButtonLoginPage from '../Buttons/ButtonLoginPage'
import stl from './ProfileCard.scss'

interface Props {

}

const ProfileCard: FC<Props> = ({  }) => {
    const {logout} = useAuth();

    return (
        <div className={stl.cardContainer}>
            <div className={stl.container}>
                <h1>Profile card</h1>
                <ButtonLoginPage text='Logout' action={logout} />
            </div>
        </div>
    )
}

export default ProfileCard