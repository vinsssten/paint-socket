import React, { FC } from 'react'
import InvitesToggleButton from '../Buttons/InvitesToggleButton'
import FindFriendInput from '../Inputs/FindFriendInput'
import stl from './FriendsCard.scss'

interface Props {
    toggleLists(): void 
}

const HeaderFriendsCard: FC<Props> = ({ toggleLists }) => {
    return (
        <div className={stl.containerHeader}>
                <h1 className={stl.headingText}>Friends</h1>
                <FindFriendInput />
                <InvitesToggleButton onClick={toggleLists}/>
        </div>
    )
}

export default HeaderFriendsCard