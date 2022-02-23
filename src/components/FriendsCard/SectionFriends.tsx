import React, { FC } from 'react'
import stl from './FriendsCard.scss'

interface Props {
    sectionHeading?: string
}

const SectionFriends: FC<Props> = ({ sectionHeading, children }) => {
    return (
        <div className={stl.friendsListContainer}>
            <h2>{sectionHeading}</h2>
            {children}
        </div>
    )
}

export default SectionFriends