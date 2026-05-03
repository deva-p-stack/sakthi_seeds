import { z } from "zod";

const allowedWaterLevels = ["low", "medium", "high"];

const allowedStates = [
  "andhra pradesh","arunachal pradesh","assam","bihar","chhattisgarh",
  "goa","gujarat","haryana","himachal pradesh","jharkhand",
  "karnataka","kerala","madhya pradesh","maharashtra","manipur",
  "meghalaya","mizoram","nagaland","odisha","punjab",
  "rajasthan","sikkim","tamil nadu","telangana","tripura",
  "uttar pradesh","uttarakhand","west bengal",
  "andaman and nicobar islands","chandigarh","dadra and nagar haveli and daman and diu",
  "delhi","jammu and kashmir","ladakh","lakshadweep","puducherry"
];

const months = [
  "january","february","march","april","may","june",
  "july","august","september","october","november","december"
];

const allowedHeatValues = [
  "Very Low (Below 15°C)",
  "low (15–25°C)",
  "moderate (25–35°C)",
  "high (35–45°C)",
  "very High (Above 45°C)"
];

const validClimates = [
  "tropical",
  "subtropical",
  "temperate",
  "arid",
  "semi_arid",
  "humid",
  "humid_subtropical",
  "coastal",
  "mountain",
  "monsoon",
  "dry",
  "wet"
];

const allowedSoilTypes = [
  "red soil",
  "black soil",
  "alluvial soil",
  "sandy soil",
  "clay soil",
  "loamy soil",
  "silty soil",
  "peaty soil",
  "chalky soil",
  "laterite soil"
 
];


const commaSeparatedEnumArray = (allowedValues, fieldName) =>
  z
    .string()
    .min(1, `${fieldName} is required`)
    .transform((val) =>
      // remove duplicates and empty values, trim whitespace
      [...new Set(  
        val
          .split(",")
          .map(v => v.trim())
          .filter(Boolean)
      )]
    )
    .refine(
      (arr) => arr.every(v => allowedValues.includes(v)),
      {
        message: `Invalid ${fieldName} value`,
      }
    );




export const addSchema = z.object({
  plant_name: z.string().min(1, "Plant name is required"),

  region: z.string().min(1, "Region is required"),

  // state
  state: commaSeparatedEnumArray(allowedStates, "state"),

  districts: z
    .string()
    .min(1, "Districts are required")
    .transform(val =>
      [...new Set(val.split(",").map(v => v.trim()).filter(Boolean))]
    ),

  //  water
  water: commaSeparatedEnumArray(allowedWaterLevels, "water"),

  // soil
  soil: commaSeparatedEnumArray(allowedSoilTypes, "soil"),

  // heat
  heat: commaSeparatedEnumArray(allowedHeatValues, "heat"),

  // months
  sowing_month: commaSeparatedEnumArray(months, "sowing month"),

  sunlight: z.string().min(1, "Sunlight requirement is required"),

  description: z.string().min(5, "Description must be at least 5 characters"),

  plant_type: z.string().min(1, "Plant type is required"),

  duration: z.string().min(1, "Duration is required"),

  season: z
    .string()
    .min(1, "Season is required")
    .transform(val =>
      [...new Set(val.split(",").map(v => v.trim()).filter(Boolean))]
    ),

  climate: commaSeparatedEnumArray(validClimates, "climate"),

  humidity: z.enum(["low", "medium", "high"], {
    errorMap: () => ({
      message: "Humidity must be low, medium, or high",
    }),
  }),

  category: z.string().min(1, "Category is required"),

  product_id: z.string().min(1, "Product ID is required"),

  availability: z.enum(["in_stock", "out_of_stock"]),

  image: z
    .any()
    .refine((files) => files?.length === 1, "Image is required")
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024,
      "Max file size is 5MB"
    )
    .refine(
      (files) =>
        ["image/jpeg", "image/png", "image/webp"].includes(files?.[0]?.type),
      "Only JPG, PNG, WEBP allowed"
    ),

  variants: z.array(
    z.object({
      weight: z
        .string()
        .min(1, "Weight is required")
        .regex(/^\d+$/, "Weight must be number"),

      price: z.coerce.number().positive(),

      stock: z.coerce.number().int().nonnegative(),
    })
  ),

  currency: z.string().default("INR"),

  brand: z.string().min(1, "Brand name is required"),

  rating: z.coerce.number().min(0).max(5),

  reviews: z.coerce.number().int().nonnegative(),
});




