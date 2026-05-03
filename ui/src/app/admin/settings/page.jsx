"use client";
import Image from "next/image";
import {Bookmark,Cog,BellRing} from "lucide-react"
import { useState } from "react";


export default  function  Settings(){

     const [isOn, setIsOn] = useState(false);

return(

<>
<section className=" flex  flex-col ">


{/* header */}
<div className=" flex justify-between w-full max-w-5xl  items-center gap-2 bg-white rounded-2xl p-5 ">

{/* left */}
<div className=" flex flex-col">

<h3 className="text-emerald-600 text-xl   font-semibold ">Platform Configuration</h3>
<p className=" text-xs text-gray-500">Manage and customize your platform settings for optimal performance and control.</p>


</div>

{/* right */}
<div className="">


<button type="button" className="flex gap-1  bg-emerald-500 px-4 py-2 rounded-2xl hover:scale-101 active:scale-95 duration-300 ease-in-out transition-all  cursor-pointer shadow-xs hover:shadow-s text-xs text-white  items-center justify-center  hover:shadow-emerald-300 ">
    
    <Bookmark size={18}></Bookmark>
    
    Save AllChanges</button>

</div>


</div>



{/* two container layout  */}
<div className=" w-full max-w-5xl rounded-2xl p-5 grid-cols-1 grid  md:grid-cols-2 ">

{/* left General settings */}
<div className=" bg-white p-5 rounded-2xl hover:-translate-y-1 duration-300 ease-in-out max-w-md w-full ">


{/* header */}
<div className="flex gap-3 items-center ">


<div className=" bg-emerald-100  text-emerald-500 w-12 h-12 rounded-lg flex justify-center items-center ">
<Cog></Cog>
</div>

<div>
<h3 className=" font-semibold text-xl tracking-wide  text-black "> General Settings</h3>
</div>

</div>

{/* forms */}
<div>

<form  className=" grid grid-cols-2  mt-4 space-y-4 ">



{/* name */}
<div className="w-full">
<label className="text-gray-500 text-[10px]   " htmlFor="plt_name">PLATFROM NAME </label>

<input type="text" className=" py-2 px-3 text-xs rounded-lg outline-none  bg-white border border-gray-300 shadow-sm shadow-gray-100 "  name="plt_name" id="plt_name" placeholder="Sakthi Agri Seeds" />

</div>


{/* email id */}
<div className="w-full">
<label className="text-gray-500 text-[10px] " htmlFor="plt_email">CONTACT EMAIL </label>

<input type="text" className=" py-2 px-3 text-xs rounded-lg outline-none bg-white border border-gray-300 shadow-sm shadow-gray-100  "  name="plt_email" id="plt_email" placeholder="abroova2002@gmail.com" />
</div>



{/* phone number */}
<div className="w-full">
<label className="text-gray-500 text-[10px] " htmlFor="plt_email">PHONE NUMBER </label>

<input type="tel" className=" py-2 px-3 text-xs rounded-lg outline-none bg-white border border-gray-300 shadow-sm shadow-gray-100  "  name="plt_phone" id="plt_phone" placeholder="+91 8610297625" />
</div>


{/* default timer */}
<div className="col-span-full flex flex-col   space-y-1">
<label className="text-gray-500 text-[10px]  " htmlFor="plt_email">DEFAULT TIMEZONE  </label>

 <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">

<option value="UTC+0">Greenwich Mean Time (GMT) - UTC+0</option>
  <option value="UTC+5:30">India Standard Time (IST) - UTC+5:30</option>
  <option value="UTC+1">Central European Time (CET) - UTC+1</option>
  <option value="UTC+3">Arabian Standard Time (AST) - UTC+3</option>
  <option value="UTC+8">China Standard Time (CST) - UTC+8</option>
  <option value="UTC+10">Australian Eastern Time (AET) - UTC+10</option>
</select>



</div>


{/* button */}
<div className=" col-span-full  flex w-full  items-center justify-center">
    <button className=" bg-emerald-400 w-[80%] py-2.5 rounded-lg  duration-300 ease-in-out transition-all text-white text-md outline-none  font-semibold cursor-pointer active:scale-95 hover:scale-101 hover:bg-white hover:border hover:border-gray-300  hover:shadow-gray-300 hover:text-black  font-semibold  " type="button"> submit</button>
</div>





    
</form>




</div>

</div>


{/* right  smart alert*/}
<div className="  bg-white p-5 rounded-2xl w-full max-w-lg    hover:-translate-y-1 duration-300 ease-in-out shadow shadow-gray-300 hover:shadow-sm transition-all">


{/* header */}
<div className="flex gap-2 items-center">

<div className="w-12 h-12 rounded-lg bg-red-200 text-red-500 flex items-center justify-center">
    <BellRing className="" size={20} ></BellRing>
</div>

<h3 className=" text-xl font-semibold text-black">Smart  Alerts</h3>

</div>


{/* Description */}
<div className=" flex flex-col space-y-5  mt-5 ">


{/* first Low Stock Alert */}
<div className=" flex justify-between  p-5 rounded-2xl w-full shadow hover:shadow-sm shadow-gray-200 bg-gray-50 border border-gray-200 ">

{/* left */}
<div className=" ">
    <h3 className=" text-md  font-semibold text-black/80 ">Low Stock Alert </h3>
</div>

{/* right */}
<div className="">


{/* backgoround  */}
     <div
      onClick={() => setIsOn(!isOn)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >

        {/* circle  */}
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
          isOn ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </div>



</div>



</div>


{/* second Payment Failed */}
<div className=" flex justify-between  p-5 rounded-2xl w-full shadow hover:shadow-sm shadow-gray-200 bg-gray-50 border border-gray-200 ">

{/* left */}
<div className=" ">
    <h3 className=" text-md  font-semibold text-black/80 ">Payment Failed </h3>
</div>

{/* right */}
<div className="">


{/* backgoround  */}
     <div
      onClick={() => setIsOn(!isOn)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >

        {/* circle  */}
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
          isOn ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </div>



</div>



</div>


{/* thrid Payment Failed */}
<div className=" flex justify-between  p-5 rounded-2xl w-full shadow hover:shadow-sm shadow-gray-200 bg-gray-50 border border-gray-200 ">

{/* left */}
<div className=" ">
    <h3 className=" text-md  font-semibold text-black/80 ">Payment Failed </h3>
</div>

{/* right */}
<div className="">


{/* backgoround  */}
     <div
      onClick={() => setIsOn(!isOn)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition ${
        isOn ? "bg-emerald-500" : "bg-gray-300"
      }`}
    >

        {/* circle  */}
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
          isOn ? "translate-x-7" : "translate-x-0"
        }`}
      ></div>
    </div>



</div>



</div>


</div>


</div>

</div>

{/*  */}




</section>

</>

);


}