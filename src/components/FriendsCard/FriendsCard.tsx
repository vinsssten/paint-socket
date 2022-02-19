import React, { FC, useState } from 'react';
import useUserProfile from '../../lib/hooks/useUserProfile';
import FindFriendInput from '../Inputs/FindFriendInput';
import stl from './FriendsCard.scss';
import FriendsList from './FriendsList';
import InvitesToggleButton from '../Buttons/InvitesToggleButton';
import InvitesWrapper from './InvitesWrapper';
import HeaderFriendsCard from './HeaderFriendsCard';

interface Props {}

const FriendsCard: FC<Props> = ({}) => {
    const { getFriendsList } = useUserProfile();
    const [isShowInvites, setIsShowInvites] = useState<boolean>(false);
    const [findValue, setFindValue] = useState<string>('')

    function toggleLists () {
        setIsShowInvites(!isShowInvites)
    }

    return (
        <div className={stl.mainContainer}>
            <HeaderFriendsCard findDispatcher={setFindValue} toggleLists={toggleLists}/>
            <InvitesWrapper isShow={isShowInvites} list={getFriendsList().invitesList} />
            <FriendsList findValue={findValue} list={getFriendsList().friendsList} />
        </div>
    );
};

export default FriendsCard;
