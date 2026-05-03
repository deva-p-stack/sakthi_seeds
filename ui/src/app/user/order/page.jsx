import Image from "next/image";

import {Trash} from "lucide-react";



export default function order(){


return(


<>

<section className="flex flex-col p-5 ">


{/* header title  */}
<div className=" flex justify-between bg-white shadow-xs hover:-translate-y-1 duration-300 ease-in-out transition-all hover:shadow-lg   w-full p-5 rounded-2xl items-center">

{/* left  */}
<div className=" flex flex-col space-y-1 ">

<h3 className="font-bold text-2xl hover:text-emerald-400  text-black/90">My Current Order </h3>

<p className="text-gray-500 text-xs ">Pick and confirm the plants you want to grow this season. </p>
</div>


{/* right */}
<div className=" flex gap-3 md:flex-row flex-col  ">


 <button className=" text-sm text-emerald-600 border border-gray-200  hover:bg-emerald-600 hover:text-white   duration-300 ease-in-out transition-all font-semibold cursor-pointer rounded-lg  px-6 py-2  "  type="button">Remove All </button>    

 <button  className="text-sm    hover:text-white  bg-emerald-500 text-white  active:scale-[0.97] hover:bg-emerald-600 px-5 py-2 rounded-lg  font-medium cursor-pointer "   type="button">Continue Browsing </button>    


</div>

</div>


{/* container below */}
<div className=" flex justify-between p-5  gap-4  items-center w-full max-w-5xl h-auto  mt-3   ">




{/* left */}
<div className="flex flex-col gap-3 ">

{/* first card  */}
<div className = "w-full max-w-lg h-auto  duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm  flex  gap-2 p-5 rounded-2xl bg-white ">



{/* image section left   */}
<div className="flex relative w-40   h-40 rounded-lg   overflow-hidden ">

 <Image
    src="/image/okra.jpg"
    alt="Okra"
    fill
    className="object-cover absolute rounded-lg  transition-transform duration-300 hover:scale-105"
  />

</div>

{/* content description */}
<div className="">

<div className="pl-1 mt-3">
    <h3 className="font-semibold text-lg ">Okra</h3>
    <p className="text-gray-500 text-xs pb-3  ">Lady’s finger</p>
</div>


{/* slection */}
<div className="flex items-center  gap-3 justify-center mt-8   ">


{/* grams */}
<div className="relative w-full">
  <select
    name="grams_id"
    id="grams_id"
    defaultValue=""
    className="w-20 appearance-none  px-3 py-2 pr-8 text-xs bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
  >
    <option value="" disabled>
      Select quantity
    </option>
    <option className="" value="50">50 g</option>
    <option value="100">100 g</option>
    <option value="250">250 g</option>
  </select>

  {/* Custom arrow */}
  <div className="pointer-events-none absolute top-1.5  left-14  flex items-center text-gray-300">
    ▼
  </div>
</div>


{/* increase button */}


<div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden w-full   shadow-sm">

  {/* Decrease */}
  <button
    type="button"
    className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-100 active:scale-95 transition"
  >
    −
  </button>

  {/* Input */}
  <input
    type="text"
    name="increase"
    id="increase"
    value="1"
    readOnly
    className="w-5  text-center text-sm font-medium outline-none"
  />

  {/* Increase */}
  <button
    type="button"
    className="px-3 text-xs py-2 text-gray-600 hover:bg-gray-100 active:scale-95 transition"
  >
    +
  </button>

</div>



</div>



</div>


{/* price and delete button */}
<div className="flex flex-col w-24  gap-4   p-2   h-auto  justify-between items-center">

    {/* delte button */}
    <div className="bg-gray-200 text-gray-700 p-3 hover:text-white  rounded-full cursor-pointer hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition-all ">
        <Trash  className="  " size={18}></Trash>
    </div>

   <div className="flex justify-between gap-1 flex-col items-center text-xs">
  <span className="text-gray-500 text-[10px] ">UNIT PRICE</span>
  <span className="font-medium text-xl text-emerald-800">₹30</span>
</div>

</div>



{/* left end */}
</div>


{/* second card */}

<div className = "w-full max-w-lg h-auto  duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm   flex  gap-2 p-5 rounded-2xl bg-white ">



{/* image section left   */}
<div className="flex relative w-40   h-40 rounded-lg   overflow-hidden ">

 <Image
    src="/image/brinjalai.jpg"
    alt="brinjalai "
    fill
    className="object-cover absolute rounded-lg  transition-transform duration-300 hover:scale-105"
  />

</div>

{/* content description */}
<div className="">

<div className="pl-1 mt-3">
    <h3 className="font-semibold text-lg ">Brinjal </h3>
    <p className="text-gray-500 text-xs pb-3  ">brinjal plant </p>
</div>


{/* slection */}
<div className="flex items-center  gap-3 justify-center mt-8   ">


{/* grams */}
<div className="relative w-full">
  <select
    name="grams_id"
    id="grams_id"
    defaultValue=""
    className="w-20 appearance-none  px-3 py-2 pr-8 text-xs bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
  >
    <option value="" disabled>
      Select quantity
    </option>
    <option className="" value="50">50 g</option>
    <option value="100">100 g</option>
    <option value="250">250 g</option>
  </select>

  {/* Custom arrow */}
  <div className="pointer-events-none absolute top-1.5  left-14  flex items-center text-gray-300">
    ▼
  </div>
</div>


{/* increase button */}


<div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden w-full   shadow-sm">

  {/* Decrease */}
  <button
    type="button"
    className="px-3 py-2 text-xs text-gray-600 hover:bg-gray-100 active:scale-95 transition"
  >
    −
  </button>

  {/* Input */}
  <input
    type="text"
    name="increase"
    id="increase"
    value="1"
    readOnly
    className="w-5  text-center text-sm font-medium outline-none"
  />

  {/* Increase */}
  <button
    type="button"
    className="px-3 text-xs py-2 text-gray-600 hover:bg-gray-100 active:scale-95 transition"
  >
    +
  </button>

</div>



</div>



</div>


{/* price and delete button */}
<div className="flex flex-col w-24  gap-4   p-2   h-auto  justify-between items-center">

    {/* delte button */}
    <div className="bg-gray-200 text-gray-700 p-3 hover:text-white  rounded-full cursor-pointer hover:bg-gray-700 hover:text-white duration-300 ease-in-out transition-all ">
        <Trash  className="  " size={18}></Trash>
    </div>

   <div className="flex justify-between gap-1 flex-col items-center text-xs">
  <span className="text-gray-500 text-[10px] ">UNIT PRICE</span>
  <span className="font-medium text-xl text-emerald-800">₹30</span>
</div>

</div>



{/* left end */}
</div>



</div>






{/* right */}
<div className="flex flex-col  w-full  h-[65vh]     ">

{/* first container  */}
<div className=" bg-white h-auto py-5 duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm   px-3 w-full rounded-2xl "> 

    {/* header title  */}
<div>
    <div className="  p-2">
<h3 className="font-bold    text-emerald-800 text-2xl pb-3 ">Order Summary</h3>

{/* cutoms line */}
<div className="w-full h-[0.25] rounded-2xl mt-2   bg-gray-300 "></div>


</div>




</div>


{/* sub total */}
<div className="flex flex-col space-y-4 ">


{/* price list  */}
<div className="flex  justify-between items-center px-3">
<h3 className="text-gray-500  text-md ">Subtotal(3 items)</h3>
<p className="font-bold text-md  ">₹70.00</p>
</div>


{/* shipping */}

<div className="flex  justify-between items-center px-3">
<h3 className="text-gray-500  text-md ">Estimated Shipping</h3>
<p className="font-bold text-md ">₹100.00</p>
</div>


{/* taxes */}
<div className="flex  justify-between items-center px-3">
<h3 className="text-gray-500  text-md ">Taxes</h3>
<p className="font-bold text-md ">₹100.00</p>
</div>


{/* cutoms line */}
<div className="w-full h-[0.25] rounded-2xl mt-2   bg-gray-300 "></div>


<div className="px-5 flex justify-between items-center  ">
   

<div className="flex  flex-col justify-between   items-center">
        <p className="text-emerald-600 text-sm *: font-medium"> GRAND TOTAL </p>
    <h3 className="text-emerald-600 text-2xl font-bold">₹650</h3>
</div>


{/* right  */}
<div className="px-3 py-1 rounded-2xl bg-gray-100  shadow-sm ">
     <p className="text-xs text-emerald-500">Earns 42 pts </p>
</div>





</div>

{/* button */}
<div className="flex items-center justify-center">
    <button className="px-5 py-4 cursor-pointer hover:scale-101 duration-300 ease-in-out transition-all font-semibold text-sm shadow-sm  hover:shadow-lg active:scale-95   rounded-2xl text-white bg-emerald-500 "  type="button">Finalize Planting Order</button>
</div>

<div>
    <p className="text-xs  text-center text-gray-500">Don’t wait — buy now and enjoy freshness today</p>
</div>
{/*  */}


</div>

</div>



{/* second container */}
<div>

</div>


{/* right end  */}
</div>


</div>




</section>

</>


);


}