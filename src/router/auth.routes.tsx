import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<SignIn/>}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
        </Routes>
    );
}