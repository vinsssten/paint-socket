import React, { FC } from 'react'
import stl from './ProfileCard.scss'

interface Props {

}

const ProfileCard: FC<Props> = ({  }) => {
    return (
        <div className={stl.cardContainer}>
            <div className={stl.container}>
                <h1>Profile card</h1>
            </div>
        </div>
    )
}

export default ProfileCard