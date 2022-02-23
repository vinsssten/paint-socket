import React, { FC, useEffect, useState } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';
import FriendWrapper from './wrappers/FriendWrapper';
import SectionFriends from './SectionFriends';

interface Props {
    list: Friend[];
    headingShow: boolean
}

const FriendsList: FC<Props> = ({ list, headingShow }) => {
    return (
        <SectionFriends sectionHeading={headingShow ? 'Friends' : undefined}>
            {list.length === 0 ? <h2>You don't have any friends yet, but you can easily find them by using the search</h2> : null}
            {list.map((value, index) => 
                <FriendWrapper {...value} key={index} />
            )}
        </SectionFriends>
    );
};

export default FriendsList;
