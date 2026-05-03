import Image from "next/image";




import {Download,UserPlus,UsersRound,ChartNoAxesCombined,Banknote,MapPin,Trash,Pencil,Eye} from "lucide-react";


export default function customer(){



    return(

<>


<section className=" flex flex-col w-full  max-w-5xl ">


{/* header */}
<div className="flex justify-between p-5 bg-white rounded-xl hover:-translate-y-1 duration-300 ease-in-out    hover:shadow-gray-100 ">

{/* left  */}
<div>   
    <h3 className="text-emerald-600 font-bold text-xl ">Customer Directory</h3>
    <p className="text-xs text-gray-500">View and manage all your customer information in one place.</p>
</div>


{/* right  */}
<div className="flex gap-3">

    {/* first button */}
    <button  className="flex gap-2    bg-white border border-gray-200 text-emerald-500   py-2 text-sm items-center font-semibold  justify-center cursor-pointer px-5 rounded-2xl shadow-xs  hover:shadow-gray-300  duration-300 ease-in-out transition-all hover:scale-102 active:scale-95 " type="button">
        <Download></Download>
        Export CSV</button>

{/* second button */}
    <button className="flex gap-2 text-white font-semibold bg-emerald-600  py-2 text-sm items-center  justify-center cursor-pointer px-5 rounded-2xl shadow-xs  hover:shadow-emerald-300  duration-300 ease-in-out transition-all hover:scale-102 active:scale-95  " type="button">
        <UserPlus className="text-white font-semibold" size={20}>

        </UserPlus>
        
        Add Customer </button>

</div>

</div>



{/* grid container  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">

{/* first card */}
<div className="p-5 flex bg-white w-80 flex-col hover:shadow-md shadow hover:shadow-gray-200 hover:-translate-y-1 duration-300 ease-in transition-all rounded-2xl  ">

{/* header */}
<div className="flex justify-between items-center w-full pb-4  ">

{/*left */}
<div className="bg-emerald-200 text-emerald-700 rounded-2xl p-3  hover:text-emerald-500 duration-300 ease-in-out transition-all cursor-pointer active:scale-95">


<UsersRound size={18}></UsersRound>



</div>

{/* right  */}
<div>

<h3 className=" bg-emerald-200 text-emerald-900 px-2 py-1 text-xs   rounded-2xl">
    +12% vsLY
</h3>
</div>


{/* header end div */}
</div>



{/* content */}
<div className=" flex flex-col space-y-0.5 ">

    <h3 className="text-sm  text-gray-500 ">TOTALS CUSTOMERS</h3>
    <p className="font-bold text-emerald-700 text-2xl">14,256</p>
</div>



</div>






{/* second card */}
<div className="p-5 flex bg-white w-80 flex-col hover:shadow-md shadow hover:shadow-gray-200 hover:-translate-y-1 duration-300 ease-in transition-all rounded-2xl  ">

{/* header */}
<div className="flex justify-between items-center w-full pb-4  ">

{/*left */}
<div className="bg-emerald-200 text-emerald-700 rounded-2xl p-3  hover:text-emerald-500 duration-300 ease-in-out transition-all cursor-pointer active:scale-95">


<ChartNoAxesCombined    size={18}></ChartNoAxesCombined>



</div>

{/* right  */}
<div>

<h3 className=" bg-emerald-200 text-emerald-900 px-2 py-1 text-xs   rounded-2xl">
    +854 new 
</h3>
</div>


{/* header end div */}
</div>



{/* content */}
<div className=" flex flex-col space-y-0.5 ">

    <h3 className="text-sm  text-gray-500 ">NEW THIS  MONTH</h3>
    <p className="font-bold text-emerald-700 text-2xl">2,108</p>
</div>



</div>





{/* thrid card */}
<div className="p-5 flex bg-white w-80 flex-col hover:shadow-md shadow hover:shadow-gray-200 hover:-translate-y-1 duration-300 ease-in transition-all rounded-2xl  ">

{/* header */}
<div className="flex justify-between items-center w-full pb-4  ">

{/*left */}
<div className="bg-emerald-200 text-emerald-700 rounded-2xl p-3  hover:text-emerald-500 duration-300 ease-in-out transition-all cursor-pointer active:scale-95">


<Banknote    size={18}></Banknote>



</div>

{/* right  */}
<div>

<h3 className=" bg-emerald-200 text-emerald-900 px-2 py-1 text-xs   rounded-2xl">
    Global Avg
</h3>
</div>


{/* header end div */}
</div>



{/* content */}
<div className=" flex flex-col space-y-0.5 ">

    <h3 className="text-sm  text-gray-500 ">AVG. ORDER VALUE</h3>
    <p className="font-bold text-emerald-700 text-2xl">2,108</p>
</div>



</div>





{/* grid  end div */}
</div>



{/* table container  */}
<div className="bg-white w-full max-w-5xl mt-5  hover:-translate-y-1 duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-100 rounded-2xl  h-[40vh] p-5">


{/* table header */}
<div className="flex justify-between gap-3 py-4 px-5  ">

    {/*left */}
<div className="flex gap-3  ">

    {/* all custonmer */}
    <div > 
        <button className="bg-emerald-600  cursor-pointer hover:scale-101 active:scale-95  duration-300 ease-in-out transition-all        text-xs  font-semibold text-white  rounded-2xl px-5 py-2 " type="button">All Customers</button>
    </div>

{/* active */}
<div className=" ">
    <button className="bg-gray-500 text-xs cursor-pointer hover:scale-101 active:scale-95  duration-300 ease-in-out transition-all  font-semibold  text-white  rounded-2xl px-5 py-2" type="button">Active</button>
</div>


{/*   inactive   */}
<div>
    <button className="bg-gray-500 text-xs cursor-pointer hover:scale-101 active:scale-95  duration-300 ease-in-out transition-all  font-semibold  text-white  rounded-2xl px-5 py-2" type="button">Inactive</button>
</div>

{/* subscribers  */}
<div>
    <button className="bg-gray-500 text-xs cursor-pointer hover:scale-101 active:scale-95  duration-300 ease-in-out transition-all  font-semibold  text-white  rounded-2xl px-5 py-2" type="button">
Subscribers</button>
</div>





</div>


{/* right */}
<div>

<div className="relative ">
  <select
    name="sort"
    id="sort"
    className="w-40 appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2  text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
  >
    <option value="newest">Sort by: Newest</option>
    <option value="oldest">Sort by: Oldest</option>
  </select>

  {/* Custom Arrow */}
  <div className="pointer-events-none absolute right-5  bottom-1.5 flex items-center text-gray-400">
    ▼
  </div>
</div>
</div>


</div>



{/* table  */}
<div className="flex mt-3 justify-center items-center ">


<table className="w-full  rounded-xl overflow-hidden">

  {/* Header */}
  <thead className="bg-gray-50">
    <tr className="text-xs font-semibold text-gray-500 text-left">
      <th className="px-4 py-3">CUSTOMER</th>
      <th className="px-4 py-3">LOCATION</th>
      <th className="px-4 py-3">JOIN DATE</th>
      <th className="px-4 py-3">STATUS</th>
      <th className="px-4 py-3">ACTIONS</th>
    </tr>
  </thead>

  {/* Body */}
  <tbody>
    <tr className=" hover:bg-gray-50 transition">

      {/* User */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden">
            <Image
              src="/image/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800">Aboorva</h3>
            <p className="text-xs text-gray-500">aboorva2002@gmail.com</p>
          </div>
        </div>
      </td>

      {/* Location */}
      <td className="px-4 py-3 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          Chennai
        </div>
      </td>

      {/* Date */}
      <td className="px-4 py-3 text-sm text-gray-500">
        Oct 12, 2023
      </td>

      {/* Status */}
      <td className="px-4 py-3">
        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
          ● Active
        </span>
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="flex gap-3 text-gray-400">
          <Eye className="cursor-pointer hover:text-blue-500 transition" size={18} />
          <Pencil className="cursor-pointer hover:text-emerald-600 transition" size={18} />
          <Trash className="cursor-pointer hover:text-red-500 transition" size={18} />
        </div>
      </td>

    </tr>
  </tbody>

</table>


</div>




</div>




</section>


</>


    );




}