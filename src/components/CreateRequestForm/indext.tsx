import { useContext, useState } from "react";
import { CreateRequestFormContainer } from "./styles";
import { AuthContext } from "../../contexts/AuthContext";
import { useApi } from "../../http/api";


export function CreateRequestForm() {

    const [requestType, setRequestType] = useState('')
    const [showOtherInput, setShowOtherInput] = useState(false)
    
    const auth = useContext(AuthContext)
    const api = useApi()

    async function handleSubmit(e: React.FormEvent<EventTarget>) {
        e.preventDefault()
        try {
            await api.createNewRequest(auth.user.user_id, requestType)
            window.alert("Pedido cadastrado com sucesso.")
        }catch(err){
            window.alert("Erro de comunicação com o servidor.")
        }

        auth.handleReload()

    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRequestType(e.target.value)
        setShowOtherInput(false)
    }

    return(
        <CreateRequestFormContainer onSubmit={handleSubmit}>

            <label htmlFor="atividadecomplementar">Atividade Complementar</label>
            <input type="radio" id="atividadecomplementar" value="atividadecomplementar" name="requestType" onChange={(e) => handleInputChange(e)} /> 
            
            <label htmlFor="dispensadedisciplina">dispensa de disciplina</label>
            <input type="radio" id="dispensadedisciplina" value="dispensa de disciplina" name="requestType" onChange={(e) => handleInputChange(e)} />
            
            <label htmlFor="reservadesala">reserva de sala</label>
            <input type="radio" id="reservadesala" value="reserva de sala" name="requestType" onChange={(e) => handleInputChange(e)} />
            
            <label htmlFor="emissãodecracha">emissão de crachá</label>
            <input type="radio" id="emissãodecracha" value="emissão de crachá" name="requestType" onChange={(e) => handleInputChange(e)} />
            
            <label htmlFor="ajustedecotasdeimpressao">ajuste de cotas de impressão</label>
            <input type="radio" id="ajustedecotasdeimpressao" value="ajuste de cotas de impressão" name="requestType" onChange={(e) => handleInputChange(e)} />
            
            <label htmlFor="problemastécnicos">problemas técnicos</label>
            <input type="radio" id="problemastécnicos" value="problemas técnicos" name="requestType" onChange={(e) => handleInputChange(e)} />

            <label htmlFor="mudancadesenhas">Mudança de senhas</label>
            <input type="radio" id="mudancadesenhas" value="mudanca de senha" name="requestType" onChange={(e) => handleInputChange(e)} />

            <label htmlFor="outros">Outros:</label>
            <input type="radio" id="outros" value="outros" name="requestType" onChange={ () => {setShowOtherInput(true); setRequestType('')} } />
            
            {
                showOtherInput && <input className="otherInput" placeholder="Digite seu problema" maxLength={25} type="text" onChange={(e) => setRequestType(e.target.value)} />
            }

            <button disabled={requestType.length == 0 && requestType === ''} type="submit">Enviar</button>

        </CreateRequestFormContainer>
    );
}