import axios from "axios";
import { baseURL } from "./baseURL";

const apiClient=axios.create({
    baseURL:baseURL,
    timeout:15000
})

apiClient.interceptors.response.use(
    (response)=>response,
    (error)=>{
        console.error("API Error",error.response?.data||error.message);
        return Promise.reject(error);
    }
);

export default apiClient;