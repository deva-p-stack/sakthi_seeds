import Image from "next/image";
import {Handbag,Trash} from "lucide-react"


export default function wishlist(){


return(


<>
<section className="flex  gap-3 flex-col  ">
  

<div>
    <h3 className="font-semibold text-2xl text-emerald-500 duration-300 ease-in-out  ">My Garden (Wishlist)</h3>
</div>


<div className=" p-5  w-full max-w-6xl rounded-2xl bg-white shadow-sm hover:-translate-y-1 duration-300 ease-in-out cursor-pointer  border border-0 border-l-5  border-emerald-400 ">
    <h3 className=" font-semibold text-2xl">2  seeds waiting </h3>
    <p className=" text-xs ">for your garden  to grow </p>
</div>

{/*card div start here  */}
<div className="flex gap-10 flex-col md:flex-row  mt-3  ">


{/* first card */}
<div className=" flex flex-col w-full bg-white  h-auto max-w-xs  shadow-sm hover:shadow-xl duration-300 transition-all ease-in-out hover:-translate-y-1 rounded-2xl pb-5  ">

{/* image container */}
<div className="overflow-hidden relative w-full h-48">
    <Image
    src="/image/okra.jpg"
    alt="Okra"
    fill
    className="object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
  />
   
   {/* delte icon */}
   <div className="hover:bg-emerald-400 cursor-pointer duration-300 ease-in-out  absolute top-3 right-1 bg-gray-100 p-3 text-emerald-900  rounded-full  "> 
        <Trash  size={18}></Trash>
   </div>
</div>


{/* title header */}
<div className=" p-5  space-y-2 ">
{/* title header  */}
<div className=" flex  justify-between items-center w-full ">
    <h3 className="font-semibold ">Okra  </h3>
   
</div>

{/*items title  */}
<div className="">
<p className="text-gray-500">The Okra plant is a tropical vegetable grown for its edible green pods.</p>
</div>


{/* price */}
<div className=" flex justify-between items-center pr-2 ">
     <p className="pr-2 text-emerald-900 font-semibold text-lg   ">₹30</p>

      <select className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400">
        <option>50 g</option>
        <option>100 g</option>
        <option>250 g</option>
      </select>
</div>

{/* button */}
<div className=" flex w-full items-center justify-center py-1 mt-3  ">
     <button className=" bg-emerald-600 duration-300 w-full  ease-in-out transition-all cursor-pointer   text-white   flex  gap-2 items-center justify-center px-6 py-2  rounded-2xl   " type="button"> <Handbag size={18}> </Handbag>Add to Cart</button>
</div>

</div>





</div>



{/* second card */}
<div className=" flex flex-col w-full bg-white  h-auto max-w-xs  shadow-sm hover:shadow-xl duration-300 transition-all ease-in-out hover:-translate-y-1 rounded-2xl pb-5  ">

{/* image container */}
<div className="overflow-hidden relative w-full h-48">
   <Image 
         src="/image/brinjalai.jpg"
         alt="biriniajal "
         width={400}
         height={300}
         className="rounded-lg object-cover  transition-transform duration-300  hover:scale-105">
   </Image>
   
   {/* delte icon */}
   <div className="hover:bg-emerald-400 cursor-pointer duration-300 ease-in-out  absolute top-3 right-1 bg-gray-100 p-3 text-emerald-900  rounded-full  "> 
        <Trash  size={18}></Trash>
   </div>
</div>


{/* title header */}
<div className=" p-5  space-y-2 ">
{/* title header  */}
<div className=" flex  justify-between items-center w-full ">
    <h3 className="font-semibold ">Brinjai</h3>
   
</div>

{/*items title  */}
<div className="">
<p className="text-gray-500">Trusted seeds for stronger growth and better yield.</p>
</div>


{/* price */}
<div className=" flex justify-between items-center pr-2 ">
     <p className="pr-2 text-emerald-900 font-semibold text-lg   ">₹30</p>

      <select className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-emerald-400">
        <option>50 g</option>
        <option>100 g</option>
        <option>250 g</option>
      </select>
</div>

{/* button */}
<div className=" flex w-full items-center justify-center py-1 mt-3  ">
     <button className=" bg-emerald-600 duration-300 w-full  ease-in-out transition-all cursor-pointer   text-white   flex  gap-2 items-center justify-center px-6 py-2  rounded-2xl   " type="button"> <Handbag size={18}> </Handbag>Add to Cart</button>
</div>

</div>





</div>


</div>





</section>


</>

);


} 