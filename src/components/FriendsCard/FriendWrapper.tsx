import React, { FC } from 'react'
import FriendAvatar from './FriendAvatar'
import stl from './FriendsCard.scss'

interface Props {
    avatar: string | null,
    username: string,
    isIncoming: boolean
}

const FriendWrapper: FC<Props> = ({ avatar, username }) => {
    return (
        <div className={stl.friendContainer}>
            <FriendAvatar avatarPath={avatar} />
            <h2>{username}</h2>
        </div>
    )
}

export default FriendWrapper