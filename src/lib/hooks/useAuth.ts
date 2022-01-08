import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../..";
import { setAuth } from "../../store/actionCreators/authActionCreators";
import AuthService from "../axios/services/AuthService";


function useAuth () {
    const { isAuth } = useAppSelector(store => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [])


    async function login (login: string, password: string) {
        try {
            const response = await AuthService.login(login, password);
            console.log('login response', response)
            localStorage.setItem('token', response.data.accessToken);
            dispatch(setAuth(true));
        } catch (error) {
            console.log('auth error', error)
        }
    }

    return {isAuth, login}
}

export default useAuth