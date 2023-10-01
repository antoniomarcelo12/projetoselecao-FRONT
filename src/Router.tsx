import {Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage';
import { UserPage } from './pages/UserPage';
import { RequireAuth } from './http/RequireAuth';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/userhome' element={ <RequireAuth> <UserPage /> </RequireAuth> } />
        </Routes>
    );
}