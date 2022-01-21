import { PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit"
import { createDeflate } from "zlib"

export const loadTestUserProfile = () => {
    return {type: 'SET_ALL_DATA', payload: {login: 'vinsssten', username: 'vinsssten', createDate: '28.07.2003', avatar: null, isLoading: false}}
}

export const loadAllUserProfile = (username: string, createDate: string, avatar: string | null) => {
    return {type: 'SET_ALL_DATA', payload: {username: username, createDate: createDate, avatar: avatar, isLoading: false}}
}