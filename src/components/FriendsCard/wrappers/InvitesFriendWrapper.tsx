import React, { FC } from 'react';
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';
import FriendWrapperLayout from './FriendWrapperLayout';

interface Props {
    id: string;
    avatar: string | null;
    username: string;
}

const InvitesFriendWrapper: FC<Props> = ({ id, avatar, username }) => {
    return (
        <FriendWrapperLayout
            leftContainer={
                <>
                    <FriendAvatar avatarPath={avatar} />
                    <div className={stl.infoContainer}>
                        <h2>{username}</h2>
                    </div>
                </>
            }
        />
    );
};

export default InvitesFriendWrapper;
