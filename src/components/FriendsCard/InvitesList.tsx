import React, { FC } from 'react';
import stl from './FriendsCard.scss';
import { FriendInvite } from '../../lib/models/Response/FriendsResponse';
import InvitesFriendWrapper from './wrappers/InvitesFriendWrapper';

interface Props {
    isShow: boolean;
    list?: FriendInvite[];
}

const InvitesList: FC<Props> = ({ isShow, list }) => {
    if (isShow) {
        return (
            <div className={stl.invitesContainer}>
                {list?.length === 0 ? <h2>There is no incoming requests</h2> : null}
                {list?.map((value, index) => (
                    <InvitesFriendWrapper
                        id={value.id}
                        avatarPath={value.avatar}
                        username={value.username}
                        key={index}
                    />
                ))}
            </div>
        );
    } else return <></>;
};

export default InvitesList;
