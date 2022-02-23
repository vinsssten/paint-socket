import React, { FC, useState } from 'react';
import useFriends from '../../lib/hooks/authHooks/useFriends';
import { FriendsResponse } from '../../lib/models/Response/FriendsResponse';
import FindFriendContainer from './FindFriendContainer';
import stl from './FriendsCard.scss';
import FriendsList from './FriendsList';
import HeaderFriendsCard from './HeaderFriendsCard';
import InvitesList from './InvitesList';

interface Props {
    friends: FriendsResponse;
}

const FriendsCard: FC<Props> = ({ friends }) => {
    const { findResult, findFriend } = useFriends();
    const [isShowInvites, setIsShowInvites] = useState<boolean>(false);

    function toggleLists() {
        setIsShowInvites(!isShowInvites);
    }

    async function findFriendHandle(username: string) {
        const response = await findFriend(username);
        console.log(response);
    }

    return (
        <div className={stl.mainContainer}>
            <HeaderFriendsCard
                findDispatcher={findFriendHandle}
                toggleLists={toggleLists}
            />

            {findResult ? (
                <FindFriendContainer findResponse={findResult} />
            ) : (
                <>
                    <FriendsList list={friends.friendsList} headingShow={false} />
                    <InvitesList isShow={isShowInvites} list={friends.invitesList} />
                </>
            )}
        </div>
    );
};

export default FriendsCard;
