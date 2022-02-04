import axios from 'axios';

console.log("api")


const api = axios.create({
    baseURL : 'http://localhost:5000'
})

export default api;