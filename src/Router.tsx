import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage';
import MainPage from './components/MainPage/MainPage';
import RegisterPage from './components/LoginPage/RegisterPage/RegisterPage';
import { loadTestAuth, setAuth } from './store/actionCreators/authActionCreators';
import useAuth from './lib/hooks/useAuth';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

function Router() {
    const { isAuth, isLoadingAuth } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoadingAuth) {
            if (isAuth) {
                console.log('go to main page');
                navigate('/mainpage', {replace: true});
            } else {
                console.log('go to login');
                navigate('/signin', {replace: true});
            }
        }
    }, [isAuth, isLoadingAuth])

    useEffect(() => {
        dispatch(loadTestAuth());
    }, [])

    if (isLoadingAuth) {
        return <LoadingSpinner />
    }

    return (
        <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />}  />
            <Route path="/singledrawing" element={<SingleDrawingPage />} />
            <Route path="/mainpage" element={<MainPage />}/>
        </Routes>
    );
}

export default Router;
