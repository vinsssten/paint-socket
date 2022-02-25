import { Axios, AxiosResponse } from 'axios';
import api from '..';
import {
    FriendsResponse,
    FindFriendsResponse,
} from '../../models/Response/FriendsResponse';

import { SelfProfileResponse } from '../../models/Response/SelfProfileResponse';

const url = 'http://localhost:8080/api';

class FriendsService {
    static async getFriendsList(): Promise<AxiosResponse<FriendsResponse>> {
        return api.get<FriendsResponse>('/friends/getfriends');
    }

    static async findFriends(
        username: string,
    ): Promise<AxiosResponse<FindFriendsResponse>> {
        return api.post<FindFriendsResponse>('/friends/findfriend', { username });
    }

    static async sendInvite (id: string): Promise<AxiosResponse<any>> {
        return api.post<any>('/friends/sendinvite', { id })
    }

    static async acceptInvite (id: string): Promise<AxiosResponse<any>> {
        return api.post<any>('/friends/sendinvite', { id })
    }

    static async discardInvite (id: string): Promise<AxiosResponse<any>> {
        return api.post<any>('/friends/sendinvite', { id })
    } 
}

export default FriendsService;
