import { PayloadAction, Reducer } from '@reduxjs/toolkit';

export interface AppState {
    theme: Theme;
}

const initialState: AppState = {
    theme: 'light',
};

const app: Reducer<AppState, PayloadAction<AppState>> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'THEME_TOGGLE':
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return initialState;
    }
};

export default app;
