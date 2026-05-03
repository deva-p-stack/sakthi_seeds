import { Sun,MapPin,User,Mail,Phone, MessageSquare,Send,  } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    // bg-[#E0F2F1]
  return (
    
      
<div className="flex flex-col justify-center items-center mx-auto bg-[#E0F2F1]  w-full max-w-[1440px] ">      

<div className="max-w-6xl bg-[#FFFDF7] mt-5  flex justify-between items-center w-full h-auto rounded-lg mx-auto py-5 px-10 space-y-3 md:space-y-0">
      {/* Text Section */}
      
      <div className="px-2 space-y-1">
        <h3 className="text-3xl font-semibold text-black/80">Contact Us</h3>
        <p className="text-sm text-gray-700">
          Share Your Gardening Dreams with Us!
        </p>
      </div>

      {/* Icon Section */}
      <div className="bg-gray-300 p-3 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300">
        <Sun size={30} />
      </div>
    </div>





{/* container  */}
<div className=" mt-5 flex gap-5 md:flex-row lg:flex-row flex-col h-auto    bg-[#FFFDF7]  gap-0 px-5  py-5   max-w-6xl w-full rounded-lg  ">


{/* left container  */}
<div className="flex flex-col space-y-4  w-2/3   ">

{/* visit us  */}
<div className="flex w-full flex-col bg-[#fdf7e3]  p-5 rounded-lg  ">

{/* icon */}
<div className=" flex gap-2   w-full  items-center  ">

<div className=" h-10 w-10 p-2.5   rounded-full flex justify-center items-center bg-amber-500 ">
<MapPin size={40} className="text-white/80 "></MapPin>
</div>

<h3 className="font-semibold text-xl text-gray-600 ">Visit Us</h3>
</div>


{/* description  */}
<div className=" flex flex-col space-y-0.5 text-xs mt-2   px-3 ">
<p>289, deva street, </p>
<p>tamil nadu, india - 604408</p>
</div>

{/* direction */}
<div>
  <a
    href="https://www.google.com/maps?q=vandavasi,"
    target="_blank"
    className="text-amber-400 text-xs px-3 mt-3 inline-block hover:underline"
  >
    Get Direction →
  </a>
</div>


</div>


{/* call us */}
<div className="flex w-full flex-col bg-[#fdf7e3]  p-5 rounded-lg  ">

{/* icon */}
<div className=" flex gap-2   w-full  items-center  ">

<div className=" h-10 w-10 p-2.5   rounded-full flex justify-center items-center bg-amber-500 ">
<Phone  size={40} className="text-white/80 "></Phone>
</div>

<h3 className="font-semibold text-xl text-gray-600 ">Call  Us</h3>
</div>


{/* description  */}
<div className="text-gray-600 flex flex-col gap-1 text-xs mt-2 px-3">
  <a href="tel:+918610297625" className="hover:text-amber-600">
    +91 8610297625
  </a>

  <a href="tel:+919789329304" className="hover:text-amber-600">
    +91 9789329304
  </a>
</div>





</div>



{/* email id  */}
<div className="flex w-full flex-col bg-[#fdf7e3]  p-5 rounded-lg  ">

{/* icon */}
<div className=" flex gap-2   w-full  items-center  ">

<div className=" h-10 w-10 p-2.5   rounded-full flex justify-center items-center bg-amber-500 ">
<Phone  size={40} className="text-white/80 "></Phone>
</div>

<h3 className="font-semibold text-xl text-gray-600 ">Call  Us</h3>
</div>


{/* description  */}
<div className=" text-gray-600 space-y-2  flex flex-col space-y-0.5 text-xs mt-2   px-3 ">
<a  className="hover:text-amber-600"  href="https://mail.google.com/mail/?view=cm&to=devp677@gmail.com&subject=Seed%20Inquiry" target="_blank">devp677@gmail.com</a>
<a  className="hover:text-amber-600"   href="https://mail.google.com/mail/?view=cm&to=sakthi2002@gmail.com&subject=Seed%20Inquiry" target="_blank">Sakthi@2002gmail.com</a>
</div>





</div>



{/* opening hours */}
<div className = "flex w-full flex-col bg-[#fdf7e3]  p-5 rounded-lg ">

{/* icon */}
<div className=" flex gap-2   w-full  items-center  ">

<div className=" h-10 w-10 p-2.5   rounded-full flex justify-center items-center bg-amber-500 ">
<Phone  size={40} className="text-white/80 "></Phone>
</div>

<h3 className="font-semibold text-xl text-gray-600 ">Opening Hours</h3>
</div>


{/* description */}

<div className=" mt-5 flex flex-col space-y-2 justify-between items-center w-full">

<div className="flex w-[90%] text-sm justify-between items-center" >
<p>Monday - Friday</p>
<p>7 AM - 10 PM</p>
</div>



<div className="flex w-[90%] text-sm justify-between items-center" >
<p>Saturday</p>
<p>8 AM - 11 PM</p>
</div>



<div className="flex w-[90%] text-sm justify-between items-center" >
<p>Sunday</p>
<p>8 AM - 11 PM</p>
</div>



</div>


</div>


{/* follows */}

<div className = "flex w-full flex-col bg-[#fdf7e3]  p-5 rounded-lg ">

{/* header */}
<div>
<h3 className="font-semibold">Follow Us</h3>
</div>

{/* description */}
<div className="mt-5 flex flex-row gap-4 items-center justify-center md:justify-start">
  <a
    href="https://facebook.com"
    target="_blank"
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-blue-100 hover:scale-110 transition-all duration-300"
  >
    <FaFacebook className="text-blue-600 text-lg" />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-pink-100 hover:scale-110 transition-all duration-300"
  >
    <FaInstagram className="text-pink-500 text-lg" />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:bg-blue-100 hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin className="text-blue-700 text-lg" />
  </a>
</div>

</div>

</div>



<div className="flex w-full flex-col ">

  
{/* right container */}
<div className=" flex  flex-col h-auto  max-w-6xl bg-[#fcf3dc] p-5 rounded-lg w-full  ">

{/* header content  */}
<div className=" flex w-full">
<h2 className=" font-semibold text-gray-700">Send  us a Message </h2>
</div>

{/* forms */}
<form className=" grid grid-cols-1 mt-4   w-full max-w-xl space-y-5  mx-auto  ">


{/* left container */}
  <div className=" flex flex-col w-full ">
    
    {/* name */}
<div className="relative flex flex-col w-full space-y-1  ">
  <label className="text-xs text-gray-700 font-medium  " htmlFor="name">Name</label>
  <input  className=" bg-[#FFFFFF] rounded-md outline-none  border-amber-300 focus:ring-2 focus:ring-amber-400 border  transition-all ease-in-out duration-300 py-2 px-10  placeholder-gray-300/80 " type="text" name="name " id="name" placeholder="Sakthi "   />
  <User className="absolute left-3 top-9/15 -translate-y-1/2 text-amber-400 " size={18}> </User>
</div>

{/* email id  */}

<div className="relative flex flex-col w-full space-y-1  ">
  <label className="text-xs text-gray-700 font-medium " htmlFor="name">Email Id</label>
  <input  className=" bg-[#FFFFFF] rounded-md outline-none  border-amber-300 focus:ring-2 transition-all ease-in-out  border  duration-300 focus:ring-amber-400 py-2 px-10  placeholder-gray-300/80 " type="email" name="email" id="email" placeholder="sakthi2002@gmail.com "   />
  <Mail className="absolute left-3 top-10 -translate-y-1/2 text-amber-400" size={18}> </Mail>
</div>



{/* Phone number */}
<div className="relative flex flex-col w-full space-y-1  ">
  <label className="text-xs text-gray-700 font-medium " htmlFor="name">Phone Number</label>
  <input  className=" bg-[#FFFFFF] rounded-md outline-none  py-2 px-10 border-amber-300 focus:ring-2 transition-all border  ease-in-out duration-300  focus:ring-amber-400  placeholder-gray-300/80 " type="number" name="phone number" id="phone number" placeholder="+91 8610297625 "   />
  <Phone className="absolute left-3 top-10 -translate-y-1/2 text-amber-400" size={18}> </Phone>
</div>


{/* subject  */}
<div className="relative flex flex-col w-full space-y-1  ">
  <label className="text-xs text-gray-700 font-medium" htmlFor="name">Subject</label>
  <input  className=" bg-[#FFFFFF] rounded-md outline-none  py-2 px-10 border-amber-300 focus:ring-2 transition-all border  ease-in-out duration-300 focus:ring-amber-400  placeholder-gray-300/80 " type="text" name="subject" id="subject" placeholder="How can we help ?"   />
  <MessageSquare className="absolute left-3 top-10 -translate-y-1/2 text-amber-400" size={18}> </MessageSquare>
</div>



{/* message  */}
{/* subject  */}
<div className=" flex flex-col w-full space-y-1  ">
  <label className="text-xs text-gray-700 font-medium " htmlFor="name">Message</label>
  <textarea  className=" bg-[#FFFFFF] rounded-md outline-none  py-2 px-5 border border-amber-300 transition-all ease-in-out duration-300  focus:ring-2 focus:ring-amber-400  placeholder-gray-300/80 "  name="message" id="message" placeholder="Tell us what on your mind..."   >
 
 </textarea>
</div>



{/* submit message  */}
<button className="flex items-center justify-center gap-2 w-full mt-3 rounded-lg text-sm bg-amber-400 py-3 px-5 text-white hover:bg-amber-500 transition">
  <Send size={18} />
  Send Message
</button>



{/* left container end now below */}
  </div>


  


</form>



</div>


{/* location maps */}
<div className="w-full max-w-6xl bg-[#fcf3dc] mt-5 mx-auto px-5 py-6 rounded-xl shadow-sm">

  {/* h eader */}
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-800">
      Find Us on Map
    </h3>
    <p className="text-sm text-gray-500">
      Locate our store and get directions
    </p>
  </div>

  {/* Map */}
  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-amber-200">
    <iframe
      src="https://www.google.com/maps?q=Vandavasi,Tamil Nadu&output=embed"
      className="w-full h-full"
      loading="lazy"
    ></iframe>
  </div>



</div>




</div>



</div>
































  {/* end of theat container */}
</div>

    












  );
}