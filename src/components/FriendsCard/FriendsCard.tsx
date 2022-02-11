import React, { FC } from 'react';
import useUserProfile from '../../lib/hooks/useUserProfile';
import FindFriendInput from '../Inputs/FindFriendInput';
import stl from './FriendsCard.scss';
import FriendsList from './FriendsList';

interface Props {}

const FriendsCard: FC<Props> = ({}) => {
    const { getFriendsList } = useUserProfile();

    return (
        <div className={stl.mainContainer}>
            <div className={stl.containerHeader}>
                <h1 className={stl.headingText}>Friends</h1>
                <FindFriendInput />
            </div>
            <FriendsList list={getFriendsList().friendsList} />
        </div>
    );
};

export default FriendsCard;
