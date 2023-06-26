import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Catalog/Home';
import { Favorites } from '../pages/Catalog/Favorites';
import { Details } from '../pages/Catalog/Details';
import { Checkout } from '../pages/Catalog/Checkout';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    )
}