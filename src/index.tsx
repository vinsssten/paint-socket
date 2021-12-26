import React from 'react';
import ReactDom from 'react-dom';
import Router from './Router';
import './index.scss';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';

window.React = React;

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

ReactDom.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById('root'),
);
