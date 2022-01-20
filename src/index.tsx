import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import App from './App';

window.React = React;

//FIXME: Настроить проверку пароля и других данных в регистарции

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
