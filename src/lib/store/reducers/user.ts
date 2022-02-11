import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface UserState {
    login: string | null;
    username: string | null;
    avatar: string | null;
    createDate: string | null;
    isLoading: boolean;
}

const initialState: UserState = {
    login: null,
    username: null,
    avatar: null,
    createDate: null,
    isLoading: true,
};

const user: Reducer<UserState, PayloadAction<UserState>> = (
    state = initialState,
    action,
) => {
    const payload = action.payload;
    switch (action.type) {
        case 'SET_ALL_DATA':
            return {
                ...state,
                username: payload.username,
                avatar: payload.avatar,
                createDate: payload.createDate,
                isLoading: false,
            };
        default:
            return { ...state };
    }
};

export default user;
