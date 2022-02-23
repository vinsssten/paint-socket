import { FriendsResponse } from "./FriendsResponse";


export type FullSelfProfilePromise = [SelfProfileResponse, FriendsResponse]

export interface FullSelfProfile {
    profile: SelfProfileResponse,
    friends: FriendsResponse
}

export interface SelfProfileResponse {
    login: string;
    username: string;
    avatar: null | string;
    createDate: string;
}
