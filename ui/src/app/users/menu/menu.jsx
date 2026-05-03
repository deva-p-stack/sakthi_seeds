
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import {ShoppingCart,Heart} from "lucide-react"

import { toast } from "sonner";
 import Link from "next/link";






export default function MenuList() {

  const [selectedVariants, setSelectedVariants] = useState({});

  const handleVariantChange = (productId, variantId, product) => {
  const selected = product.variants.find(v => v._id === variantId);

  setSelectedVariants((prev) => ({
    ...prev,
    [productId]: selected
  }));
};

// search 







  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/guest/products");
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch products");
      }

      console.log("ALL PRODUCTS:", result.data);
    setProducts(result.data || []);
    } catch (err) {
      console.error("GET error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  
  const handleAddToCart = () => {
   
  const user = localStorage.getItem("token"); // or your auth check

  if (!user) {
    // 
    toast("Please login first to add to cart", {
    type: "warning",
  });
    // redirect the login page 
    setTimeout(() => {
      router.push("/login");
    }, 2000);

    return;
  }

  }

   const [products, setProducts] = useState([]);

  const [filters, setFilters] = useState({
  search: "",
  category: "",
  plant_type: "",
  districts: [],
  sowing_month: "",
  season: "",
  water: "",
  heat: "",
  sunlight: "",
  duration: "",
  humidity: "",
  climate: "",
  soil: "",
});


  const handleChange = (e) => {
  const { id, value } = e.target;

  setFilters((prev) => ({
    ...prev,
    [id]: value,
  }));
};



 const filteredProducts = products.filter((item) => {
  return (
    (!filters.search ||
      item.plant_name?.toLowerCase().includes(filters.search.toLowerCase())) &&

    (!filters.category || item.category === filters.category) &&

    (!filters.plant_type || item.plant_type === filters.plant_type) &&

    (!filters.season || (item.season || []).includes(filters.season)) &&

    (!filters.water ||
      (item.water || []).some(w =>
        w?.toLowerCase?.().includes(filters.water.toLowerCase())
      )) &&

    (!filters.heat ||
      (item.heat || []).some(h =>
        h?.toLowerCase?.().includes(filters.heat.toLowerCase())
      )) &&

    (!filters.sunlight || item.sunlight === filters.sunlight) &&

    (!filters.soil || (item.soil || []).includes(filters.soil)) &&

    (!filters.climate || (item.climate || []).includes(filters.climate)) &&

    (!filters.districts.length ||
      filters.districts.some((d) =>
        (item.districts || [])
          .map((x) => x.toLowerCase())
          .includes(d.toLowerCase())
      ))
  );
});
 



const handleMultiSelect = (e) => {
  const value = e.target.value;

  setFilters((prev) => {
    const alreadySelected = prev.districts.includes(value);

    return {
      ...prev,
      districts: alreadySelected
        ? prev.districts.filter((item) => item !== value)
        : [...prev.districts, value],
    };
  });
};



  return (
<>


{/* search container */}
    <div className="  mt-3 max-w-7xl bg-white/30 border border-gray-300 shadow-sm shadow-gray-200  flex flex-col md:flex-row px-3 py-5 hover:-translate-y-1 duration-300 ease-in-out transition-all rounded-2xl gap-3 flex-wrap ">


{/* search header */}
<div className=" flex items-center flex-wrap justify-center gap-3 ">


    {/* search bar */}
    <div className=" flex flex-col relative">

<input   value={filters.search}
  onChange={handleChange} className="outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500  bg-gray-50 rounded-lg py-2 px-12 text-md  " type="search" name="search" id="search" placeholder="Enter the seeds name" />
<Search className="absolute top-3 left-5 text-gray-400  " size={14}></Search>

    </div>

    {/* category */}
  <div className="flex flex-col relative">
    
    <select
    // {...register("category")}
    onChange={handleChange}
value={filters.category}

    id="category"
    className="py-2  pl-4 pr-6 text-md appearance-none rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500 bg-gray-50"
    defaultValue=""
  >

    
    
<option value="" >Select seeds</option>
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
    
  <div className="absolute top-2  right-0 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
</div>



{/*   Plant type  select     */}

<div className="flex flex-col relative">

    <select
    
    onChange={handleChange}
value={filters.plant_type}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="plant_type"  >
 
   <option value="" > plant type</option>
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


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>



{/* districts */}
<div  className="flex flex-col relative  ">
  <select    
  
  value={filters.districts}
  onChange={handleMultiSelect}
  
  className="py-2  pl-4  pr-5 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"   type="text" id="districts" required placeholder="Select Your Districts" >
   {/*  */}

<option value=""> District</option>
  <option>Ariyalur</option>
  <option>Chengalpattu</option>
  <option>Chennai</option>
  <option>Coimbatore</option>
  <option>Cuddalore</option>
  <option>Dharmapuri</option>
  <option>Dindigul</option>
  <option>Erode</option>
  <option>Kallakurichi</option>
  <option>Kanchipuram</option>
  <option>Kanyakumari</option>
  <option>Karur</option>
  <option>Krishnagiri</option>
  <option>Madurai</option>
  <option>Mayiladuthurai</option>
  <option>Nagapattinam</option>
  <option>Namakkal</option>
  <option>Nilgiris</option>
  <option>Perambalur</option>
  <option>Pudukkottai</option>
  <option>Ramanathapuram</option>
  <option>Ranipet</option>
  <option>Salem</option>
  <option>Sivaganga</option>
  <option>Tenkasi</option>
  <option>Thanjavur</option>
  <option>Theni</option>
  <option>Thoothukudi</option>
  <option>Tiruchirappalli</option>
  <option>Tirunelveli</option>
  <option>Tirupattur</option>
  <option>Tiruppur</option>
  <option>Tiruvallur</option>
  <option>Tiruvannamalai</option>
  <option>Tiruvarur</option>
  <option>Vellore</option>
  <option>Viluppuram</option>
  <option>Virudhunagar</option>

</select>
    
  <div className="absolute top-2  right-0 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>
   

</div>







{/* sowing_month */}
<div className="flex flex-col relative ">
  
    <select 
    
      onChange={handleChange}
value={filters.sowing_month}
    
    className="py-2 bg-gray-50 appearance-none  px-4 rounded-lg  outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="sowing_month" placeholder="e.g., January, February, March" >
    {/* {...register("sowing_month")}  */}
   

<option value="">Month</option>
  <option value="1">January</option>
  <option value="2">February</option>
  <option value="3">March</option>
  <option value="4">April</option>
  <option value="5">May</option>
  <option value="6">June</option>
  <option value="7">July</option>
  <option value="8">August</option>
  <option value="9">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>

   
   </select>
   
    <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   
   
   
   
</div>


{/* season */}
<div className="flex flex-col relative">

    <select
    
      onChange={handleChange}
value={filters.season}
    className="py-2  pl-4 pr-10 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="season" placeholder="e.g., Summer, Winter, Monsoon" >
 <option value="">Season</option>
  <option value="summer">Summer</option>
  <option value="rainy">Rainy</option>
  <option value="winter">Winter</option>

</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>


{/* water */}
<div className="flex flex-col relative">

    <select 
      onChange={handleChange}
value={filters.water}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="water"  >
 <option value="">Water</option>
  <option value="summer">low</option>
  <option value="rainy">medium</option>
  <option value="winter">high</option>

</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>





{/* heat */}
<div className="flex flex-col relative">

    <select 
      onChange={handleChange}
value={filters.heat}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="heat"  >
 

  <option value="">Temperature</option>
  <option value="Very Low (Below 15°C)">Very Low (Below 15°C)</option>
  <option value="Low (15–25°C)">Low (15–25°C)</option>
  <option value="Moderate (25–35°C)">Moderate (25–35°C)</option>
  <option value="High (35–45°C)">High (35–45°C)</option>
  <option value="Very High (Above 45°C)">Very High (Above 45°C)</option>

</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>

{/* sunlight */}
<div className="flex flex-col relative">

    <select 
      onChange={handleChange}
value={filters.sunlight}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="sunlight"  >
 

<option value="">Sunlight Range</option>

<option value="full_sun">Full Sun (6–8+ hours)</option>
<option value="partial_sun">Partial Sun (4–6 hours)</option>
<option value="partial_shade">Partial Shade (2–4 hours)</option>
<option value="full_shade">Full Shade (0–2 hours)</option>

<option value="filtered_sunlight">Filtered Sunlight</option>
<option value="direct_sunlight">Direct Sunlight</option>
<option value="indirect_sunlight">Indirect Sunlight</option>


</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>



{/* duration */}
<div className="flex flex-col relative">

    <select
      onChange={handleChange}
value={filters.duration}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="duration"  >
 


<option value="">duration</option>

<option value="0-15_days">0–15 Days</option>
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


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>






{/* Humdinity */}

<div className="flex flex-col relative">

    <select
      onChange={handleChange}
value={filters.humidity}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="Humidity"  >
 

    <option value="">Humidity</option>
    <option value="low">Low (20–40%)</option>
    <option value="medium">Medium (40–60%)</option>
    <option value="high">High (60–80%)</option>



</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>


{/* climate  */}


<div className="flex flex-col relative">

    <select
    
      onChange={handleChange}
value={filters.climate}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500"  id="climate"  >
 
   <option value=""> Climate</option>
  <option value="tropical">Tropical</option>
  <option value="subtropical">Subtropical</option>
  <option value="temperate">Temperate</option>
  <option value="arid">Arid</option>
  <option value="semi_arid">Semi Arid</option>
  <option value="humid">Humid</option>
  <option value="humid_subtropical">Humid Subtropical</option>
  <option value="coastal">Coastal</option>
  <option value="mountain">Mountain</option>
  <option value="monsoon">Monsoon</option>
  <option value="dry">Dry</option>
  <option value="wet">Wet</option>



</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>



{/* soil */}
<div className="flex flex-col relative">

    <select 
    
      onChange={handleChange}
value={filters.soil}
    
    className="py-2  pl-4 pr-8 appearance-none rounded-lg  bg-gray-50 outline-none border border-gray-300 focus:ring-2 focus:ring-gray-500" required type="text" id="soil"  >
 <option value="">Soil Type</option>
  <option value="red soil">Red Soil</option>
  <option value="black soil">Black Soil</option>
  <option value="alluvial soil">Alluvial Soil</option>
  <option value="sandy soil">Sandy Soil</option>
  <option value="clay soil">Clay Soil</option>
  <option value="loamy soil">Loamy Soil</option>
  <option value="silty soil">Silty Soil</option>
  <option value="peaty soil">Peaty Soil</option>
  <option value="chalky soil">Chalky Soil</option>
  <option value="laterite soil">Laterite Soil</option>

</select>


  <div className="absolute top-2  right-1 text-gray-700 flex items-center px-2 pointer-events-none">
            ⏷
        </div>

   
   

</div>









{/* search header container end on the below */}
</div>


{/* search container div end below */}
    </div>


{/* card container */}
 <div className="p-6">

    
      {loading && <p className="text-gray-500">Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 justify-items-center">
        {filteredProducts.map((item) => {

 const selectedVariant = selectedVariants[item._id] || item.variants?.[0];

  return (

      <div
            key={item._id}
            className="bg-white rounded-2xl w-full max-w-xs  transition-all  hover:-translate-y-1 duration-300 ease-in-out  shadow-md overflow-hidden hover:shadow-xl "
          >
            <div className="relative w-full h-52 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.image_url}
                  alt={item.plant_name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* stock */}
               {item.availability === "in_stock" && (
  <span className="absolute bottom-3 left-3 flex items-center gap-1 px-3 py-1 text-[11px] font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-lg border border-white/20 backdrop-blur-md">
    
  
     Stock
  </span>
)}

                {/* wishlist  */}
               
  <div className="w-10 h-10 absolute right-3 top-3 flex items-center justify-center backdrop-blur-md border border-gray-200 rounded-full shadow-sm cursor-pointer transition-all duration-200 hover:scale-110 bg-red-50">
    <Heart
      size={20}
      className="text-red-500 transition-colors duration-200"
    />
  </div>


              </div>

            <div className="p-4 space-y-2">

                  <div className=" flex justify-between">

                  {/* left  */}
                  <div>
                    {/* variants */}
      



              <h2 className="text-xl font-bold">
                {item.plant_name}
              </h2>
                  </div>

          {/* right */}
          <div>

             <select
  className=" px-4 py-1 relative outline-none  border-gray-400  text-xs gap-1 flex text-center   items-center justify-center  appearance-none rounded-full   border rounded-lg"
  onChange={(e) => {
    const selected = item.variants.find(
      (v) => v._id === e.target.value
    );

    setSelectedVariants((prev) => ({
      ...prev,
      [item._id]: selected,
    }));
  }}
>
  {item.variants?.map((variant) => (
    <option key={variant._id}  value={variant._id}>
      {variant.weight} g
    </option>
  ))}

<div className="absolute top-1 right-1 text-gray-500 ">
  ⏷
</div>

</select>

          </div>


                  </div>


              <p className="text-sm text-gray-500">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                  
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 border">
                    {item.category}
                  </span>

                  {item.soil?.map((soil, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
                     🌱  {soil}
                    </span>
                  ))}

                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
                    ☀️ {item.sunlight}
                  </span>

                  <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 border border-purple-300">
                    ⏱️ {item.duration}
                  </span>

                 

                  <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
                     💧 {item.water}
                  </span>


                   <div className="flex flex-wrap gap-2">
                              {item.season?.map((season, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full border border-purple-300"
                                >
                                  🌦 {season}
                                </span>
                              ))}
                            </div>

                 

                 


                </div>


                <div className="flex items-center justify-between px-3 mt-4 gap-3">

  {/* Price */}
  <div className="flex items-center justify-center ">
    <span className="text-lg font-bold text-green-600">
      ₹ {selectedVariant?.price}
    </span>

  </div>

  {/* Add to Cart Button */}
  <button
    onClick={handleAddToCart}
    className="flex items-center justify-center cursor-pointer w-11 h-11 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-200"
  >
    <ShoppingCart size={18} />
  </button>

</div>
                            

              

            </div>
          </div>

  )})}   
          
           





        
      
      </div>
    </div>


    </>
);
}



