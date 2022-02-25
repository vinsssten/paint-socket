import {
    FriendsResponse,
    FindFriendsResponse,
} from '../models/Response/FriendsResponse';
import FriendsService from '../axios/services/FriendsService';
import { useState } from 'react';

function useFriends() {
    const [findResult, setFindResult] = useState<FindFriendsResponse | null>(null);

    async function findFriend(username: string) {
        if (username.length < 2) {
            setFindResult(null);
            return null;
        }
        const data: FindFriendsResponse = (await FriendsService.findFriends(username))
            .data;
        setFindResult(data);
        return data;
    }

    async function getFriendsList(): Promise<FriendsResponse> {
        try {
            const friendsList = (await FriendsService.getFriendsList()).data;
            return friendsList;
        } catch (error) {
            throw error;
        }
    }

    //Если действие выполнено успешно - возвращает true, иначе - false
    async function addFriend(id: string): Promise<boolean> {
        return true
    }

    // async function acceptInvite (id: string) {
    //     return true
    // }

    async function discardInvite (id: string) {
        return true
    }

    return { findResult, findFriend, getFriendsList, addFriend, discardInvite };
}

export default useFriends;
