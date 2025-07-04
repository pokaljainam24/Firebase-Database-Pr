import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://fir-database-pr-default-rtdb.firebaseio.com/users'
})