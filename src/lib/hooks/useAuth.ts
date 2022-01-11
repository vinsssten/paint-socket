import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../..';
import { setAuth, setIsAuthLoading } from '../../store/actionCreators/authActionCreators';
import AuthService from '../axios/services/AuthService';

//Move isAuthLoading and access validation in separate hook
function useAuth() {
    const { isAuth, isAuthLoading } = useAppSelector(store => store.auth);
    const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthLoading) {
            isValidAccess();
        } 
    }, []);

    async function isValidAccess() {
        console.log('IsValidAccess')
        AuthService.validateAccess()
            .then(() => {
                console.log('access allowed')
                dispatch(setAuth(true));
                dispatch(setIsAuthLoading(false));
            })
            .catch(() => {
                console.log('access denied')
                dispatch(setAuth(false));
                dispatch(setIsAuthLoading(false));
            })
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
            .then(response => {
                dispatch(setAuth(false));
                localStorage.removeItem('token');
            })
            .catch(error => {console.log('logout err', error)});
    }

    return { isAuth, isAuthLoading, login, loginErrorMessage, logout };
}

export default useAuth;
