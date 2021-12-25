import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage';
import store from './store/store';

function Router() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/singledrawing" element={<SingleDrawingPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default Router;
