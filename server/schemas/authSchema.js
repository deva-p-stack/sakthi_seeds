import z from "zod";



export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});



export const registerSchema = z.object({
  full_name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  user_name: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscore"),

  email: z.string().email("Invalid email address"),

  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  password: z.string().min(6, "Password must be at least 6 characters"),

  confirmPassword: z.string(),

  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),

  pincode: z
    .string()
    .min(4, "Pincode must be at least 4 characters")
    .max(10, "Pincode too long"),

  address: z.string().min(5, "Address must be at least 5 characters"),

  terms: z.boolean().refine(val => val === true, {
    message: "You must accept Terms & Conditions",
  }),

  privacy: z.boolean().refine(val => val === true, {
    message: "You must accept Privacy Policy",
  }),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});



const parseJSON = (val) => {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  }
  return val;
};


const variantSchema = z.object({
  weight: z.string().min(1),

  price: z.preprocess((val) => Number(val), z.number().finite()),

  stock: z.preprocess((val) => Number(val), z.number().finite())
});

export const productSchema = z.object({
  plant_name: z.string(),
  region: z.string(),
  state: z.string(),

  districts: z.preprocess(parseJSON, z.array(z.string())),

  water: z.preprocess(parseJSON, z.array(z.string())),
  soil: z.preprocess(parseJSON, z.array(z.string())),
  heat: z.preprocess(parseJSON, z.array(z.string())),

  sowing_month: z.preprocess(parseJSON, z.array(z.string())),
  sunlight: z.string().trim(),
  
  description: z.string(),

  plant_type: z.string(),
  duration: z.string(),

  season: z.preprocess(parseJSON, z.array(z.string())),
  climate: z.preprocess(parseJSON, z.array(z.string())),

  humidity: z.enum(["low", "medium", "high"]),

  category: z.string(),
  product_id: z.string(),

  availability: z.enum(["in_stock", "out_of_stock"]),

  image_url: z.string().optional(),

  variants: z.preprocess(parseJSON, z.array(variantSchema).min(1)),

  currency: z.literal("INR"),

  brand: z.string(),

  rating: z.preprocess(
    (val) => Number(val),
    z.number().min(0).max(5)
  ),

  reviews: z.preprocess(
    (val) => Number(val),
    z.number().finite()
  )
});