import React, { FC } from 'react'
import { FriendInvite } from '../../lib/models/Response/FriendsResponse';

interface Props {
    isShow: boolean
    list: FriendInvite[]
}

const InvitesWrapper: FC<Props> = ({ isShow, list }) => {
    return (
        <div>
            {isShow ?
            <></>  
            : null}
        </div>
    )
}

export default InvitesWrapper