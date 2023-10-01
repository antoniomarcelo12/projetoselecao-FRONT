import { useContext } from "react";
import { CreateRequestForm } from "../../components/CreateRequestForm/indext";
import { LogoutButton, UserPageContainer, UserPageContent } from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ViewRequestList } from "../../components/ViewRequestList";

export function UserPage() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    
    function handleLogout() {
        localStorage.removeItem('authToken')
        navigate('/')
    }

    return (
    <UserPageContainer>
        <h3>Seja bem vindo, {auth.user.user_name}!</h3>
        
        <UserPageContent>
            <CreateRequestForm />
            <ViewRequestList />
        </UserPageContent>

        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </UserPageContainer>
    )
}