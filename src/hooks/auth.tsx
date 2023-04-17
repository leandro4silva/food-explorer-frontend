import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface AuthProviderProps {
    children: ReactNode
}

interface SignInProps {
    email: string,
    password: string
}

interface UserProps {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
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
    signOut() :void
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthProvider(props: AuthProviderProps) {
    const [data, setData] = useState<AuthProps | null>();

    async function signIn(props: SignInProps) {
        try {
            const response = await api.post("/sessions", {
                email: props.email,
                password: props.password
            })

            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token", token)

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

    function signOut(){
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')
        setData(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user){
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
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