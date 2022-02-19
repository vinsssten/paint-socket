import React, { FC, useEffect, useState } from 'react';
import stl from './FriendsCard.scss';
import { Friend } from '../../lib/models/Response/FriendsResponse';
import FriendAvatar from './FriendAvatar';
import FriendWrapper from './FriendWrapper';

interface Props {
    list: Friend[];
    findValue: string
}

const FriendsList: FC<Props> = ({ list, findValue }) => {

    function renderWithFilter (value: Friend, checkString: string, key: number): JSX.Element | undefined {
        if (value.username.includes(checkString)) {
            return <FriendWrapper 
                {...value}
                key={key}
            />
        } else {
            return undefined
        }
    }

    return (
        <div className={stl.friendsListContainer}>
            {list.map((value, index) => { 
                if (findValue !== '') {
                    return renderWithFilter(value, findValue, index)
                } else return <FriendWrapper 
                    {...value} 
                    key={index}
                />
            }
            )}
        </div>
    );
};

export default FriendsList;
