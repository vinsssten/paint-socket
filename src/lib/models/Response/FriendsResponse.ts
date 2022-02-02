export interface FriendsResponse {
    friendsList: Array<Friend>;
    invitesList: Array<Friend>;
}

export interface Friend {
    id: string;
    username: string;
    avatar: string | null;
}
