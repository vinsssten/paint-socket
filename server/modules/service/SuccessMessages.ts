class SuccessMessages {
    static registered() {
        return {
            message: 'User has been successfully registered',
        };
    }

    static logout() {
        return {
            message: 'The user logged out successfully',
        };
    }

    static friendsMissing () {
        return {
            message: 'Friends are missing'
        }
    }
}

export default SuccessMessages;
