import axios, { AxiosResponse } from 'axios';
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

api.interceptors.response.use(() => {}, async () => {
    try {
        const response = await AuthService.refresh();
        localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
        console.log('interceptor refresh errro', error)
    }
})

export default api;
