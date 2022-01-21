export const loadTestAuth = () => {
    return { type: 'SET_AUTH', payload: { isAuth: true } };
};

export const setAuth = (isAuth: boolean) => {
    return { type: 'SET_AUTH', payload: { isAuth: isAuth } };
};

export const setIsAuthLoading = (isAuthLoading: boolean) => {
    return { type: 'SET_LOADING_AUTH', payload: { isAuthLoading: isAuthLoading } };
};
