import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .nonempty("Name is Required!")
    .max(25, "Character is large!")
    .trim(),
  email: z.string().email("Please enter valid email address.").trim(),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\d+$/, "Field should contain numbers only.")
    .length(10, "Maximum 10 digits needed")
    .trim(),
  message: z.string().nonempty("Message is required").trim(),
});
