import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import store from './store/store';

interface Props {}

const App: FC<Props> = ({}) => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
