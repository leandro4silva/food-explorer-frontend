import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Catalog/Home';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}