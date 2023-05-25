import {Routes, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Admin/Dashboard';
import { Details } from '../pages/Admin/Details';
import { Edit } from '../pages/Admin/EditDish';

export function AdminRoutes(){
    return (
        <Routes>
            <Route path='/admin/dashboard' element={ <Dashboard /> } />
            <Route path="/admin/details/:id" element={ <Details /> } />
            <Route path="/admin/edit/:id"  element={ <Edit /> } />
        </Routes>
    )
}