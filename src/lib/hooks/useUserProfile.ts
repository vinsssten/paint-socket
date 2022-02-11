import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../..';
import UserService from '../axios/services/UserService';
import { loadAllUserProfile } from '../store/actionCreators/userActionCreators';

function useUserProfile() {
    const { username, avatar, createDate, isLoading } = useAppSelector(
        state => state.user,
    );
    const dispatch = useDispatch();

    async function getUserProfile() {
        UserService.getFullSelfProfile()
            .then(response => {
                const { username, avatar, createDate } = response.data;
                dispatch(loadAllUserProfile(username, createDate, avatar));
            })
            .catch(error => {
                console.log('error while load user profile:', error);
            });
    }

    return { username, avatar, createDate, isLoading, getUserProfile };
}

export default useUserProfile;
