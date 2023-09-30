import {Routes, Route} from 'react-router-dom'
import { DefaultLayout } from './layouts/default'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />} >
                <Route path='/' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
        </Routes>
    );
}