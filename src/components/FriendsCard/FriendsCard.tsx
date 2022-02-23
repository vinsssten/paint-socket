import React, { FC, useState } from 'react';
import useUserProfile from '../../lib/hooks/useUserProfile';
import InvitesToggleButton from '../Buttons/InvitesToggleButton';
import FindFriendInput from '../Inputs/FindFriendInput';
import stl from './FriendsCard.scss';
import FriendsList from './FriendsList';
import HeaderFriendsCard from './HeaderFriendsCard';
import InvitesList from './InvitesList';
import { FriendsResponse } from '../../lib/models/Response/FriendsResponse';
import useFriends from '../../lib/hooks/authHooks/useFriends';

interface Props {
    friends: FriendsResponse;
}

const FriendsCard: FC<Props> = ({ friends }) => {
    const { findFriend } = useFriends();
    const [isShowInvites, setIsShowInvites] = useState<boolean>(false);
    const [findValue, setFindValue] = useState<string>('');

    function toggleLists() {
        setIsShowInvites(!isShowInvites);
    }

    async function findFriendHandle (username: string) {
        const response = await findFriend(username);
        console.log(response);
    }

    return (
        <div className={stl.mainContainer}>
            <HeaderFriendsCard findDispatcher={findFriendHandle} toggleLists={toggleLists} />
            <InvitesList isShow={isShowInvites} list={friends.invitesList} />
            <FriendsList findValue={findValue} list={friends.friendsList} />
        </div>
    );
};

export default FriendsCard;
