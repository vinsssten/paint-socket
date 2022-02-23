import React, { FC } from 'react';
import stl from './FriendsCard.scss';
import { FriendInvite } from '../../lib/models/Response/FriendsResponse';
import InvitesFriendWrapper from './wrappers/InvitesFriendWrapper';
import SectionFriends from './SectionFriends';

interface Props {
    isShow: boolean;
    list?: FriendInvite[];
}

const InvitesList: FC<Props> = ({ isShow, list }) => {
    if (isShow) {
        return (
            <SectionFriends sectionHeading={'Incoming'}>
                {list?.length === 0 ? <h3>There is no incoming requests</h3> : null}
                {list?.map((value, index) => (
                    <InvitesFriendWrapper
                        id={value.id}
                        avatar={value.avatar}
                        username={value.username}
                        key={index}
                    />
                ))}
            </SectionFriends>
        );
    } else return <></>;
};

export default InvitesList;
