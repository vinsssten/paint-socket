import useState from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../..';
import { loadAllUserProfile } from '../store/actionCreators/userActionCreators';
import UserService from '../axios/services/UserService';
import { FriendsResponse } from '../models/Response/FriendsResponse';

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

    function getFriendsList(): FriendsResponse {
        return {
            friendsList: [
                {
                    id: '111111',
                    username: 'chaylom',
                    avatar: null,
                    lastOnline: '19:43 12 February'
                },
                {
                    id: '111111',
                    username: 'vinsssten',
                    avatar: null,
                    lastOnline: '19:43 12 February'
                },
                {
                    id: '111111',
                    username: 'sseoro',
                    avatar: null,
                    lastOnline: '19:43 12 February'
                },
            ],
            invitesList: [
                {
                    id: '111111',
                    username: 'sseoro',
                    avatar: null,
                },
                {
                    id: '111111',
                    username: 'sseoro',
                    avatar: null,
                },
            ],
        };
    }

    return { username, avatar, createDate, isLoading, getUserProfile, getFriendsList };
}

export default useUserProfile;
