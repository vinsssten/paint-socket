import React, { FC } from 'react'
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';

interface Props {
    id: string
    username: string
    avatar: string | null
}

const FindFriendWrapper: FC<Props> = ({ avatar, username }) => {
    return (
        <div className={stl.friendContainer}>
            <FriendAvatar avatarPath={avatar} />
            <div className={stl.infoContainer}>
                <h2>{username}</h2>
            </div>
        </div>
    )
}

export default FindFriendWrapper