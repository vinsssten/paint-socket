import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

export interface AuthState {
    isAuth: boolean;
    isAuthError: boolean;
    isAuthLoading: boolean;
}

const initialState: AuthState = {
    isAuth: false,
    isAuthError: false,
    isAuthLoading: true,
};

const auth: Reducer<AuthState, PayloadAction<AuthState>> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'SET_AUTH':
            return { ...state, isAuth: action.payload.isAuth };
        case 'SET_LOADING_AUTH':
            return { ...state, isAuthLoading: action.payload.isAuthLoading };
        case 'SET_TEST_DATA':
            return { ...state, isAuth: true, isAuthLoading: false };
        default:
            return { ...state };
    }
};

export default auth;
