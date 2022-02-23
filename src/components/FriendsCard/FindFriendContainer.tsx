import React, { FC } from 'react';
import { FindFriendsResponse } from '../../lib/models/Response/FriendsResponse';
import FriendsList from './FriendsList';
import InvitesList from './InvitesList';
import SectionFriends from './SectionFriends';
import InvitesFriendWrapper from './wrappers/InvitesFriendWrapper';

interface Props {
    findResponse: FindFriendsResponse;
}

const FindFriendContainer: FC<Props> = ({ findResponse }) => {
    return (
        <>
            {findResponse.friends.length > 0 ? (
                <FriendsList list={findResponse.friends} headingShow={true} />
            ) : null}

            {findResponse.invites.length > 0 ? (
                <InvitesList list={findResponse.invites} isShow={true} />
            ) : null}

            <SectionFriends sectionHeading="Query results">
                {findResponse.finded.length === 0 ? (
                    <h3>No matches were found, or the search query is too small</h3>
                ) : null}
                {findResponse.finded.map((value, index) => (
                    <InvitesFriendWrapper {...value} key={index} />
                ))}
            </SectionFriends>
        </>
    );
};

export default FindFriendContainer;
