import { useDispatch } from 'react-redux';
import { useAppSelector } from '../..';
import UserService from '../axios/services/UserService';
import { FriendsResponse } from '../models/Response/FriendsResponse';
import {
    SelfProfileResponse,
    FullSelfProfilePromise,
    FullSelfProfile,
} from '../models/Response/SelfProfileResponse';
import { loadAllUserProfile } from '../store/actionCreators/userActionCreators';
import FriendsService from '../axios/services/FriendsService';
import useFriends from './useFriends';

function useUserProfile() {
    const { username, avatar, createDate, isLoading } = useAppSelector(
        state => state.user,
    );
    const { getFriendsList } = useFriends();

    const dispatch = useDispatch();

    async function getFullProfile(): Promise<FullSelfProfile | null> {
        try {
            const profiles: FullSelfProfilePromise = await Promise.all([
                getUserProfile(),
                getFriendsList(),
            ]);
            return { profile: profiles[0], friends: profiles[1] };
        } catch (error) {
            return null;
        }
    }

    async function getUserProfile(): Promise<SelfProfileResponse> {
        try {
            const profile: SelfProfileResponse = (await UserService.getSelfProfile())
                .data;
            dispatch(
                loadAllUserProfile(profile.username, profile.createDate, profile.avatar),
            );
            return profile;
        } catch (error) {
            throw error;
        }
    }

    return {
        username,
        avatar,
        createDate,
        isLoading,
        getFullProfile,
        getUserProfile,
    };
}

export default useUserProfile;
