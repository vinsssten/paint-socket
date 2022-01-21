import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/app';
import auth from './reducers/auth';
import drawing from './reducers/drawing';
import user from './reducers/user';

const rootReducer = combineReducers({
    app: app,
    drawing: drawing,
    auth: auth,
    user: user
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
