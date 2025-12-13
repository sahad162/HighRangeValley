import apiClient from "./apiClient"

export const getProducts=async()=>{
    const response=await apiClient.get('api/products');
    return response.data;
}

export const getCategories=async()=>{
    const response=await apiClient.get('api/categories/');
    return response.data;
}

export const getDetailedViewOfProduct=async(productId)=>{
    const response=await apiClient.get(`api/products/${productId}`);
    return response.data;
}