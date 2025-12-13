import apiClient from "./apiClient"

export const reviewsApi=async()=>{
    const response=await apiClient.get('api/reviews/');
    return response.data;
}