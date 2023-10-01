import {Routes, Route} from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage';
import { UserPage } from '../pages/UserPage';
import { RequireAuth } from './RequireAuth';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { AdmPage } from '../pages/AdmPage';

export function Router() {
    const auth = useContext(AuthContext)
    
    return(
        <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/register' element={<RegisterPage />} />
            
            {
                auth.user.user_type === 'aluno' &&
                    <Route path='/userhome' element={ <RequireAuth> <UserPage /> </RequireAuth> } />
            }
            
            <Route path='/gerenciahome' element={ <RequireAuth> <AdmPage /> </RequireAuth> } />
            
        </Routes>
    );
}