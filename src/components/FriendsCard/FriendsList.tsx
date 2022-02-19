import React, { FC } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';
import FriendWrapper from './FriendWrapper';

interface Props {
    list: Friend[];
    findValue: string
}

const FriendsList: FC<Props> = ({ list, findValue }) => {
    return (
        <div className={stl.friendsListContainer}>
            {list.map((value, index) => (
                <FriendWrapper avatar={value.avatar} username={value.username} lastOnline={value.lastOnline} isIncoming={false}/>
            ))}
        </div>
    );
};

export default FriendsList;
