import React, { FC } from 'react';
import FriendAvatar from '../FriendAvatar';
import stl from '../FriendsCard.scss';
import FriendWrapperLayout from './FriendWrapperLayout';

interface Props {
    id: string;
    username: string;
    avatar: string | null;
}

const FindFriendWrapper: FC<Props> = ({ avatar, username }) => {
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
            rightContainer={<h1>hello</h1>}
        />
    );
};

export default FindFriendWrapper;
