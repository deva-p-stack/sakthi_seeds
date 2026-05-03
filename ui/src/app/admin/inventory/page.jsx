import {Plus,Download,Trash,Pencil} from "lucide-react"

import Image from "next/image"

import Link from "next/link";

import TableForm from "./table/tableform";

import Outofstock from "./outofstock/outofstock";

import Seedcount from "./seedcount/seedcount";

export default function inventory(){

 

  
return(

<>



<section className=" flex flex-col w-full  max-w-5xl ">



{/* header */}
<div className="
  w-full max-w-5xl mb-4
  bg-white
  rounded-2xl
  p-4 sm:p-5
  border border-gray-100
  shadow-sm hover:shadow-md
  transition-all duration-300 ease-in-out
  hover:-translate-y-1
  flex flex-col sm:flex-row
  gap-4 sm:items-center sm:justify-between
">

  {/* left */}
  <div className="flex flex-col gap-1">
    <h3 className="font-bold text-lg sm:text-xl text-gray-800">
      Seed Catalog
    </h3>
    <p className="text-gray-500 text-xs sm:text-sm max-w-md">
      Explore a wide variety of seeds and discover the perfect plants for your garden
    </p>
  </div>

  {/*  */}
  <div className="w-full sm:w-auto">
    <Link
      href="/admin/inventory/addproduct"
      className="
        w-full sm:w-auto
        flex items-center justify-center gap-2
        px-5 py-2.5
        rounded-full
        text-sm font-semibold
        bg-emerald-500 text-white
        hover:bg-emerald-600
        active:scale-95
        transition-all duration-200
        shadow-sm hover:shadow-md
      "
    >
      <Plus size={18} />
      Add New Specimen
    </Link>
  </div>

</div>



{/* four items */}

<div className=" grid grid-cols-1 my-5  grid-rows-1 md:grid-cols-4 mx-auto gap-10 ">


{/* first card */}
<Seedcount />

{/* second card and third card  */}
<Outofstock />

{/* four card */}
<div className="bg-white  group hover:cursor-pointer justify-center w-48 hover:border-emerald-500 space-y-1 border border-l-4 hover:-translate-y-1 duration-300 ease-in-out  border-l-emerald-300 border-0  rounded-2xl p-5  flex flex-col ">


<h3 className="text-sm   font-semibold    text-gray-500 ">NEW THIS MONTH  </h3>
<p className="text-2xl  group-hover:text-emerald-700  font-bold text-emerald-600">48</p>


</div>

</div>



{/* table */}
<div className="mt-3 bg-white max-w-5xl w-full rounded-2xl p-5">
      <TableForm />
    </div>




</section>


</>


);


}