"use client";

import Image from "next/image";
import { useState } from "react";


import {User,Bell, Mail,Truck,MessageSquareMore} from "lucide-react"
// import Image from "next/image"


export default function settings()
{

    
 const [isOn, setIsOn] = useState(false);

return(

<>

<section className=" flex flex-col p-5  ">   

<div className="flex flex-col  p-5 border border-0 hover:-translate-y-1 duration-300 ease-in-out transition-all  border-l-5 border-emerald-400  bg-white rounded-2xl w-full max-w-5xl ">

{/* container */}
<div className=" flex  items-center gap-3 ">

    
{/* left */}
<div className="bg-emerald-200 w-14 h-14  flex justify-center items-center  rounded-2xl"> 
<User size={30} className="text-emerald-700"></User>

</div>

{/* right */}
  <div className=" ">
<h3 className="text-2xl flex items-center gap-1 font-semibold">
        Account Settings </h3>
    <p className="text-xs  text-gray-500 ">Manage and update your account details easily.</p>
  </div>
  

</div>
  


{/* header end div */}
</div>


{/* content below  */}
<div className=" flex justify-between p-5  items-center gap-3 ">



{/* notification */}
<div className=" flex flex-col rounded-2xl p-5  h-auto  shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out transition-all bg-white w-full  ">

<div className=" flex justify-between w-full px-3  items-center">


{/* description */}
<div>
    <h3 className="text-emerald-600 text-lg font-semibold">Notifications</h3>
    <p className="text-gray-500 text-xs ">Never miss important updates and messages.</p>
</div>


{/* icons */}
<div className="w-10 h-10 flex items-center justify-center rounded-full  hover:text-black bg-gray-200  hover:bg-gray-300 hover:cursor-pointer  hover:scale-95 transition-all duration-300 ease-in-out  active:scale-101">
    <Bell size={18}></Bell>
</div>
</div>
{/* Bell */}



<div className="relative w-96 h-72 mt-5  overflow-hidden rounded-xl">
  <Image
    src="/image/message.jpg"
    alt="Message"
    fill
    className="object-fill  transition-transform duration-300 hover:scale-105"
  />
</div>





</div>



{/* right side content  */}
<div className=" rounded-2xl flex flex-col h-auto   gap-5  py-9 px-5 shadow-sm hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out transition-all  w-full bg-white rounded-2xl ">
    
<div>
    <h3 className="text-2xl text-center font-semibold text-emerald-400">Alerts & Updates</h3>
</div>

{/* seeds alert  */}
<div className=" flex justify-between p-5  bg-gray-100 rounded-2xl items-center w-full">

<div className="flex gap-3 items-center justify-center  ">

<div className="">
 <Mail size={25}></Mail>   
</div>

{/* messages  */}
<div className=" ">
    <h3 className="font-semibold text-sm ">New Seeds </h3>
    <p className="text-xs text-gray-500">Get notified when rare varieties are in stock </p>   
</div>

{/* toggle  */}
<div className="pl-10   ">


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

{/* order update */}
<div className=" flex justify-between p-5  bg-gray-100 rounded-2xl items-center w-full">

<div className="flex gap-3 items-center justify-center  ">

<div className="">
 <Truck size={25}></Truck>   
</div>

{/* messages  */}
<div className=" ">
    <h3 className="font-semibold text-sm ">Order Updates </h3>
    <p className="text-xs text-gray-500 ">Real-time tracking of your seeds shipments</p>   
</div>

{/* toggle  */}
<div className="pl-10   ">


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


{/* sms alert */}
<div className=" flex justify-between p-5  bg-gray-100 rounded-2xl items-center w-full">

<div className="flex gap-3 items-center justify-center  ">

<div className="">
 <MessageSquareMore size={25}></MessageSquareMore>   
</div>

{/* messages  */}
<div className=" ">
    <h3 className="font-semibold text-sm ">SMS Alerts</h3>
    <p className="text-xs text-gray-500 ">urgent alerts for flash sales, community event </p>   
</div>

{/* toggle  */}
<div className="pl-10   ">


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



{/* sms alerts */}
</div>





</div>


{/* privacy content */}
<div className="flex px-10 items-center justify-between bg-white rounded-2xl p-5 shadow-sm hover:-translate-y-1 duration-300 ease-in-out transition-all ">

{/* left  */}
<div className="space-y-1">
<h3 className="text-xl font-semibold text-gray-900 ">Deactivate Account</h3>
<p className="text-xs text-gray-500">Permanently remove your account and all associated data.</p>
</div>

{/* right  */}
<div>
  <button className="px-6 cursor-pointer active:scale-95 hover:scale-105 text-sm  rounded-3xl  py-2 bg-red-500 shadow-sm shadow-red-300 text-white test-xs duration-300 ease-in-out transition-all" type="button">Delete Account</button>
</div>

</div>




{/* save btn */}
<div className="flex gap-3  justify-between hover:-translate-y-1 duration-300 ease-in-out transition-all  items-center p-5 bg-white rounded-2xl mt-5 ">

<div className= "flex flex-col  " >
 <h3 className="text-xl text-gray-900 font-semibold "> Customize Options</h3>
 <p className="text-xs  text-gray-500">Choose your preferences and confirm or revert edits.</p>
</div>

<div className=" flex gap-4 ">
    <button className="bg-gray-100 active:scale-95 shadow-sm shadow-gray-300  cursor-pointer text-sm  rounded-2xl  px-5 py-2 text-emerald-500  duration-300 ease-in-out  " type="button">Discard Changes</button>
  <button className="bg-emerald-500  active:scale-95 shadow shadow-emerald-300  cursor-pointer text-sm  rounded-2xl  px-5 py-2 text-white   duration-300 ease-in-out  " type="button">Save Preferences</button>

</div>


</div>





</section>

</>


);


}