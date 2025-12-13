import {useQuery} from "@tanstack/react-query";
import { getCategories, getDetailedViewOfProduct, getProducts} from "../services/productApi";

export const useCategories=()=>{
    return useQuery({
        queryKey:['categories'],
        queryFn:getCategories,
        staleTime:1000*60*5,
        retry:1
    });
};

export const useProducts=()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:getProducts,
        staleTime:1000*60*5,
        retry:1
    });
};

export const useProductDetail=(productId)=>{
    return useQuery({
        queryKey:['product',productId],
        queryFn:()=>getDetailedViewOfProduct(productId),
        enabled:!!productId
    })

};