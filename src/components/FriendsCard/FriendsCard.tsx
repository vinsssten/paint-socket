import React, { FC, useState } from 'react';
import useUserProfile from '../../lib/hooks/useUserProfile';
import FindFriendInput from '../Inputs/FindFriendInput';
import stl from './FriendsCard.scss';
import FriendsList from './FriendsList';
import InvitesToggleButton from '../Buttons/InvitesToggleButton';

interface Props {}

const FriendsCard: FC<Props> = ({}) => {
    const { getFriendsList } = useUserProfile();
    const [isShowInvites, setIsShowInvites] = useState<boolean>(false);

    function toggleLists () {
        setIsShowInvites(!isShowInvites)
    }

    return (
        <div className={stl.mainContainer}>
            <div className={stl.containerHeader}>
                <h1 className={stl.headingText}>Friends</h1>
                <FindFriendInput />
                <InvitesToggleButton onClick={toggleLists}/>
            </div>
            {isShowInvites ? <h1>Invites</h1> : null}
            <FriendsList list={getFriendsList().friendsList} />
        </div>
    );
};

export default FriendsCard;
