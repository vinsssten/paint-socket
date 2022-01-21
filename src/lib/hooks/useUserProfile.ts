import { useAppSelector } from "../.."

function useUserProfile () {
    const {username, avatar, createDate, isLoading} = useAppSelector(state => state.user);

    function getUserProfile () {

    }

    return {username, avatar, createDate, isLoading, getUserProfile}
}

export default useUserProfile