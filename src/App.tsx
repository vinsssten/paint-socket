import React, { FC } from 'react';
import stl from './index.scss'
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Router from './Router';
import store from './lib/store/store';
import { BrowserRouter } from 'react-router-dom';

interface Props {}

const App: FC<Props> = ({}) => {
    return (
        <Provider store={store}>
            <div className={stl.mainContainer}>
                <div className={stl.gridContainer}>
                    <Header />
                    <div className={stl.gridBodyContainer}>
                        <BrowserRouter>
                            <Router />
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default App;
