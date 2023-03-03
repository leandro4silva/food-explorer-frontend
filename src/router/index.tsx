import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';

export function Router(){
    return(
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}