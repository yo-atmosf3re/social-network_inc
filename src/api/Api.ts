import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'd168e0b6-f2a6-4be3-a321-88800404a063'
   }
})

export const usersAPI = {
   getUsers: async (currentPage: number = 1, pageSize: number = 10) => {
      const res = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
      return res.data;
   },
   getProfile: (userId: number) => profileAPI.getProfile(userId),
   unfollow: (id: number) => instance.delete(`follow/${id}`),
   follow: (id: number) => instance.post(`follow/${id}`),
}
export const profileAPI = {
   getProfile: (userId: number) => instance.get(`profile/${userId}`),
   getStatus: (userId: number) => instance.get(`profile/status/${userId}`),
   updateStatus: (status: string) => instance.put(`profile/status`, { status: status })
}

export const authAPI = {
   me: () => instance.get<ResponseGetAuthI>(`auth/me`),
   login: (email: string, password: string, rememberMe: boolean = false) => instance.post<ResponsePostAuthI>(`/auth/login`, { email, password, rememberMe }),
   logout: () => instance.delete<ResponseDeleteAuthI>(`/auth/login`),
}

type ResponsePostDataType = {
   userId: number
}

type ResponseGetDataType = {
   id: string
   email: string
   login: string
}

export interface ResponsePostAuthI {
   resultCode: number
   messages: string[]
   data: ResponsePostDataType
}

export interface ResponseDeleteAuthI {
   resultCode: number
   messages: string[]
   data: {}
}

export interface ResponseGetAuthI {
   data: ResponseGetDataType
   resultCode: number
   messages: string[]
}