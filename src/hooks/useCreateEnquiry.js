import { useMutation } from "@tanstack/react-query";
import { EnquirieApi } from "../services/enquirieApi";

export const useCreateEnquiry = () => {
  return useMutation({
    mutationFn: EnquirieApi,
  });
};
