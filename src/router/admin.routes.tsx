import {Routes, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Admin/Dashboard';

export function AdminRoutes(){
    return (
        <Routes>
            <Route path='/' element={ <Dashboard /> } />
        </Routes>
    )
}