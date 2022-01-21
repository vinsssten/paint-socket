import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import AuthService from './services/AuthService';

export const url = 'http://localhost:8080/api';

const api = axios.create({
    withCredentials: true,
    baseURL: url,
});

api.interceptors.request.use(config => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

api.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        try {
            if (error.response!.status === 401) {
                console.log('refresh request');
                const response = await AuthService.refresh();
                localStorage.setItem('token', response.data.accessToken);
            }
        } catch (error) {
            console.log('refresh interceptor error', error);
            throw error;
        }
    },
);

export default api;
