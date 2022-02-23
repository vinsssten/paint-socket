import React, { FC } from 'react';
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';
import FriendWrapperLayout from './FriendWrapperLayout';

interface Props {
    avatar: string | null;
    username: string;
    lastOnline: string | null;
}

const FriendWrapper: FC<Props> = ({ avatar, username, lastOnline }) => {
    return (
        <FriendWrapperLayout
            leftContainer={
                <>
                    <FriendAvatar avatarPath={avatar} />
                    <div className={stl.infoContainer}>
                        <h2>{username}</h2>
                        <h3>Last online: {lastOnline}</h3>
                    </div>
                </>
            }
        />
    );
};

export default FriendWrapper;
