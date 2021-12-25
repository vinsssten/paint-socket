import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import SingleDrawingPage from './components/LocalDrawingPage/SingleDrawingPage'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/singledrawing' element={<SingleDrawingPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
