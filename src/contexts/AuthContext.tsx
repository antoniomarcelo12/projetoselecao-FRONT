import { ReactNode, createContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode
}

interface User {
    user_id: string,
    user_name: string,
    user_email: string,
    user_type: string
}

interface AuthContextType {
    sessionToken: string,
    handleSetSessionToken(token: string): void;
    user: User,
    handleSetUser(user: User): void
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps ) {

    const [user, setUser] = useState<User>({} as User)
    const [sessionToken, setSessionToken] = useState('')

    function handleSetUser(user: User) {
        setUser(user)
    }

    function handleSetSessionToken(token: string) {
        setSessionToken(token)
    }

    return(
        <AuthContext.Provider value={{user, handleSetUser, sessionToken, handleSetSessionToken}}>
            { children }
        </AuthContext.Provider>
    );
}