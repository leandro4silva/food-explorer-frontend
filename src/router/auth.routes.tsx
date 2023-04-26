import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/Catalog/SignIn";
import { SignUp } from "../pages/Catalog/SignUp";
import { SignInAdmin } from "../pages/Admin/SignInAdmin";

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
            <Route path="/admin" element={<SignInAdmin/>}></Route>
        </Routes>
    );
}