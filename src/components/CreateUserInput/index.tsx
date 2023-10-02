import { useContext, useState } from "react";
import { User } from "../../@types/User";
import { CreateUserInputStyle } from './styles'
import { AllUsersContext } from "../../contexts/AllUsersContext";

export function CreateUserInput() {

    const allUsersContext = useContext(AllUsersContext)

    const [user, setUser] = useState<User>({
        user_fullname: "teste",
        user_name: "teste",
        user_age: 0,
        user_email: "teste@teste.com",
        user_ocupation: "teste",
        user_phone: "teste",
        })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    function handleCreateUser(e: React.FormEvent<EventTarget>) {
        e.preventDefault()
        const newUser = {...user, user_age: Number(user.user_age)}
        allUsersContext.createNewUser(newUser)
    }


    return(
        <CreateUserInputStyle onSubmit={handleCreateUser}>
                    <div className="inputFieldContainer">
                        <label htmlFor="">Nome completo</label>
                        <input      type="text" 
                                    value={user.user_fullname}
                                    name="user_fullname" 
                                    onChange={(e) => handleInputChange(e)} />
                    </div>

                    <div className="inputFieldContainer">
                        <label htmlFor="">nome de usuario</label>
                        <input      type="text" 
                                    value={user.user_name}
                                    name="user_name" 
                                    onChange={(e) => handleInputChange(e)}/>
                    </div>
                
                    <div className="inputFieldContainer">
                        <label htmlFor="">Idade</label>
                        <input      type="number" 
                                    value={user.user_age}
                                    name="user_age"
                                    onChange={(e) => handleInputChange(e)}/>
                    </div>
                
                    <div className="inputFieldContainer">
                        <label htmlFor="">email</label>
                        <input      type="text" 
                                    value={user.user_email}
                                    name="user_email" 
                                    onChange={(e) => handleInputChange(e)}/>
                    </div>
                
                    <div className="inputFieldContainer">
                        <label htmlFor="">Profissão</label>
                        <input      type="text" 
                                    value={user.user_ocupation}
                                    name="user_ocupation" 
                                    onChange={(e) => handleInputChange(e)}/>
                    </div>
                
                    <div className="inputFieldContainer">
                        <label htmlFor="">Telefone</label>
                        <input      type="text" 
                                    value={user.user_phone}
                                    name="user_phone" 
                                    onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button type="submit">Create user</button>

        </CreateUserInputStyle>
    );
}