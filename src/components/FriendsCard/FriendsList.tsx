import React, { FC } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';

interface Props {
    list: Friend[];
}

const FriendsList: FC<Props> = ({ list }) => {
    return (
        <div className={stl.friendsListContainer}>
            {list.map((value, index) => (
                <div key={index} className={stl.friendContainer}>
                    <FriendAvatar avatarPath={value.avatar} />
                    <h2>{value.username}</h2>
                </div>
            ))}
        </div>
    );
};

export default FriendsList;
