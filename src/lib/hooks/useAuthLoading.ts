import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../..";
import { setAuth, setIsAuthLoading } from "../../store/actionCreators/authActionCreators";
import AuthService from "../axios/services/AuthService";

function useAuthLoading () {
    const { isAuthLoading } = useAppSelector(store => store.auth);
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

    return {isAuthLoading}

}

export default useAuthLoading