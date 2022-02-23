import React, { FC } from 'react';
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';

interface Props {
    avatar: string | null;
    username: string;
    lastOnline: string | null;
}

const FriendWrapper: FC<Props> = ({ avatar, username, lastOnline }) => {
    return (
        <div className={stl.friendContainer}>
            <FriendAvatar avatarPath={avatar} />
            <div className={stl.infoContainer}>
                <h2>{username}</h2>
                <h3>Last online: {lastOnline}</h3>
            </div>
        </div>
    );
};

export default FriendWrapper;
