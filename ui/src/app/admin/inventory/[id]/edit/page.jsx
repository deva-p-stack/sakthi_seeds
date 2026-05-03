"use client";


import Link from "next/link";

import { useEffect, useState } from "react";

import {ArrowLeft} from "lucide-react"

import {useParams} from "next/navigation"

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";



export default function Editproduct() { 



 const { id } = useParams();

  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      variants: [{ weight: "", price: "", stock: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants"
  });

  useEffect(() => {
  async function fetchProduct() {
  try {
    const res = await fetch(`/api/admin/product/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    const product = data.data;

    Object.entries(product).forEach(([key, value]) => {
      if (key === "variants") {
        setValue("variants", value);
      } else if (Array.isArray(value)) {
        setValue(key, value.join(", "));
      } else {
        setValue(key, value);
      }
    });
  } catch (err) {
    toast.error("Failed to load product");
  }
}

  if (id) fetchProduct();
}, [id, setValue]);

async function submitUpdate(data) {
  try {
    const formData = new FormData();

    const arrayFields = ["districts","sowing_month","season","water","soil","heat","climate"];

    arrayFields.forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key]
          .split(",")
          .map(v => v.trim())
          .filter(Boolean);
      }
    });

    const formattedData = {
      ...data,
      variants: data.variants.map(v => ({
        weight: String(v.weight),
        price: Number(v.price) || 0,
        stock: Number(v.stock) || 0
      }))
    };

    const { image, ...rest } = formattedData;

    Object.entries(rest).forEach(([key, value]) => {
      formData.append(
        key,
        typeof value === "object" ? JSON.stringify(value) : value
      );
    });

    if (image?.[0]) {
      formData.append("image", image[0]);
    }

    const response = await fetch(`/api/admin/product/${id}`, {
      method: "PUT",
      credentials: "include",
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message || "Update failed");
        return;

    }

    toast.success("Updated successfully");
    router.push("/admin/inventory");

  } catch (err) {
    toast.error(err.message);
  }
}



    return (

        <>
       





<section className="flex flex-col w-full justify-center items-center max-w-5xl  ">

{/* header */}


{/* form  */}
<div className="   w-full max-w-4xl flex  flex-col    hover:shadow-md shadow-sm border border-gray-100 shadow-gray-400 hover:-translate-y-1 duration-300 ease-in-out transition-all  bg-white rounded-2xl p-5 mt-5  ">

{/* heder */}
<div className="flex justify-between px-4 items-center ">
    
    <div>
   <h3 className="text-2xl text-emerald-400 font-semibold text-center">Edit  Seeds</h3>
    </div>

{/* button for back */}
    <div>
        <Link href="/admin/inventory" className="flex items-center bg-emerald-400 px-4 py-2 rounded-full cursor-pointer  duration-300 ease-in-out transition-all  active:scale-95  gap-2 text-sm font-medium  text-white/90 ">
            <ArrowLeft className="w-4 h-4" />
            Back
        </Link>
    </div>



</div>

{/*  onSubmit={handleSubmit(submitRegister)} */}

<form  autoComplete="off" onSubmit={handleSubmit(
  submitUpdate,
  (err) => {
    console.log("VALIDATION ERRORS:", err);
  }
)} className="grid grid-cols-1 md:grid-cols-3  gap-x-6 gap-y-4    p-3">

{/* plant name */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700 "  htmlFor="plantName" >Plant Name</label>
    <input {...register("plant_name")}  className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" type="text" id="plantName" required  placeholder="Enter the plant name" />
{errors.plant_name && <p className="text-red-500 text-xs mt-1">{errors.plant_name.message}</p>}

</div>


{/* region */} 
<div  className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="region">Region</label>
    <input {...register("region")} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" type="text" id="region" required placeholder="Enter the region" />
{errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
</div>


{/* state */}
<div  className="flex flex-col  ">
    <label className="text-xs font-semibold  text-gray-700"  htmlFor="state">state <span className="text-gray-400 font-normal">(comma-separated)</span></label>
   
    <input {...register("state")}   className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" type="text" id="state" required  placeholder="Tamil Nadu, kerala, karnataka" />
{errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}   
</div>

{/* district */}
<div  className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700"  htmlFor="districts">District <span className="text-gray-400 font-normal">(comma-separated)</span></label>
    <input  {...register("districts")}
  
   className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"   type="text" id="districts" required placeholder="e.g., Chennai, Coimbatore" />
{errors.districts && <p className="text-red-500 text-xs mt-1">{errors.districts.message}</p>}
</div>







{/* sowing_month */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="sowing_month">Sowing Month <span className="text-gray-400 font-normal">(comma-separated)</span></label>
    <input    {...register("sowing_month")} 
   className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" type="text" required id="sowing_month" placeholder="e.g., January, February, March" />
{errors.sowing_month && <p className="text-red-500 text-xs mt-1">{errors.sowing_month.message}</p>}
</div>

{/* season */}
<div className="flex flex-col">
    <label className="text-xs font-semibold  text-gray-700  " htmlFor="season">Season <span className="text-gray-400 font-normal">(comma-separated)</span></label>
    <input {...register("season")}
 className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="season" placeholder="e.g., Summer, Winter, Monsoon" />
{errors.season && <p className="text-red-500 text-xs mt-1">{errors.season.message}</p>}

</div>


{/* water */}
<div className="flex flex-col ">
 <label className="text-xs font-semibold  text-gray-700"  htmlFor="water">water <span className="text-gray-400 font-normal">(comma-separated)</span></label>
   
  <input 
{...register("water")}
    
    className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="water" placeholder="e.g., low, Medium" />
   
    
    
         

  {errors.water  && (
    <p className="text-red-500 text-xs mt-1">
      {errors.water.message}
    </p>
  )}
</div>

{/* soil */}
<div className="flex flex-col ">
 <label className="text-xs font-semibold  text-gray-700"  htmlFor="soil">soil <span className="text-gray-400 font-normal">(comma-separated)</span></label>
   


  <input 
   {...register("soil")}
    
    className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="soil" placeholder="e.g., Red Soil, Black Soil" />
   
            
         




{errors.soil && <p className="text-red-500 text-xs mt-1">{errors.soil.message}</p>}
</div>

{/* heat */}
<div className="flex flex-col relative">
  <label className="text-xs font-semibold  text-gray-700"  htmlFor="heat">heat<span className="text-gray-400 font-normal">(comma-separated)</span></label>
   



  <input 
{...register("heat")}
    
    className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="heat" placeholder="Low (15–25°C), High (35–45°C)" />
   
    

 
            
       
  {errors.heat && (
    <p className="text-red-500 text-xs mt-1">
      {errors.heat.message}
    </p>
  )}
</div>



{/* plant type */}
<div className="flex flex-col relative">
  <label className="text-xs font-semibold  text-gray-700" htmlFor="plant_type">
    Plant Type
  </label>

  <select
    {...register("plant_type")}
    id="plant_type"
    className="py-2 mt-1 px-5 rounded-lg appearance-none outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500 bg-white"
    defaultValue=""
  >
    <option value="" disabled> Select plant type</option>
    <option value="leaf_vegetable">Leaf Vegetable</option>
<option value="fruit_plant">Fruit Plant</option>
<option value="root_vegetable">Root Vegetable</option>
<option value="tuber_crop">Tuber Crop</option>
<option value="stem_vegetable">Stem Vegetable</option>

<option value="flower_plant">Flower Plant</option>

<option value="grain_crop">Grain Crop</option>
<option value="pulse_crop">Pulse Crop</option>
<option value="oilseed_crop">Oilseed Crop</option>

<option value="climber">Climber</option>
<option value="creeper">Creeper</option>
<option value="tree">Tree</option>
<option value="shrub">Shrub</option>

  </select>
  <div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>
  {errors.plant_type && (
    <p className="text-red-500 text-xs mt-1">
      {errors.plant_type.message}
    </p>
  )}
</div>

{/* duration */}
<div className="flex flex-col relative">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="duration">Duration</label>


<select
    {...register("duration")}
    id="duration"
    className="py-2 mt-1 px-5 rounded-lg appearance-none outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500 bg-white"
    defaultValue=""
  >

<option value="">duration</option>

<option value="0-15_days">0–15 Days (Very Short)</option>
<option value="15-30_days">15–30 Days</option>
<option value="30-45_days">30–45 Days</option>
<option value="45-60_days">45–60 Days</option>
<option value="60-75_days">60–75 Days</option>
<option value="75-90_days">75–90 Days</option>

<option value="90-120_days">90–120 Days</option>
<option value="120-150_days">120–150 Days</option>
<option value="150-180_days">150–180 Days</option>

<option value="180-240_days">180–240 Days</option>
<option value="240-300_days">240–300 Days</option>
<option value="300-365_days">300–365 Days</option>

<option value="365+_days">More than 1 Year</option>


<option value="730+_days">More than 2 Year</option>


  </select>




<div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>
{errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>}
</div>

{/* sunlight */}
<div className="flex flex-col relative ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="sunlight">Sunlight </label>
   


<select
   {...register("sunlight")}
    id="sunlight"
    className="py-2 mt-1 px-5 rounded-lg appearance-none outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500 bg-white"
    defaultValue=""
  >

  <option value="">sunlight </option>

<option value="full_sun">Full Sun (6–8+ hours)</option>
<option value="partial_sun">Partial Sun (4–6 hours)</option>
<option value="partial_shade">Partial Shade (2–4 hours)</option>
<option value="full_shade">Full Shade (0–2 hours)</option>

<option value="filtered_sunlight">Filtered Sunlight</option>
<option value="direct_sunlight">Direct Sunlight</option>
<option value="indirect_sunlight">Indirect Sunlight</option>
</select>


  <div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>


{errors.sunlight && <p className="text-red-500 text-xs mt-1">{errors.sunlight.message}</p>}
</div>




{/* climate */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="Climate">Climate <span className="text-gray-400 font-normal">(comma-separated)</span></label>
    <input {...register("climate")} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required     type="text" id="climate" placeholder="e.g., temperate, humid" />
{errors.climate && <p className="text-red-500 text-xs mt-1">{errors.climate.message}</p>}
</div>

{/* humidity */}
<div className="flex flex-col relative">
  <label className="text-xs font-semibold text-gray-700" htmlFor="humidity">
    Humidity
  </label>

  <select
    {...register("humidity")}
    id="humidity"
    className="py-2 mt-1 px-5 rounded-lg appearance-none  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
    defaultValue="low"
  >
    <option value="low">Low (20–40%)</option>
    <option value="medium">Medium (40–60%)</option>
    <option value="high">High (60–80%)</option>
    
  </select>
            
            {/* cutsom arrow */}
        <div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

  {errors.humidity && (
    <p className="text-red-500 text-xs mt-1">
      {errors.humidity.message}
    </p>
  )}
</div>


{/* category */}
<div className="flex flex-col relative">
    <label className="text-xs font-semibold  text-gray-700  " htmlFor="category">Category</label>
    
    <select
    {...register("category")}
    id="category"
    className="py-2 mt-1 px-5 appearance-none rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500 bg-white"
    defaultValue=""
  >

    
    
<option value="" >category Seeds</option>
<option value="vegetable_seeds">Vegetable Seeds</option>
<option value="fruit_seeds">Fruit Seeds</option>
<option value="grain_seeds">Grain Seeds</option>
<option value="pulse_seeds">Pulse Seeds</option>
<option value="oilseed_seeds">Oilseed Seeds</option>

<option value="flower_seeds">Flower Seeds</option>
<option value="herb_seeds">Herb Seeds</option>
<option value="spice_seeds">Spice Seeds</option>

<option value="fodder_seeds">Fodder Seeds</option>
<option value="plant_saplings">Plant Saplings</option>
<option value="organic_products">Organic Products</option>
  </select>
    
  <div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

    {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
   
</div>

{/* product_id */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold text-gray-700" htmlFor="product_id">Product ID</label>
    <input {...register("product_id")} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="product_id" placeholder="Enter the product ID" />
{errors.product_id && <p className="text-red-500 text-xs mt-1">{errors.product_id.message}</p>}
</div>

{/* availability */}
<div className="flex flex-col relative">
  <label className="text-xs font-semibold text-gray-700" htmlFor="availability">
    Availability
  </label>

  <select
    {...register("availability")}
    id="availability"
    className="py-2 mt-1 px-5 rounded-lg appearance-none  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
    defaultValue="in_stock"
  >
    
    <option value="in_stock">in_stock</option>
    <option value="out_of_stock">out_of_stock</option>
    
  </select>
            
            {/* cutsom arrow */}
        <div className="absolute top-7 right-2 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

  {errors.availability && (
    <p className="text-red-500 text-xs mt-1">
      {errors.availability.message}
    </p>
  )}
</div>

{/* reviews */}

<div className="flex flex-col ">
    <label className="text-xs font-semibold text-gray-700" htmlFor="reviews">Reviews</label>
    <input    min={0}   {...register("reviews", { valueAsNumber: true })}  className="py-2 appearance-none mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="number" id="reviews" placeholder="Enter the number of reviews" />
{errors.reviews && <p className="text-red-500 text-xs mt-1">{errors.reviews.message}</p>}
</div>








{/* currency */}

<div className="flex flex-col ">   
    <label className="text-xs font-semibold text-gray-700" htmlFor="currency">Currency</label>
    <select  {...register("currency")} className="py-2 mt-1 px-5 rounded-lg appearance-none outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required id="currency">
      <option value="INR">INR</option>
    </select>
{errors.currency && <p className="text-red-500 text-xs mt-1">{errors.currency.message}</p>}
</div>

{/* brand */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="brand">Brand</label>
    <input defaultValue="SakthiAgriSeeds" {...register("brand")} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  required type="text" id="brand" placeholder="Enter the brand" />
{errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand.message}</p>}
</div>  

{/* rating */}
<div className="flex flex-col ">
    <label className="text-xs font-semibold text-gray-700 " htmlFor="rating">Rating</label>
    <input   {...register("rating", { valueAsNumber: true })} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="number" id="rating" placeholder="Enter the rating" />
{errors.rating && <p className="text-red-500 text-xs mt-1">{errors.rating.message}</p>}
</div>


<div className="col-span-1 md:col-span-3">
  <label className="text-xs font-semibold text-gray-700">Variants</label>

  {fields.map((item, index) => (
    <div key={item.id} className="flex gap-3  md:flex-row flex-col  items-center justify-around mb-2">

      <input
        {...register(`variants.${index}.weight`)}
        placeholder="Weight (g)"
        type="text"
        className="py-2 mt-1 px-5 rounded-lg w-full  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
      />

      <input
        {...register(`variants.${index}.price`,{ valueAsNumber: true })}
        placeholder="Price"
        type="number"
        className="py-2 mt-1 px-5 rounded-lg  w-full outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
      />

      <input
        {...register(`variants.${index}.stock`,{ valueAsNumber: true })}
        placeholder="Stock"
        type="number"
       className="py-2 mt-1 px-5 rounded-lg  w-full outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"
      />

      <button
        type="button"
        onClick={() => remove(index)}
        className="text-red-500 px-4 py-2 w-full rounded-lg border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200 active:scale-95 cursor-pointer"
      >
        
        Remove
      </button>
    </div>
  ))}

 <button
  type="button"
  onClick={() => append({ weight: "", price: "", stock: "" })}
  className="
    mt-4
    flex items-center gap-2
    px-5 py-2.5
    rounded-md
    bg-emerald-400
    text-white text-sm font-medium
    shadow-sm hover:shadow-md
    cursor-pointer
    transition-all duration-200 ease-in-out
    active:scale-95
    focus:outline-none focus:ring-2 focus:ring-emerald-300
  "
>
  Add Variant
</button>
</div>




{/* image */}
<div className="flex flex-col col-span-1 md:col-span-3  " >
    <label className="text-xs font-semibold text-gray-700 " htmlFor="image">Upload Image</label>
    <input   {...register("image")} className="py-3 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="file" id="image" placeholder="Enter the image URL" />
{errors.image && (<p className="text-red-500 text-xs mt-1">   {errors.image.message}</p>)}
</div>



{/* descrpti */} 
<div className="flex flex-col col-span-1 md:col-span-3 ">
    <label className="text-xs font-semibold  text-gray-700" htmlFor="description">Description</label>
    <textarea {...register("description")} className="py-2 mt-1 px-5 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required id="description" placeholder="Enter the description"></textarea>  
{errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
</div>



{/* button */}
<div className="w-full col-span-full flex justify-center mt-5">
  <button
    type="submit"
    className={`
      w-[80%]
      text-white
      font-semibold
      text-md
      px-6 py-3
      rounded-lg
      shadow-md
      hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-emerald-300
      transition-all duration-200 ease-in-out
      active:scale-95
      cursor-pointer
      bg-emerald-400
    `}
  >
    Submit
  </button>
</div>


</form>

</div>

</section> 
        
     









        
        </>
    );

}
