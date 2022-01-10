export const loadTestAuth = () => {
    return {type: 'SET_AUTH', payload: {isAuth: true}}
}

export const setAuth = (isAuth: boolean) => {
    return { type: 'SET_AUTH', payload: { isAuth: isAuth } };
};
