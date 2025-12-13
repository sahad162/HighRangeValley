import { useQuery } from "@tanstack/react-query"
import { reviewsApi } from "../services/reviewsApi"

function useRev() {
  return useQuery({
        queryKey:["reviews"],
        queryFn:reviewsApi,
        staleTime:1000*60*5,
        retry:1
    });
}

export default useRev

