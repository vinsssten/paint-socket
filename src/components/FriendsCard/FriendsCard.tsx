import React, { FC } from 'react'
import useUserProfile from '../../lib/hooks/useUserProfile'
import stl from './FriendsCard.scss'
import FriendsList from './FriendsList';

interface Props {

}

const FriendsCard: FC<Props> = ({  }) => {
    const { getFriendsList } = useUserProfile();

    return (
        <div className={stl.mainContainer}>
            <h1 className={stl.headingText}>Friends</h1>
            <FriendsList list={getFriendsList().friendsList}/>
        </div>
    )
}

export default FriendsCard