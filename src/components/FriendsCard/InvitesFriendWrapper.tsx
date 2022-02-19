import React, { FC } from 'react'
import FriendAvatar from './FriendAvatar'
import stl from './FriendsCard.scss'
import { FriendInvite } from '../../lib/models/Response/FriendsResponse';

interface Props {
    id: string
    avatarPath: string | null
    username: string
}

const InvitesFriendWrapper: FC<Props> = ({ id, avatarPath, username }) => {
    return (
        <div className={stl.friendContainer}>
            <FriendAvatar avatarPath={avatarPath} />
            <div className={stl.infoContainer}>
                <h2>{username}</h2>
            </div>
        </div>
    )
}

export default InvitesFriendWrapper