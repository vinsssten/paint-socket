import React, { FC } from 'react';
import emptyAvatar from '../../../public/icons/Profile/empty_avatar.png';
import stl from './FriendsCard.scss';

interface Props {
    avatarPath: string | null;
}

const FriendAvatar: FC<Props> = ({ avatarPath }) => {
    return (
        <div className={stl.imageContainer}>
            <img src={avatarPath ?? emptyAvatar} />
        </div>
    );
};

export default FriendAvatar;
