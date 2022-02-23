import { Axios, AxiosResponse } from 'axios';
import api from '..';
import { FriendsResponse, FindFriendsResponse } from '../../models/Response/FriendsResponse';

import { SelfProfileResponse } from '../../models/Response/SelfProfileResponse';

const url = 'http://localhost:8080/api';

class FriendsService {
    static async getFriendsList(): Promise<AxiosResponse<FriendsResponse>> {
        return api.get<FriendsResponse>('/friends/getfriends');
    }

    static async findFriends(username: string): Promise<AxiosResponse<FindFriendsResponse>> {
        return api.post<FindFriendsResponse>('/friends/findfriend', {username});
    }
}

export default FriendsService;
