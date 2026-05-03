import { z } from "zod";

export const registerSchema = z.object({
  full_name: z.string().min(1, "Name is required"),
  user_name: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),

  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  pincode: z.string().min(6, "Pincode must be 6 digits"),
  address: z.string().min(1, "Address is required"),

  terms: z.boolean().refine(val => val === true, {
    message: "You must accept terms"
  }),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must accept privacy policy"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});