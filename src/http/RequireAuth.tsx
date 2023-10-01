import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LoginPage } from "../pages/LoginPage";

interface RequireAuthProps {
    children: ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
    const auth = useContext(AuthContext)

    if(!auth.sessionToken && !auth.user.user_id) {
        return (
            <LoginPage />
        )
    }

    return children
}