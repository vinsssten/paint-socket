import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/LoginPage/RegisterPage/RegisterPage';
import { loadTestAuth, setAuth } from './lib/store/actionCreators/authActionCreators';
import useAuth from './lib/hooks/authHooks/useAuth';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import useAuthLoading from './lib/hooks/authHooks/useAuthLoading';

function Router() {
    const { isAuth } = useAuth();
    const { isAuthLoading } = useAuthLoading();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('path', document.location.pathname);
        if (document.location.pathname === '/singledrawing') {
            return;
        }
        if (isAuthLoading) {
            navigate('/', { replace: true });
        } else {
            if (isAuth) {
                console.log('go to main page');
                navigate('/mainpage', { replace: true });
            } else {
                console.log('go to login');
                navigate('/signin', { replace: true });
            }
        }
    }, [isAuth, isAuthLoading]);

    useEffect(() => {
        // dispatch(loadTestAuth());
    }, []);

    return (
        <Routes>
            <Route path="/" element={<LoadingSpinner />} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/singledrawing" element={<SingleDrawingPage />} />
            <Route path="/mainpage" element={<MainPage />} />
        </Routes>
    );
}

export default Router;
