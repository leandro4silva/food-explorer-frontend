import { ReactNode, createContext, useContext, useState } from "react";

interface SessionProviderProps {
    children: ReactNode
}

interface SessionProps {
   message: string,
   type: string
}

interface SessionContextProps{
    sessionMessage?: SessionProps | null,
    setMessageSession(data: SessionProps | null) :void
}

const SessionContext = createContext<SessionContextProps | null>(null);

function SessionProvider(props: SessionProviderProps){
    const [sessionMessage, setSessionMessage] = useState<SessionProps | null>();

    function setMessageSession(props: SessionProps){
        setSessionMessage(props)
    }

    return(
        <SessionContext.Provider value={
            {
                sessionMessage,
                setMessageSession
            }
        }>
            {props.children}
        </SessionContext.Provider>
    )
}

function useSession(){
    const context = useContext(SessionContext) as SessionContextProps
    return context
}

export {
    useSession,
    SessionProvider
}