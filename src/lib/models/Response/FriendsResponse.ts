export interface FriendsResponse {
    friendsList: Array<Friend>;
    invitesList: Array<FriendInvite>;
}

export interface Friend {
    id: string;
    username: string;
    avatar: string | null;
    lastOnline: string | null;
}

export interface FriendInvite {
    id: string;
    username: string;
    avatar: string | null;
}

export interface FindedFriend extends FriendInvite {
    additionalStatus: 'InviteSended' | null
}

export interface FindFriendsResponse {
    finded: FindedFriend[];
    friends: Friend[];
    invites: FriendInvite[];
}
