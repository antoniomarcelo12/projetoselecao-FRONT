import { useContext, useState } from "react";
import { User } from "../../@types/User";
import { TablePageContainer, ViewUsersListContainer } from "./styles";
import { AllUsersContext } from "../../contexts/AllUsersContext";

export function ViewUsersList() {

    const allUsersContext = useContext(AllUsersContext)
    
    const [updatingUser, setUpdatingUser] = useState<User>()

    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, user_id: string) {
        
        const newAllUsers = allUsersContext.allUsers.map((user) => {
            let userChanged: User | undefined

            if(user.user_id === user_id) {

                if(e.target.name === 'user_age'){
                    const numberAge = Number(e.target.value.replace(/\D/g, ''));
                    userChanged = {
                        ...user,
                        [e.target.name]: numberAge
                    }
                }else {
                    userChanged = {
                        ...user,
                        [e.target.name]: e.target.value
                    }
                }
                setUpdatingUser(userChanged)
                return userChanged
            }

            return user
        })

        allUsersContext.handleEditAllUsersState(newAllUsers)
    }

    function submitEditUser() {
        allUsersContext.handleUpdateUser(updatingUser!)
    }

    function handleDeleteUser(userId: string) {
        allUsersContext.deleteUser(userId)
    }

    return(
        <TablePageContainer>
            <ViewUsersListContainer>
                {
                    allUsersContext.allUsers.length > 0 &&
                <thead>
                <tr>
                    <th>Nome completo</th>
                    <th>username</th>
                    <th>idade</th>
                    <th>email</th>
                    <th>Profissão</th>
                    <th>phone</th>
                    <th></th>
                </tr>
                </thead>

                }

                <tbody>
                    {   
                        allUsersContext.allUsers?.length === 0 ? (
                            <tr className="nothingToShow">
                                <td>Nothing to show here.</td>
                            </tr>
                        ) : (
                        allUsersContext.allUsers?.map((user) => {

                            return(
                                    <tr key={user.user_id}>
                                        <td>  <input    type="text" 
                                                        name="user_fullname" 
                                                        value={user?.user_fullname} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)} />
                                        </td>

                                        <td>  <input    type="text" 
                                                        name="user_name" 
                                                        value={user.user_name} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)}/>
                                        </td>

                                        <td>  <input    type="text" 
                                                        name="user_age" 
                                                        value={user.user_age} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)}/>
                                        </td>

                                        <td>  <input    type="text" 
                                                        name="user_email" 
                                                        value={user.user_email} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)}/>
                                        </td>

                                        <td>  <input    type="text" 
                                                        name="user_ocupation" 
                                                        value={user.user_ocupation} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)}/>
                                        </td>

                                        <td>  <input    type="text" 
                                                        name="user_phone" 
                                                        value={user.user_phone} 
                                                        onChange={(e) => handleInputChange(e, user.user_id!)}/>
                                        </td>
                                        
                                        <td> <button onClick={submitEditUser}>Edit</button> </td>
                                        <td> <button onClick={() => handleDeleteUser(user.user_id!)}>Delete</button> </td>
                                    </tr>
                            )
                        }))
                    }
                </tbody>
            </ViewUsersListContainer>
        </TablePageContainer>
    );
}