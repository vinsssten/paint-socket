import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { InitialState } from '../lib/models/reducerStates/InitialState';
import app from './reducers/app';
import drawing from './reducers/drawing';

const rootReducer = combineReducers({
	app: app,
	drawing: drawing
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

export default store;
