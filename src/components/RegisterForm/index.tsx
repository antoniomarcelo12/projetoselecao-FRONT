import { Link } from "react-router-dom";
import { RegisterFormContainer } from "./styles";
import { useState } from "react";
import { useApi } from "../../http/api";

let responseUserData: {code: number}
export function RegisterForm() {

    const [userPassword, setUserPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const [success, setSuccess] = useState<number | null>(null)
    const [error, setError] = useState('')

    const api = useApi()

    const isPasswordsMatching = userPassword === confirmPassword

    async function handleRegister(e: React.FormEvent<EventTarget>) {
        e.preventDefault()

        try{
            responseUserData = await api.register(userEmail, userPassword, userName)

            setSuccess(responseUserData.code)
            setError('')
        }catch(err) {
            setError(err.response.data.message)
            setSuccess(null)
        }
    }

    return(
        <RegisterFormContainer onSubmit={handleRegister}>
                <label htmlFor="userName">Digite seu nome de usuário</label>
                <input type="username" id="userName" placeholder="Nome de usuário" onChange={(e) => setUserName(e.target.value)} />

                <label htmlFor="email">Digite seu email</label>
                <input type="email" id="email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} />

                <label htmlFor="password">Digite sua senha</label>
                <input type="password" id="password" placeholder="Senha" onChange={(e) => setUserPassword(e.target.value)} />

                <label htmlFor="confirmPassword">Digite sua senha</label>
                <input type="password" id="confirmPassword" placeholder="Senha" onChange={(e) => setConfirmPassword(e.target.value)} />

                {
                    !isPasswordsMatching && confirmPassword.length > 5 && <p className="hintUnmatchedPasswords">As senhas precisam ser iguais!</p>
                }

                {
                    error.length > 0 && <p className="errorMessage">{ error }</p>
                }

                {
                    success === 201 && <p className="successMessage">User successfully created.</p>
                }
                
                <button disabled={!isPasswordsMatching || !userPassword} type="submit">Register</button> <span className="spanRegister">Já tem um cadastro? <Link to="/">Login</Link> </span>

        </RegisterFormContainer>
    )
}