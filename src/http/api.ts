import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333/',
})

interface LoginResponseSuccessType {
    token: string
}

export const useApi = () => ({
 
    register: async(userEmail: string, userPassword: string, userName: string) => {
      const response = await api.post('/register', {userEmail, userPassword, userName})
      return response.data
    },

    login: async(userName: string, userPassword: string): Promise<LoginResponseSuccessType | string> => {
      try{
        const response = await api.post('/login', {userName, userPassword})

        localStorage.setItem('authToken', response.data.token)

        return response.data
        
      } catch(err) {
        return err.response.data.message
      }
    },

      getUserProfileByToken: async(token: string) => {
      const userData = await api.get('/me', {headers: {'Authorization': `Bearer ${token}`}})
      return userData.data.user
    },

      createNewRequest: async (userId: string, requestType: string) => {
        const createNewRequestResponse = await api.post('/create', {userId, requestType})
        return createNewRequestResponse
      },

      getRequestsByUserId: async(token: string) => {
        const requests = await api.get('/get/requests', {headers: {'Authorization': `Bearer ${token}`}})

        return requests
      },

      getAllRequests: async(token: string) => {
        const allRequests = await api.get('/get/allrequests', {headers: {'Authorization': `Bearer ${token}`}})
        return allRequests
      },

      toggleRequestDone: async(token: string, taskId: string) => {
        await api.put(`/request/?requestId=${taskId}`, {}, {headers: {'Authorization': `Bearer ${token}`}})
      }
     
  
  })