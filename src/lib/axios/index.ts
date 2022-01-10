import axios, { AxiosError, AxiosResponse } from 'axios';
import AuthService from './services/AuthService';

const url = 'http://localhost:8080/api';

const api = axios.create({
    withCredentials: false,
    baseURL: url,
});

api.interceptors.request.use(config => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

api.interceptors.response.use(() => {}, async (error: AxiosError) => {
    try {
        if (error.response!.status === 400) {
            const response = await AuthService.refresh();
            localStorage.setItem('token', response.data.accessToken);
        }
    } catch (error) {
        console.log('interceptor refresh errro', error)
    }
})

export default api;
