import React, { FC } from 'react';
import stl from './index.scss'
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Router from './Router';
import store from './store/store';

interface Props {}

const App: FC<Props> = ({}) => {
    return (
        <Provider store={store}>
            <div className={stl.mainContainer}>
                <div className={stl.gridContainer}>
                    <Header />
                    <div className={stl.gridBodyContainer}>
                        <Router />
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default App;
