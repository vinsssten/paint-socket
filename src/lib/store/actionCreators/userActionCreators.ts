import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit"

export const loadTestUserProfile = () => {
    return {type: 'SET_ALL_DATA', payload: {login: 'vinsssten', username: 'vinsssten', createDate: '28.07.2003', avatar: null, isLoading: false}}
}

export const loadAllUserProfile = () => {
    return
}