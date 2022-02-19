import React, { FC } from 'react'

interface Props {
    isShow: boolean
}

const InvitesWrapper: FC<Props> = ({ isShow: isShowInvites }) => {
    return (
        <div>
            {isShowInvites ? <h1>Invites</h1> : null}
        </div>
    )
}

export default InvitesWrapper