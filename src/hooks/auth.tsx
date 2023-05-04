import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
    children: ReactNode
}

interface SignInProps {
    email: string,
    password: string, 
    isAdmin: boolean
}

interface UserProps {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    isAdmin: boolean
}

interface AuthProps {
    user: UserProps,
    token: string
}

interface AuthError{
    type: string,
    message: string
}

interface AuthContextProps {
    user?: UserProps,
    signIn(data: SignInProps) : Promise<AuthError | undefined>
    signOut(isAdmin: boolean) :void
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthProvider(props: AuthProviderProps) {
    const [data, setData] = useState<AuthProps | null>();

    async function signIn(props: SignInProps) {
        try {
            const response = await api.post("/sessions", {
                email: props.email,
                password: props.password,
                isAdmin: props.isAdmin 
            }); 

            const user = {...response.data.user, isAdmin: props.isAdmin};
            const token = response.data.token;

            if(props.isAdmin){
                localStorage.setItem("@foodexplorer:admin", JSON.stringify(user));
                localStorage.setItem("@foodexplorer:admin-token", token);
            }else{
                localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
                localStorage.setItem("@foodexplorer:user-token", token);
            }

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user, token });
            
        } catch (error: any) {
            if (error.response) {
                return {
                    type: 'auth',
                    message: error.response.data.message
                };
            } else {
                return {
                    type: 'system',
                    message: 'Não foi possivel logar no sistema, tente novamente mais tarde.'
                };
            }
        }
    }

    function signOut(isAdmin: boolean){
        if(isAdmin){
            localStorage.removeItem('@foodexplorer:admin')
            localStorage.removeItem('@foodexplorer:admin-token')
        }else{
            localStorage.removeItem('@foodexplorer:user')
            localStorage.removeItem('@foodexplorer:user-token')
        }
        setData(null)
    }

    useEffect(() => {
        const admin = localStorage.getItem("@foodexplorer:admin");
        const adminToken = localStorage.getItem("@foodexplorer:admin-token");
        const user = localStorage.getItem("@foodexplorer:user"); 
        const userToken = localStorage.getItem("@foodexplorer:user-token"); 

        if(adminToken && admin){
            api.defaults.headers.common["Authorization"] = `Bearer ${adminToken}`;

            setData({
                token: adminToken,
                user: JSON.parse(admin)
            })
        }

        if(userToken && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

            setData({
                token: userToken,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={
            {
                signIn,
                user: data?.user,
                signOut
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext) as AuthContextProps
    return context
}

export {
    useAuth,
    AuthProvider
}