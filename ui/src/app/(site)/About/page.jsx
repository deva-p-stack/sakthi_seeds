import{Sun,Moon,Goal,Users,Sprout,Heart,Sparkle,ShieldCheck,Leaf,Clock,MapPin} from "lucide-react"
import Image from "next/image";

import Footerr from "../../Components/Footer"

export const metadata = {
 title: "About Sakthi Agri Seeds | Quality Seeds for Better Farming",
};


export default function About(){


return(
    <>
   
<section className=" w-full bg-[#E0F2F1] max-w-[1440px] flex flex-col p-5 min-h-screen  ">


{/* div */}
<div className="max-w-6xl bg-[#FFFDF7]  mt-5  justify-between flex items-center   w-full h-auto rounded-lg  mx-auto py-5 px-10 space-y-3">

<div className="px-2 space-y-1">
    <h3 className="text-3xl font-semibold text-black/80">About Us</h3>
    <p className="text-sm ">Sakthi Seeds delivers high-quality seeds for sustainable farming</p>
</div>

<div className="bg-gray-300 p-3 rounded-full">
<Sun size={30} className="cursor-pointer  " ></Sun>
</div>



</div>


{/* image content */}
<div className="max-w-6xl bg-[#FFFDF7] pt-5   mt-5 px-5 flex-col md:flex-row lg:flex-row  flex items-center   w-full h-auto items-center rounded-lg  mx-auto  space-y-3" >

{/* image */}
<Image 
      src="/image/aboutimage.jpg"
      alt="About Us"
      width={400}
      height={400}
      className="rounded-lg object-fill transition-transform duration-300  hover:scale-105">

</Image>

<div className="p-5 ">
    <h3 className="text-justify leading-relaxed text-lg ">
        Sakthi Agri Seeds is committed to providing farmers with high-quality seeds that ensure excellent growth and yield.
We focus on sustainable agricultural practices that support both the environment and local communities.
Our products undergo strict quality checks to maintain consistency and reliability.
We empower farmers with knowledge, resources, and the best seeds to cultivate healthy crops.
At Sakthi Seeds, we believe in nurturing growth from seed to harvest, promoting a prosperous farming future.
    </h3>
</div>





</div>


{/* why we started  */}
<div className="max-w-6xl bg-[#FFFDF7]  mt-5 px-5  flex  p-5  w-full h-auto items-center justify-center flex flex-col  rounded-lg  mx-auto  space-y-3">


{/* icon */}
<div className=" flex flex-col md:flex-row lg:flex-row  items-center w-full h-auto  gap-3 ">
<Goal size={30}></Goal>
{/*content  */}
<p className="flex text-lg font-semibold  "> Why We Started </p> 
</div>


{/* container 3  */}
<div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-2 lg:grid-cols-3 place-items-center  grid-rows-1 gap-5 w-full mx-auto">

{/*card-1*/}
<div className="bg-[#E3F2FD] rounded-lg w-70 h-50  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5 ">

  <div>

    <Sprout  size={30}></Sprout>
    </div>  

    <h3 className="mt-3 font-semibold">Seeds Passion</h3>

    <p className="px-1 py-1 text-justify">At Sakthi Agri Seeds, we turn farming into a passion, providing quality seeds that empower farmers.</p>

</div>



{/*card-2*/}
<div className="bg-[#E3F2FD] rounded-lg w-70 h-50  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5 ">

     <div>
    <Users size={30}></Users>
    </div>  

    {/* Heart */}
    <h3 className="mt-3 font-semibold">Community Building</h3>

    <p className="px-1 py-1 text-justify">A community where farmers connect, share, and grow together.</p>


</div>




{/*card-3*/}
<div className="bg-[#E3F2FD] rounded-lg w-70 h-50  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5 ">



    <div>
    <Heart size={30}></Heart>
    </div>  

    {/*  */}
    <h3 className="mt-3 font-semibold">Make a Difference</h3>

    <p className="px-1 py-1 text-justify">Sakthi Agri Seeds empowers farmers with quality seeds to make a real difference in agriculture.</p>








</div>


</div>




</div>


{/* Our Values */}
<div className="max-w-6xl bg-[#FFFDF7]  mt-5 px-5  flex  py-5  w-full h-auto flex flex-col  rounded-lg  mx-auto  space-y-3">

{/* icon */}
<div className=" flex flex-col  md:flex-row lg:flex-row  items-center w-full h-auto  gap-3 ">
<Sparkle size={30}></Sparkle>
{/*content  */}
<p className="flex text-lg font-semibold  "> Our Values </p> 
</div>


{/* container */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-2  mx-auto grid-rows-1 ">

    {/*card-1  */}
<div className="bg-[#E3F2FD] rounded-lg w-60 h-50 p-3  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5">

<div className="flex justify-center items-center">
    <ShieldCheck size={50} ></ShieldCheck>
</div>

<h3 className="font-semibold text-center mt-3">Excellence</h3>

<p className="text-justify text-xs mt-2">
    Sakthi Agri Seeds delivers excellence in every seed, empowering farmers for the best harvests.
</p>

</div>





    {/*card-2  */}
<div className="bg-[#E3F2FD] rounded-lg w-60 h-50 p-3  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5">

<div className="flex justify-center items-center">
    <Heart size={50} ></Heart>
</div>

<h3 className="font-semibold text-center mt-3">Community Focus</h3>

<p className="text-justify text-xs mt-2">
    Connecting farmers and communities to grow together and share knowledge
</p>

</div>





    {/*card-3  */}
<div className="bg-[#E3F2FD] rounded-lg w-60 h-50 p-3  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5">

<div className="flex justify-center items-center">
    <Leaf size={50} ></Leaf>
</div>

<h3 className="font-semibold text-center mt-3">Sustainability</h3>

<p className="text-justify text-xs mt-2">
    Sakthi Agri Seeds promotes sustainable farming for a healthier planet and thriving crops.
</p>

</div>




    {/*card-4 */}
<div className="bg-[#E3F2FD] rounded-lg w-60 h-50 p-3  shadow-sm hover:-translate-y-1 hover:shadow-lg duration-300 ease-in-out transition-all p-5">

<div className="flex justify-center items-center">
    <Leaf size={50} ></Leaf>
</div>

<h3 className="font-semibold text-center mt-3">Quality First</h3>

<p className="text-justify text-xs mt-2">
    We ensure every seed meets the highest standards to empower farmers with reliable
</p>

</div>



</div>




</div>


{/* our Journey */}
<div className="max-w-4xl bg-[#FFFDF7]  mt-5 px-5  flex  p-5    w-full h-auto  flex flex-col  rounded-lg  mx-auto  space-y-3">
{/* header */}
<div className=" w-full md:flex-row lg:flex-row justify-center flex md:items-start md:justify-start  gap-3 items-center  flex-col   ">
<Clock size={30} > </Clock>
<h3 className="font-semibold  text-xl ">Our Journey</h3>
</div>

{/* container  */}
<div className="flex  gap-3 mt-3 justify-center flex-col  md:flex-row lg:flex-row  h-auto  items-center   ">

{/* circle  */}
<div className=" relative flex flex-col h-auto  space-y-12">

{/* line content  */}
    <div className="absolute w-0.5 left-10  h-full   bg-amber-500"> </div>


{/* yeaar */}
<div className="p-5 bg-amber-500 w-20 h-20  flex items-center justify-center rounded-full">
<h3 className="text-white font-semibold ">2019</h3>
</div>


<div className="p-5 bg-amber-500 w-20 h-20  flex items-center justify-center rounded-full">
<h3 className="text-white font-semibold ">2022</h3>
</div>


<div className="p-5 bg-amber-500 w-20 h-20  flex items-center justify-center rounded-full">
<h3 className="text-white font-semibold ">2025</h3>
</div>




<div className="p-5 bg-amber-500 w-20 h-20  flex items-center justify-center rounded-full">
<h3 className="text-white font-semibold ">2026</h3>
</div>


</div>


{/* text container */}
<div className=" flex flex-col h-auto w-full  space-y-8 ">

{/* first container */}
  <div className=" bg-amber-200/40 p-5 text-gray-700 rounded-lg hover:translate-y-1 duration-300 ease-in-out transition-all  ">
    <h3 className="text-lg  font-semibold">The Beginning </h3>
    <p>Sakthi Agri Seeds began with a small shop and a big vision to deliver quality seeds to farmers.</p>
    </div>  



{/* second  container */}
  <div className=" bg-amber-200/40 p-5 text-gray-700 rounded-lg hover:translate-y-1 duration-300 ease-in-out transition-all  ">
    <h3 className="text-lg  font-semibold">Expansion</h3>
    <p>We expanded by partnering directly with farmers to source and deliver high-quality seeds</p>
    </div>  




{/* thrid container */}
  <div className=" bg-amber-200/40 text-gray-700 p-5 rounded-lg  hover:translate-y-1 duration-300 ease-in-out transition-all ">
    <h3 className="text-lg  font-semibold">Recognition</h3>
    <p>Honored for delivering high-quality seeds and supporting farmers across Tamil Nadu</p>
    </div>  




{/* four container */}
  <div className=" bg-amber-200/40 text-gray-700 p-5 rounded-lg hover:translate-y-1 duration-300 ease-in-out transition-all  ">
    <h3 className="text-lg  font-semibold">Today </h3>
    <p>Supporting 1000+ farmers and cultivating success with every seed</p>
    </div>  



</div>




{/* end of that container */}
</div>


</div>




{/* Meet our team  */}

<div className=" max-w-6xl bg-[#FFFDF7]  mt-5 px-5  flex  p-5     w-full h-full  flex flex-col  rounded-lg  mx-auto  space-y-3">

{/* header  */}
<div className=" flex gap-3  md:flex-row lg:flex-row flex-col items-center   ">

<Users size={30} className="text-amber-500"></Users>
<h3 className="font-semibold text-lg ">Meet Our Team</h3>

</div>

<div className="md:flex-row lg:flex-row items-center justify-center   flex flex-col gap-10  ">


{/* card- 1 */}

<div className="w-56 bg-white rounded-2xl shadow-md hover:shadow-xl 
  transition-all duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">

  <Image 
    src="/image/male.png"
    alt="worker"
    width={120}
    height={120}
    className="rounded-full object-cover border-4 border-amber-100"
  />

  <div className="mt-4">
    <h3 className="font-semibold text-lg text-gray-800">Deva</h3>
    <p className="text-sm text-amber-600">Head of Operations</p>
  </div>

{/* card end div */}
</div>


{/* card - 2 */}
<div className="w-56 bg-white rounded-2xl shadow-md hover:shadow-xl 
  transition-all duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">

  <Image 
    src="/image/female.png"
    alt="worker"
    width={120}
    height={120}
    className="rounded-full object-cover border-4 border-amber-100"
  />

  <div className="mt-4">
    <h3 className="font-semibold text-lg text-gray-800">Sakthi</h3>
    <p className="text-sm text-amber-600">Agricultural Advisor</p>
  </div>

{/* card end div */}
</div>



{/* card - 3 */}
<div className="w-56 bg-white rounded-2xl shadow-md hover:shadow-xl 
  transition-all duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">

  <Image 
    src="/image/male.png"
    alt="worker"
    width={120}
    height={120}
    className="rounded-full object-cover border-4 border-amber-100"
  />

  <div className="mt-4">
    <h3 className="font-semibold text-lg text-gray-800">Dinesh</h3>
    <p className="text-sm text-amber-600">Operations Manager</p>
  </div>

{/* card end div */}
</div>


{/* card - 4 */}
<div className="w-56 bg-white rounded-2xl shadow-md hover:shadow-xl 
  transition-all duration-300 transform hover:-translate-y-2 p-4 flex flex-col items-center text-center">

  <Image 
    src="/image/male.png"
    alt="worker"
    width={120}
    height={120}
    className="rounded-full object-cover border-4 border-amber-100"
  />

  <div className="mt-4">
    <h3 className="font-semibold text-lg text-gray-800">Kummar </h3>
    <p className="text-sm text-amber-600">Farmer Support Lead</p>
  </div>

{/* card end div */}
</div>

</div>


</div>



{/* our space */}

<div className="max-w-6xl bg-[#FFFDF7] mt-5 px-5 py-6 w-full flex flex-col rounded-lg mx-auto space-y-5">
  {/* Header */}
  <div className="flex items-center gap-3">
    <MapPin size={30} />
    <h3 className="font-semibold text-lg">Our Space</h3>
  </div>

  {/* Image Grid */}
  <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {[
      { src: "/image/potato.jpg", alt: "Potato" },
      { src: "/image/shop.jpg", alt: "Shop" },
      { src: "/image/seeds.jpg", alt: "Seeds" },
    ].map((item, index) => (
      <div key={index} className="overflow-hidden rounded-lg">
        <Image
          src={item.src}
          alt={item.alt}
          width={400}
          height={300}
          className="w-full h-48 md:h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</div>



<div className="flex flex-col  space-y-2  justify-center items-center w-full max-w-6xl h-auto p-5 bg-[#FFFDF7] mx-auto  mt-5   ">

 
<h3 className = "font-semibold text-xl ">Join Our Gardening Community </h3>
<p className="text-sm ">Visit us today and experience the joy that quality seeds, expert guidance, and a love for growing can bring</p>

{/* button div */}
<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mt-4">
  <button className="px-6 py-3 bg-amber-500 text-white cursor-pointer font-semibold rounded-lg shadow-md hover:bg-amber-600 transition-all duration-300 ease-in-out">
    Visit Us
  </button>
  <button className="px-6 py-3 border border-amber-500 hover:bg-amber-500 hover:text-white hover:border-white  cursor-pointer text-amber-500 font-semibold rounded-lg shadow-sm hover:bg-amber-50 transition-all duration-300 ease-in-out">
    View Menu
  </button>
</div>

</div>


</section>


<Footerr>
  
</Footerr>



    </>
);
    
}