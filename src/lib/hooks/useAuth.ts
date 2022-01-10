import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../..';
import { setAuth } from '../../store/actionCreators/authActionCreators';
import AuthService from '../axios/services/AuthService';

function useAuth() {
    const { isAuth } = useAppSelector(store => store.auth);
    const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
    const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        isValidAccess();
    }, []);

    async function isValidAccess() {
        // dispatch(setAuth(true));
    }

    async function login(login: string, password: string) {
        AuthService.login(login, password)
            .then(response => {
                console.log('login response', response);
                localStorage.setItem('token', response.data.accessToken);
                dispatch(setAuth(true));
            })
            .catch((error: AxiosError) => {
                if (error.response?.status === 400) {
                    setLoginErrorMessage(error.response.data.message);
                } else {
                    setLoginErrorMessage('Auth server is not responding, please, try later')
                }
            });
    }

    async function logout() {
        AuthService.logout()
            .then(response => {})
            .catch(error => {});
    }

    return { isAuth, login, loginErrorMessage };
}

export default useAuth;
