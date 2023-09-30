import { Link } from "react-router-dom";
import { RegisterFormContainer } from "./styles";
import { useState } from "react";

export function RegisterForm() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const isPasswordsMatching = password === confirmPassword


    return(
        <RegisterFormContainer>
                <label htmlFor="fullName">Digite seu nome completo</label>
                <input type="text" id="fullName" placeholder="Nome completo" />

                <label htmlFor="email">Digite seu email</label>
                <input type="email" id="email" placeholder="Email" />

                <label htmlFor="password">Digite sua senha</label>
                <input type="password" id="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="password">Digite sua senha</label>
                <input type="password" id="password" placeholder="Senha" onChange={(e) => setConfirmPassword(e.target.value)} />

                {
                    !isPasswordsMatching && confirmPassword.length > 5 && <p className="hintUnmatchedPasswords">As senhas precisam ser iguais!</p>
                }
                
                <button disabled={!isPasswordsMatching || !password} type="submit">Register</button> <span className="spanRegister">Já tem um cadastro? <Link to="/">Login</Link> </span>
        </RegisterFormContainer>
    )
}