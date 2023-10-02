import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../@types/User";
import { useApi } from "../http/api";

interface AllUsersProviderProps {
    children: ReactNode
}

interface AllUsersContextType {
    allUsers: User[],
    handleLoadAllUsers(): void,
    handleUpdateUser(user: User): void,
    handleEditAllUsersState(newAllUsers: User[]): void,
    createNewUser(user: User): void,
    deleteUser(userId: string): void,
}

export const AllUsersContext = createContext<AllUsersContextType>({} as AllUsersContextType)


export function AllUsersProvider({ children }: AllUsersProviderProps) {

    const [allUsers, setAllUsers] = useState<User[]>([])
    const api = useApi()

    useEffect(() => {
        handleLoadAllUsers()
    }, [handleUpdateUser, createNewUser, deleteUser])

    function handleEditAllUsersState(newAllUsers: User[]) {
        setAllUsers(newAllUsers)

    }
    
    async function handleLoadAllUsers(){
        const allUsersResponse = await api.getAllUsers()
        setAllUsers(allUsersResponse)
    }

    function handleUpdateUser(user: User) {
        api.updateUser(user)
    }

    function createNewUser(user: User){
        api.createNewUser(user)
    }

    function deleteUser(userId: string){
        api.deleteUser(userId)
    }

    return(
        <AllUsersContext.Provider value={{allUsers, handleLoadAllUsers, handleUpdateUser, handleEditAllUsersState, createNewUser, deleteUser}}>
            { children }
        </AllUsersContext.Provider>
    );
}
