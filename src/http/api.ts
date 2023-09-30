import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333/',
})

export const useApi = () => ({
    register: async(userEmail: string, userPassword: string, userName: string) => {
      const response = await api.post('/register', {userEmail, userPassword, userName})
      return response.data
    },
    
    login: async(userName: string, userPassword: string) => {
      try{
        const response = await api.post('/login', {userName, userPassword})
        return response.data
      } catch {
        return false
      }
    },

    // validateToken: async (token: string) => {
    //   const response = await api.post('/token/refresh', { token })
    //   return response.data
    // },
    
      getUserProfileByToken: async(token: string) => {
      const userData = await api.get('/me', {headers: {'Authorization': `Bearer ${token}`}})
      return userData.data.user
    },

      createNewRequest: async (userId: string, requestType: string) => {
        const createNewRequestResponse = await api.post('/create', {userId, requestType})
        return createNewRequestResponse
        
      }
  
  })