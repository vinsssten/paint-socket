import React, { FC } from 'react'
import stl from '../FriendsCard.scss'

interface Props {
    leftContainer: JSX.Element
    rightContainer?: JSX.Element
}

const FriendWrapperLayout: FC<Props> = ({ leftContainer, rightContainer }) => {
    return (
        <div className={stl.friendContainer}>
            <div className={stl.firstContainer}>
                {leftContainer}
            </div>
            <div>
                {rightContainer}
            </div>
        </div>
    )
}

export default FriendWrapperLayout