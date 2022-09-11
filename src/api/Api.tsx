import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'd168e0b6-f2a6-4be3-a321-88800404a063'
   }
})

export const usersAPI = {
   getUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
         return res.data
      })
   },
   getCurrentUsers(userId: number) {
      return instance.get(`profile/${userId}`).then(res => {
         return res.data
      })
   },
   unfollow(id: number) {
      return instance.delete(`follow/${id}`)
   },
   follow(id: number) {
      return instance.post(`follow/${id}`)
   },
   chekAuth() {
      return instance.get(`auth/me`).then(
         res => {
            return res.data
         }
      )
   },
}