import {Routes, Route} from 'react-router-dom';
import { Dashboard } from '../pages/Admin/Dashboard';
import { Details } from '../pages/Admin/Details';
import { EditDish } from '../pages/Admin/EditDish';
import { CreateDish } from '../pages/Admin/CreateDish';

export function AdminRoutes(){
    return (
        <Routes>
            <Route path='/admin/dashboard' element={ <Dashboard /> } />
            <Route path="/admin/details/:id" element={ <Details /> } />
            <Route path="/admin/dish/edit/:id"  element={ <EditDish /> } />
            <Route path="/admin/dish/create"  element={ <CreateDish /> } />
        </Routes>
    )
}