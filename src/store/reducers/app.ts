import { PayloadAction } from '@reduxjs/toolkit';
import { Reducer } from 'react';
import { Action } from 'redux';
import AppState from '../../lib/models/reducerStates/AppState';

const initialState: AppState = {
	theme: 'light',
};

const app = (state: AppState, action: PayloadAction<AppState>) => {
	switch (action.type) {
		case 'THEME_TOGGLE':
			return { theme: state.theme === 'light' ? 'dark' : 'light' };
		default:
			return initialState;
	}
};

export default app;
