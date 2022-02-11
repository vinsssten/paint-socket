import React, { FC } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';
import FriendWrapper from './FriendWrapper';

interface Props {
    list: Friend[];
}

const FriendsList: FC<Props> = ({ list }) => {
    return (
        <div className={stl.friendsListContainer}>
            {list.map((value, index) => (
                <FriendWrapper avatar={value.avatar} username={value.username} isIncoming={false}/>
            ))}
        </div>
    );
};

export default FriendsList;
