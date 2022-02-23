import { useDispatch } from 'react-redux';
import { useAppSelector } from '../..';
import UserService from '../axios/services/UserService';
import { FriendsResponse } from '../models/Response/FriendsResponse';
import { SelfProfileResponse, FullSelfProfilePromise, FullSelfProfile } from '../models/Response/SelfProfileResponse';
import { loadAllUserProfile } from '../store/actionCreators/userActionCreators';
import FriendsService from '../axios/services/FriendsService';

function useUserProfile() {
    const { username, avatar, createDate, isLoading } = useAppSelector(
        state => state.user,
    );

    const dispatch = useDispatch();

    async function getFullProfile (): Promise<FullSelfProfile| null > {
        try {
            const profiles: FullSelfProfilePromise = await Promise.all([getUserProfile(), getFriendsList()]);
            return {profile: profiles[0], friends: profiles[1]}
        } catch (error) {
            return null
        }
    }

    async function getUserProfile(): Promise<SelfProfileResponse> {
        try {
            const profile: SelfProfileResponse = (await UserService.getSelfProfile()).data;
            dispatch(loadAllUserProfile(profile.username, profile.createDate, profile.avatar));
            return profile
        } catch (error) {
            throw error
        }
    }

    async function getFriendsList(): Promise<FriendsResponse> {
        try {
            const friendsList = (await FriendsService.getFriendsList()).data;
            return friendsList
        } catch (error) {
            throw error
        }
    }

    return { username, avatar, createDate, isLoading, getFullProfile, getUserProfile, getFriendsList };
}

export default useUserProfile;
