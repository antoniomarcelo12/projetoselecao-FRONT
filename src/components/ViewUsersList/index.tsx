import { useContext, useEffect, useState } from "react";
import { User } from "../../@types/User";
import { TablePageContainer, ViewUsersListContainer } from "./styles";
import { AllUsersContext } from "../../contexts/AllUsersContext";
import { EditModalComponent } from "../EditModalComponent";

export function ViewUsersList() {

    const allUsersContext = useContext(AllUsersContext)
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [updatingUser, setUpdatingUser] = useState<User>({
        user_id: "",
        user_fullname: "",
        user_name: "",
        user_age: 0,
        user_email: "",
        user_ocupation: "",
        user_phone: "",
    })

    useEffect(() => {
        console.log(allUsersContext.allUsers)
    }, [])


    function handleOpenEditModal() {
        setIsModalOpen(true);
      }
    
      function handleCloseEditModal() {
        setIsModalOpen(false);
      }



    function handleEditUpdatingUser(e: React.ChangeEvent<HTMLInputElement>) {
        setUpdatingUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
    }


    
    function handleEditUserModal(user: User) {
        setUpdatingUser(user)
        handleOpenEditModal()
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
                        allUsersContext.allUsers?.length === 0 && (
                            <tr className="nothingToShow">
                                <td>Nothing to show here.</td>
                            </tr>
                        )
                    }


                    {
                        allUsersContext.allUsers &&
                        allUsersContext.allUsers?.map((user) => {

                            return(
                                    <tr key={user.user_id}>
                                        <td>{user?.user_fullname}</td>

                                        <td>{user.user_name}</td>

                                        <td>{user.user_age}</td>

                                        <td>{user.user_email}</td>

                                        <td>{user.user_ocupation}</td>

                                        <td>{user.user_phone}</td>
                                        
                                        <td> <button onClick={() => handleEditUserModal(user)}>Edit</button> </td>
                                        <td> <button onClick={() => handleDeleteUser(user.user_id!)}>Delete</button> </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
                </ViewUsersListContainer>

                    {
                        isModalOpen ? <EditModalComponent updatingUser={updatingUser} handleEditUpdatingUser={handleEditUpdatingUser} isModalOpen={isModalOpen} handleCloseEditModal={handleCloseEditModal} /> : null
                    }

        </TablePageContainer>
    );
}