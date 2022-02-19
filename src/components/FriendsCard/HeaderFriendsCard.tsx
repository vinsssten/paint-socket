import React, { FC } from 'react'
import InvitesToggleButton from '../Buttons/InvitesToggleButton'
import FindFriendInput from '../Inputs/FindFriendInput'
import stl from './FriendsCard.scss'

interface Props {
    toggleLists(): void 
    findDispatcher: React.Dispatch<React.SetStateAction<string>>
}

const HeaderFriendsCard: FC<Props> = ({ toggleLists, findDispatcher }) => {
    return (
        <div className={stl.containerHeader}>
            <h1 className={stl.headingText}>Friends</h1>
            <FindFriendInput findDispatcher={findDispatcher}/>
            <InvitesToggleButton onClick={toggleLists}/>
        </div>
    )
}

export default HeaderFriendsCard