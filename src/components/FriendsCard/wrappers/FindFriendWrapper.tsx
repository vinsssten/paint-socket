import React, { FC } from 'react';
import AddFindFriendButton from '../../Buttons/AddFindFriendButton';
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';
import FriendWrapperLayout from './FriendWrapperLayout';

interface Props {
    id: string;
    username: string;
    avatar: string | null;
}

const FindFriendWrapper: FC<Props> = ({ id, avatar, username }) => {
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
            rightContainer={
                <>
                    <AddFindFriendButton id={id} isSendInvite={false}/>
                </>
            }
        />
    );
};

export default FindFriendWrapper;
