import { Axios, AxiosResponse } from 'axios';
import api from '..';

import { SelfProfileResponse } from '../../models/Response/SelfProfileResponse';

const url = 'http://localhost:8080/api';

class UserService {
    static async getSelfProfile(): Promise<AxiosResponse<SelfProfileResponse>> {
        return api.get<SelfProfileResponse>('/user/selfprofile');
    }
}

export default UserService;
