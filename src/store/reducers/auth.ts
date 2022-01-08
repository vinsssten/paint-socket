import { PayloadAction } from "@reduxjs/toolkit";
import { Reducer } from "redux";

export interface AuthState {
    isAuth: boolean
    isAuthError: boolean
}

const initialState: AuthState = {
    isAuth: false,
    isAuthError: false
}

const auth: Reducer<AuthState, PayloadAction<AuthState>> = (
    state = initialState, 
    action) => {
    switch (action.type) {
        case "SET_AUTH": return {...state, isAuth: action.payload.isAuth}
        default: return {...state};
    }
}

export default auth