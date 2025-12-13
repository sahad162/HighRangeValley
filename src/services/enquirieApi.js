import apiClient from "./apiClient"

export const EnquirieApi=async(payload)=>{
    const response= await apiClient.post("api/enquiries/create/",payload);
    return response.data;
}