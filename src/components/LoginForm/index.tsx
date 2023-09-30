import { Link } from "react-router-dom";
import { LoginFormContainer } from "./styles";

export function LoginForm() {
    return(
        <LoginFormContainer>
                <label htmlFor="email">Digite seu email</label>
                <input type="email" id="email" placeholder="Email" />

                <label htmlFor="password">Digite sua senha</label>
                <input type="password" id="password" placeholder="Senha" />

                <button type="submit">Login</button> <span className="spanRegister">Ainda não é cadastrado? <Link to="/register">Registre-se</Link> </span>
        </LoginFormContainer>
    )
}