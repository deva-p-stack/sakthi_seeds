"use client";

import Image from "next/image";

import {Banknote,Truck,UsersRound,HeartPlus,TriangleAlert,MessageCircleMore,Sprout} from "lucide-react";

import { useRouter } from "next/navigation";

export default function dashboard(){

 const router = useRouter();

return(

<>

<section className="flex flex-col w-full maax-w-5xl  ">



{/* container */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-5">


    {/*first card  */}
    <div className=" w-64   bg-white rounded-2xl p-5    flex flex-col hover:-translate-y-1 hover:shadow-sm shadow-xs shadow-gray-100 duration-300 ease-in-out transition-all">

{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className=" w-10 h-10 rounded-lg  bg-emerald-100 text-emerald-400  flex items-center justify-center ">

<Banknote size={30}></Banknote>
    

</div>


{/* right  */}
<div>
<h3 className="text-emerald-400 bg-emerald-100 px-2 flex items-center justify-center py-0.5  text-xs font-semibold rounded-3xl">12%</h3>

</div>

</div>


{/* content */}
<div className=" flex flex-col mt-4  space-y-1 ">

<h3 className=" text-xs text-gray-500 ">TOTAL REVENUE</h3>

<p className=" font-bold  text-2xl ">₹ 126,450</p>

<p className=" text-gray-500 text-xs  ">vs .last month period</p>

</div>



    </div>


{/* second card */}
 <div className=" w-64   bg-white rounded-2xl p-5    flex flex-col hover:-translate-y-1 hover:shadow-sm shadow-xs shadow-gray-100 duration-300 ease-in-out transition-all">

{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className=" w-10 h-10 rounded-lg  bg-emerald-100 text-emerald-400  flex items-center justify-center ">

<Truck size={30}></Truck>
    

</div>


{/* right  */}
<div>
<h3 className="text-red-400 px-2 flex items-center justify-center py-0.5  text-xs font-semibold rounded-3xl">5 urgent</h3>

</div>

</div>


{/* content */}
<div className=" flex flex-col mt-4  space-y-1 ">

<h3 className=" text-xs text-gray-500 ">ACTIVE ORDER</h3>

<p className=" font-bold  text-2xl ">45</p>

<p className=" text-gray-500 text-xs  ">currently in fulfillment </p>

</div>

    </div>


{/* third card */}
 <div className=" w-64   bg-white rounded-2xl p-5    flex flex-col hover:-translate-y-1 hover:shadow-sm shadow-xs shadow-gray-100 duration-300 ease-in-out transition-all">

{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className=" w-10 h-10 rounded-lg  bg-emerald-100 text-emerald-400  flex items-center justify-center ">

<UsersRound size={28}></UsersRound>
    

</div>


{/* right  */}
<div>
<h3 className="text-red-400 px-2 flex items-center justify-center py-0.5  text-xs font-semibold rounded-3xl">Lifetime </h3>

</div>

</div>


{/* content */}
<div className=" flex flex-col mt-4  space-y-1 ">

<h3 className=" text-xs text-gray-500 ">TOTAL CUSTOMERS</h3>

<p className=" font-bold  text-2xl ">2,450</p>

<p className=" text-gray-500 text-xs  ">142 New this week </p>

</div>

    </div>


{/* fourth card */}
 <div className=" w-64   bg-white rounded-2xl p-5    flex flex-col hover:-translate-y-1 hover:shadow-sm shadow-xs shadow-gray-100 duration-300 ease-in-out transition-all">

{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className=" w-10 h-10 rounded-lg  bg-emerald-100 text-emerald-400  flex items-center justify-center ">

<UsersRound size={28}></UsersRound>
    

</div>


{/* right  */}
<div>

<HeartPlus className="text-emerald-400 "></HeartPlus>    

</div>

</div>


{/* content */}
<div className=" flex flex-col mt-4  space-y-1 ">

<h3 className=" text-xs text-gray-500 ">INVENTORY HEALTH</h3>

<p className=" font-bold  text-2xl ">92 %</p>

<p className=" text-gray-500 text-xs  ">8% low  stock varites  </p>

</div>

    </div>




{/* grid end below */}
</div>



{/* below content */}
<div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-3">

{/* fist card */}
<div className=" flex flex-col rounded-2xl bg-white p-5 mt-5  hover:-translate-y-1 hover:shadow-sm hover:shadow-gray-400  border-gray-200 border shadow-xs duration-300 ease-in-out transition-all ">


{/* header */}
<div className=" p-3 ">

 <h3 className=" text-emerald-500 font-semibold  text-xl">Top Selling Seeds</h3>   

</div>


{/* list of the seeling */}
<div className="flex flex-col gap-5">

{/* first card */}
<div className=" flex justify-between bg-gray-100 p-5 rounded-2xl hover:bg-gray-200/50  ">

{/* left */}
<div className=" ">
<h3 className="font-semibold text-emerald-600 text-sm">Okra</h3>
</div>


{/* right */}
<div>
    <h3 className=" text-gray-900 text-sm font-semibold ">1,240 units</h3>
</div>


</div>


{/* second card */}
<div className=" flex justify-between bg-gray-100 p-5 rounded-2xl hover:bg-gray-200/50  ">

{/* left */}
<div className=" ">
<h3 className="font-semibold text-emerald-600 text-sm">Carrot</h3>
</div>


{/* right */}
<div>
    <h3 className=" text-gray-900 text-sm font-semibold ">1,380 units</h3>
</div>


</div>

{/* thid card */}
<div className=" flex justify-between bg-gray-100 p-5 rounded-2xl hover:bg-gray-200/50  ">

{/* left */}
<div className=" ">
<h3 className="font-semibold text-emerald-600 text-sm">Ginger</h3>
</div>


{/* right */}
<div>
    <h3 className=" text-gray-900 text-sm font-semibold ">3,163 units</h3>
</div>


</div>




</div>



</div>


{/* seconc card */}
<div className="flex flex-col rounded-2xl bg-white p-5 mt-5  hover:-translate-y-1 hover:shadow-sm hover:shadow-gray-400  border-gray-200 border shadow-xs duration-300 ease-in-out transition-all">


{/* header */}
<div className="">
    <h3 className=" text-emerald-700 font-semibold text-xl ">Growth Alerts</h3>
</div>



{/* list of the content */}
<div className=" flex flex-col items-center justify-center  gap-4 mt-3">

{/* first card */}
<div className=" flex gap-3  w-full max-w-md  border-red-400 border-0 border-l-4 bg-gray-100 rounded-2xl p-5 items-center  ">


{/* left card */}
<div className=" ">

<TriangleAlert className=" text-red-400" size={30}></TriangleAlert>

</div>



{/* right caard */}
<div className="">

    <h3 className=" font-semibold text-xl text-gray-600">Low Stock Warning</h3>
    <p className="text-xs text-gray-500 ">Sunflower  drops  below  15 units</p>

</div>



</div>

{/* second card */}
<div className=" flex gap-3  w-full max-w-md   border-emerald-600 border-0 border-l-4 bg-gray-100 rounded-2xl p-5 items-center  ">


{/* left card */}
<div className=" ">

<MessageCircleMore className=" text-emerald-600" size={30}></MessageCircleMore>

</div>



{/* right caard */}
<div className="">

    <h3 className=" font-semibold text-xl text-gray-600">New Review </h3>
    <p className="text-xs text-gray-500 ">Excellent gerimnation rate</p>

</div>



</div>


{/* third card */}
<div className=" flex gap-3  w-full max-w-md   border-emerald-600 border-0 border-l-4 bg-gray-100 rounded-2xl p-5 items-center  ">


{/* left card */}
<div className=" ">

<Sprout className=" text-emerald-600" size={30}></Sprout>

</div>



{/* right caard */}
<div className="">

    <h3 className=" font-semibold text-xl text-gray-600">RestockArrived </h3>
    <p className="text-xs text-gray-500 ">Sunflower seeds  have been received & logged </p>

</div>



</div>





</div>



</div>



</div>



</section>

</>


);



}