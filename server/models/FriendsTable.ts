export type FriendStatus = 'Friends' | 'Pending' | 'InviteSended' | null;
interface FindFriend extends FriendInvite {
    additionalStatus: 'InviteSended' | null
};

export default interface FriendsTable {
    id: string;
    first_id: string;
    second_id: string;
    status: FriendStatus;
}

export interface FriendsProfile {
    id: string;
    username: string;
    avatar: string | null;
    last_online: string | null;
}

export interface FriendsResponse {
    friendsList: Array<Friend>;
    invitesList: Array<FriendInvite>;
}

export interface Friend {
    id: string;
    username: string;
    avatar: string | null;
    last_online: string | null;
}

export interface FriendInvite {
    id: string;
    username: string;
    avatar: string | null;
}

export interface FriendFindResponse {
    friends: Friend[];
    invites: FriendInvite[];
    finded: FindFriend[];
}

export type RelationTypeMap = Map<string, FriendStatus>;
