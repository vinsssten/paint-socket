import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage';
import store from './store/store';
import RedirectPage from './components/RedirectPage/RedirectPage';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/LoginPage/RegisterPage/RegisterPage';
import { loadTestAuth } from './store/actionCreators/authActionCreators';

function Router() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTestAuth());
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RedirectPage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/singledrawing" element={<SingleDrawingPage />} />
                <Route path="/mainpage" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
