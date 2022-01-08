import { AxiosError } from 'axios';
import { useState } from 'react';
import { useAppSelector } from '../..';
import AuthService from '../axios/services/AuthService';

function useRegister() {
    const { isAuth } = useAppSelector(store => store.auth);
    const [registerMessage, setRegisterMessage] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function registration(login: string, username: string, password: string) {
        setIsLoading(true);
        AuthService.registration(login, username, password)
            .then(response => {
                setIsSuccess(true);
                setRegisterMessage(response.data.message);
                setIsLoading(false);
            })
            .catch((error: AxiosError) => {
                setRegisterMessage(error.response!.data.message);
                setIsLoading(false);
            });
    }

    return { isAuth, registerMessage, isSuccess, isLoading, registration };
}

export default useRegister;
