import axios from 'axios';

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

export const getUsers = async (currentPage: number = 1, pageSize: number = 10) => {
   const response = await axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true
   });
   return response.data;
}
