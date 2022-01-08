import { Axios, AxiosResponse } from "axios";
import api from ".."
import { LoginResponse } from "../../models/Response/AuthResponse";

class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        return api.post<LoginResponse>('/auth/login', {login, password})
    }

    static async registration(login: string, username: string, password: string): Promise<AxiosResponse> {
        return api.post<LoginResponse>('/auth/registration', {login, username, password})
    }

    static async logout(): Promise<AxiosResponse> {
        return api.post('/auth/logout')
    }
}

export default AuthService