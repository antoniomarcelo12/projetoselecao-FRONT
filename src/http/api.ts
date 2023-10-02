import axios from "axios";
import { User } from "../@types/User";

const api = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const useApi = () => ({

      createNewUser: async (user: User) => {
        const createNewUserResponse = await api.post('/create', user)
        return createNewUserResponse
      },

      getAllUsers: async (): Promise<User[]> => {
        const allUsers = await api.get('/users')
        return allUsers.data.users
      },

      deleteUser: async (userId: string) => {
        console.log("USERDATA TO DELETE: ", userId)
        await api.delete(`/user/?userid=${userId}`)
      },

      updateUser: async(userData: User) => {
        await api.put(`/user/?userid=${userData.user_id}`, userData)
      }





      //FIXME:
      // getUserByUserId: async(token: string) => {
      //   const requests = await api.get('/get/requests', {headers: {'Authorization': `Bearer ${token}`}})

      //   return requests
      // },

      // getAllUsers: async(token: string) => {
      //   const allRequests = await api.get('/get/allrequests', {headers: {'Authorization': `Bearer ${token}`}})
      //   return allRequests
      // },
})