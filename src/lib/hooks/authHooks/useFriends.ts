import { FriendsResponse, FindFriendsResponse } from '../../models/Response/FriendsResponse';
import FriendsService from '../../axios/services/FriendsService';

function useFriends () {
    async function findFriend (username: string) {
        if (username.length < 2) {
            return null;
        }
        const data: FindFriendsResponse = (await FriendsService.findFriends(username)).data;
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

    return { findFriend, getFriendsList }
}

export default useFriends