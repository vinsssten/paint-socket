import React, { FC, useEffect, useState } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';
import FriendWrapper from './wrappers/FriendWrapper';

interface Props {
    list: Friend[];
}

const FriendsList: FC<Props> = ({ list }) => {
    return (
        <div className={stl.friendsListContainer}>
            {list.length === 0 ? <h2>You don't have any friends yet, but you can easily find them by using the search</h2> : null}
            {list.map((value, index) => 
                <FriendWrapper {...value} key={index} />
            )}
        </div>
    );
};

export default FriendsList;
