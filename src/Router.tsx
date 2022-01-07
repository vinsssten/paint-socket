import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage';
import store from './store/store';
import RedirectPage from './components/RedirectPage/RedirectPage';

function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RedirectPage />} />
                    <Route path="/signin" element={<LoginPage />} />
                    <Route path="/singledrawing" element={<SingleDrawingPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default Router;
