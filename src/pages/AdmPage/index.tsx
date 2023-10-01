import { useContext } from "react";
import { LogoutButton, UserPageContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ViewRequestList } from "../../components/ViewRequestList";

export function AdmPage() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    
    function handleLogout() {
        localStorage.removeItem('authToken')
        navigate('/')
    }
    return (
            <UserPageContainer>
                <h3>Seja bem vindo(a), {auth.user.user_name}!</h3>
                <ViewRequestList />
                <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
            </UserPageContainer>
    );
}
