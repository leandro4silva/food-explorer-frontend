import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import {useAuth} from '../hooks/auth';

export function Router(){
    const {user} = useAuth();

    return(
        <BrowserRouter>
            {user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    );
}