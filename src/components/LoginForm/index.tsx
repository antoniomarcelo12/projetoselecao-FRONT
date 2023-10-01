import { Link, useNavigate } from "react-router-dom";
import { LoginFormContainer } from "./styles";
import { useContext, useState } from "react";
import { useApi } from "../../http/api";
import { AuthContext } from "../../contexts/AuthContext";

export function LoginForm() {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setError] = useState('')

    const api = useApi()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    async function handleLogin(e: React.FormEvent<EventTarget>) {
        e.preventDefault()

        const loginResponse  = await api.login(userName, userPassword)

        if(typeof(loginResponse) === 'string') {
            const errorMessage = loginResponse
            setError(errorMessage)
            
        }else {
            const currentUserData = await api.getUserProfileByToken(loginResponse.token)
            
            auth.handleSetSessionToken(loginResponse.token)
            auth.handleSetUser(currentUserData)

            if(currentUserData.user_type === 'aluno'){
                navigate('/userhome')
            }else{
                navigate('/gerenciahome')
            }
        }
    }

    return(
        <LoginFormContainer onSubmit={handleLogin}>
                <label htmlFor="username">Digite seu username</label>
                <input type="username" id="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="password">Digite sua senha</label>
                <input type="password" id="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)} />

                {
                    error.length > 0 && <p className="loginError">{error}</p>
                }

                <button disabled={!userName || userPassword.length < 6} type="submit">Login</button> <span className="spanRegister">Ainda não é cadastrado? <Link to="/register">Registre-se</Link> </span>
        </LoginFormContainer>
    )
}