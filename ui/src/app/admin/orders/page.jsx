import Image from "next/image";

import {Calendar,CalendarCheck,LoaderCircle,Truck,CircleCheckBig,Trash,Eye,Pen} from "lucide-react";



export default function orders(){


return(


<>

<section className="flex flex-col p-5 ">


{/* header title  */}
<div className=" flex justify-between bg-white shadow-xs hover:-translate-y-1 duration-300 ease-in-out transition-all hover:shadow-lg   w-full p-5 rounded-2xl items-center">

{/* left  */}
<div className=" flex flex-col space-y-1 ">

<h3 className="font-semibold  text-xl hover:text-emerald-400   text-black/90">Order Management</h3>

<p className="text-gray-500 text-xs ">Pick and confirm the plants you want to grow this season. </p>
</div>


{/* right */}
<div className=" flex gap-3 md:flex-row flex-col  ">


 <button  className=" text-sm text-emerald-600 border border-gray-200  hover:bg-emerald-600 hover:text-white   duration-300 ease-in-out transition-all font-semibold cursor-pointer rounded-3xl   px-6 py-2  "  type="button">Export CSV </button>    

 <button  className="text-sm  flex items-center justify-center gap-2    hover:text-white  bg-emerald-500 text-white  active:scale-[0.97] hover:bg-emerald-600 px-5 py-2 rounded-3xl  font-medium cursor-pointer "   type="button">
    
    <Calendar size={18}></Calendar>
    Scheduled Shipments
     </button>    


</div>

</div>



{/* content four container */}
<div className="grid md:grid-cols-4  grid-cols-1 gap-5 mt-5">


{/* first card */}
<div className=" p-5 rounded-2xl bg-white  transition-all   hover:-translate-y-1 hover:shadow-gray-300 duration-300 ease-in w-60">

{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className="w-12 h-12 flex items-center justify-center bg-gray-100  text-gray-500  rounded-lg ">
<CalendarCheck className="18"></CalendarCheck>
</div>


{/* right */}
<div>
<h3 className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-2xl text-xs  font-semibold">12%</h3>

</div>


</div>


{/* content */}
<div className="flex flex-col mt-3 ">

<h3 className="text-gray-500 text-xs ">Pending Order</h3>

<h5 className=" font-bold text-black/70 text-2xl">128</h5>

</div>



</div>



{/* second card */}
<div className=" p-5 rounded-2xl bg-white  transition-all   hover:-translate-y-1 hover:shadow-gray-300 duration-300 ease-in w-60">


{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className="w-12 h-12 flex items-center justify-center bg-emerald-100  text-emerald-500  rounded-lg ">
<LoaderCircle  className="18"></LoaderCircle>
</div>


{/* right */}
<div>
<h3 className="bg-emerald-200 text-emerald-800 px-4 py-1 rounded-2xl text-xs  font-semibold">12%</h3>

</div>


</div>


{/* content */}
<div className="flex flex-col mt-3 ">

<h3 className="text-gray-500 text-xs ">Processing </h3>

<h5 className=" font-bold text-black/70 text-2xl">+5.4%</h5>

</div>





</div>


{/* third card */}
<div className=" p-5 rounded-2xl bg-white  transition-all   hover:-translate-y-1 hover:shadow-gray-300 duration-300 ease-in w-60">


{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className="w-12 h-12 flex items-center justify-center bg-blue-100  text-blue-500  rounded-lg ">
<Truck  className="18"></Truck>
</div>


{/* right */}
<div>
<h3 className="bg-blue-200 text-blue-800 px-4 py-1 rounded-2xl text-xs  font-semibold">Steady</h3>

</div>


</div>


{/* content */}
<div className="flex flex-col mt-3 ">

<h3 className="text-gray-500 text-xs ">Shipping</h3>

<h5 className=" font-bold text-black/70 text-2xl">43</h5>

</div>





</div>


{/* fourth card  */}
<div className=" p-5 rounded-2xl bg-white  transition-all   hover:-translate-y-1 hover:shadow-gray-300 duration-300 ease-in w-60">


{/* header */}
<div className="flex justify-between items-center">

{/* left */}
<div className="w-12 h-12 flex items-center justify-center bg-green-100  text-green-500  rounded-lg ">
<CircleCheckBig className="18"></CircleCheckBig>
</div>


{/* right */}
<div>
<h3 className="bg-green-200 text-green-800 px-4 py-1 rounded-2xl text-xs  font-semibold">+12%</h3>

</div>


</div>


{/* content */}
<div className="flex flex-col mt-3 ">

<h3 className="text-gray-500 text-xs ">Delivery Today</h3>

<h5 className=" font-bold text-black/70 text-2xl">43</h5>

</div>





</div>






</div>




<div className="w-full bg-white mt-5 duration-300 ease-in-out transition-all  hover:-translate-y-1  rounded-xl shadow-sm border border-gray-200 overflow-hidden">

  <table className="w-full">

    {/* Header */}
    <thead className="bg-gray-100">
      <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
        <th className="px-4 py-3">Order ID</th>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3">Customer</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Items</th>
        <th className="px-4 py-3">Total</th>
        <th className="px-4 py-3">Actions</th>
      </tr>
    </thead>

    {/* Body */}
    <tbody>
      <tr className=" hover:bg-gray-50 transition">

        {/* Order ID */}
        <td className="px-4 py-3 text-sm font-medium text-gray-700">
          #LC-491
        </td>

        {/* Date */}
        <td className="px-4 py-3 text-sm text-gray-500">
          Oct 12, 2023
        </td>

        {/* Customer */}
        <td className="px-4 py-3">
          <div className="flex items-center gap-3">

            {/* Image */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/image/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-sm font-semibold text-gray-800">
              Aboorva
            </h3>

          </div>
        </td>

        {/* Status */}
        <td className="px-4 py-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
            ● Paid
          </span>
        </td>

        {/* Items */}
        <td className="px-4 py-3 text-sm text-gray-600">
          4
        </td>

        {/* Total */}
        <td className="px-4 py-3 text-sm font-semibold text-gray-800">
          ₹240
        </td>

        {/* Actions */}
        <td className="px-4 py-3">
          <div className="flex gap-3 text-gray-400">
            <Eye className="cursor-pointer hover:text-blue-500 transition" size={18} />
            <Pen className="cursor-pointer hover:text-emerald-600 transition" size={18} />
            <Trash className="cursor-pointer hover:text-red-500 transition" size={18} />
          </div>
        </td>

      </tr>
    </tbody>

  </table>

</div>

</section>

</>


);


}