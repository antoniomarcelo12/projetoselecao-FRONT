import axios from "axios";
import { User } from "../@types/User";

const api = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const useApi = () => ({

      createNewUser: async (user: User) => {
        try {
          const createNewUserResponse = await api.post('/create', user)
          window.alert("usuario cadastrado com sucesso.")
          return createNewUserResponse
        } catch(err) {
          if(err.response.data.message === "User already exists."){
            window.alert("Usuário já existe.")
          }

          if(err.response.data.message === "Validation error."){
            window.alert("Informações inválidas. Verifique e tente novamente.")
          }
        }
      },

      getAllUsers: async (): Promise<User[]> => {
        const allUsers = await api.get('/users')
        return allUsers.data.users
      },

      deleteUser: async (userId: string) => {

        try{
          await api.delete(`/user/?userid=${userId}`)
          window.alert("usuario excluido com sucesso.")
          
        }catch(err) {
          window.alert(err)
        }
      },
      
      updateUser: async(userData: User) => {
        try {
          await api.put(`/user/?userid=${userData.user_id}`, userData)
          window.alert("usuario editado com sucesso.")
          
        } catch(err){
          window.alert(err)
        }
      }
})