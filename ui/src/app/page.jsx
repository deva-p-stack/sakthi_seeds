import Image from "next/image";
import { Sprout,Rose,Bean,Truck,Brain,Leaf,ShieldCheck,ShoppingCart } from "lucide-react"; 

import Footerr from "./Components/Footer"

export default function Home() {


  const iconMap = {
  Bean,
  Truck,
  Brain,
  ShieldCheck,
  Rose,
  Leaf
};

const products = [
  {
    "id": 1,
    "title": "Quality Seeds",
    "description": "Premium quality seeds carefully selected to ensure healthy growth and higher crop yield.",
    "icon": "Bean",
    "bgColor": "bg-emerald-100",
    "iconColor": "text-emerald-600"
  },
  {
    "id": 2,
    "title": "Fast Delivery",
    "description": "Secure, temperature-controlled packing arriving in 3–5 days.",
    "icon": "Truck",
    "bgColor": "bg-blue-100",
    "iconColor": "text-blue-600"
  },
  {
    "id": 3,
    "title": "Expert Support",
    "description": "Direct access to horticulturists for planting and care guidance.",
    "icon": "Brain",
    "bgColor": "bg-yellow-100",
    "iconColor": "text-yellow-600"
  },
  {
    "id": 4,
    "title": "Certified Organic",
    "description": "Natural, chemical-free seeds sourced from reliable growers worldwide.",
    "icon": "ShieldCheck",
    "bgColor": "bg-green-100",
    "iconColor": "text-green-600"
  },
  {
    "id": 5,
    "title": "Bio Fertilizer",
    "description": "Eco-friendly fertilizers that improve soil health and promote natural plant growth.",
    "icon": "Rose",
    "bgColor": "bg-pink-100",
    "iconColor": "text-pink-600"
  },
  {
    "id": 6,
    "title": "High Yield Seeds",
    "description": "Carefully selected seeds designed to produce higher yields and better crop performance.",
    "icon": "Leaf",
    "bgColor": "bg-lime-100",
    "iconColor": "text-lime-600"
  }
];





  return (

    <>

{/* hero section */}

<div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">

  {/* Background Image */}
  <Image
    src="/image/home.jpg"
    alt="background"
    fill
    priority
    className="object-cover brightness-75"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">

    {/* Content Wrapper */}
    <div className="max-w-2xl space-y-5">

      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
        Growing Stronger Crops,
        <span className="block text-emerald-300">
          One Seed at a Time
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-white/80 text-sm sm:text-base lg:text-lg">
        High-quality, high-yield seeds carefully selected for better growth
        and maximum productivity.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">

        {/* Primary */}
        <button className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition">
          Explore Seeds
        </button>

        {/* Secondary */}
        <button className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/20 backdrop-blur-md transition">
          Contact Us
        </button>

      </div>

    </div>
  </div>
</div>








{/* Features speciements items */} 
<section className="w-full bg-emerald-50 flex items-center justify-center  flex-col   max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1900px] mx-auto py-16 px-4">

  {/* Title */}
  <h3 className="text-2xl sm:text-3xl text-center mb-8 text-emerald-800 font-bold">
    Top Picks 🌱
  </h3>

  {/* Grid */}
  <div className="flex flex-col md:flex-row flex-wrap items-center justify-center  gap-20 w-full max-w-[1200px]">

    {/* Card */}
    {[
      {
        name: "Brinjal",
        price: 100,
        image: "/image/brinjalai.jpg",
        desc: "Premium brinjal seeds for healthy, homegrown vegetables",
      },
      {
        name: "Okra",
        price: 250,
        image: "/image/okra.jpg",
        desc: "Grow fresh, healthy green pods right at home",
      },
      {
        name: "Tapioca",
        price: 300,
        image: "/image/Tapioca.jpg",
        desc: "High-quality seeds for nutritious cassava plants",
      },
    ].map((item, index) => (
      <div
  key={index}
  className="w-full max-w-[280px] bg-white rounded-2xl p-4 shadow-md 
             hover:shadow-lg transition duration-300 hover:-translate-y-1  flex flex-col"
>

        {/* Image */}
        <div className="relative w-full h-40 sm:h-48 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-semibold text-lg">{item.name}</h3>

          <select className="border border-gray-300 rounded-full px-2 py-1 text-xs focus:outline-none">
            <option>50g</option>
            <option>100g</option>
            <option>250g</option>
          </select>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {item.desc}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">

          <span className="font-bold text-lg text-emerald-700">
            ₹ {item.price}
          </span>

          <button className="w-10 h-10 flex items-center justify-center rounded-full 
                             bg-emerald-100 hover:bg-emerald-500 
                             transition duration-300 active:scale-95">
            <ShoppingCart size={18} className="text-emerald-700 group-hover:text-white" />
          </button>

        </div>
      </div>

    ))}

  </div>

</section>










   {/* feature section */}
 <section className=" max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1900px]   min-h-screen mx-auto w-full bg-emerald-50">


  <h3 className="text-4xl font-semibold text-center  py-10 text-emerald-800 ">What We Offer </h3>








{/* product name */}
<div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">


{products.map((item) => {
  const Icon = iconMap[item.icon];

  return (
    <div
      key={item.id}
      className="p-5 w-full min-h-[140px] max-w-[350px] rounded-xl bg-white 
      border border-gray-300 hover:border-emerald-500 shadow-sm 
      flex flex-col justify-center items-center gap-3 
      transition-all duration-300 ease-in-out 
      hover:scale-[1.02] hover:shadow-lg active:scale-[0.99]"
    >

      {/* icon */}
      <div className={`p-5 flex justify-center items-center rounded-full ${item.bgColor} opacity-90`}>
        <Icon size={40} className={`brightness-50 ${item.iconColor}`} />
      </div>

      {/* title */}
      <div className="flex justify-center flex-col space-y-2 w-full items-center">
        <h3 className="text-xl pb-1 font-semibold tracking-wide text-emerald-800">
          {item.title}
        </h3>
      </div>

      {/* description */}
      <div className="flex w-full">
        <p className="text-sm text-gray-500 text-center">
          {item.description}
        </p>
      </div>

    </div>
  );
})}







</div>

 

{/* work india */}










</section>



{/* explore the collection */}
<section  className="flex flex-col pt-5 w-full max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1900px] mx-auto  min-h-[80vh] bg-emerald-50  ">


{/* header */}
<div className="flex flex-col space-y-1 px-10">

  {/* first */}
    <div>
    <h3 className="font-bold tracking-wide text-emerald-600 text-[10px] ">CURATED COLLECTIONS</h3>
  </div>

{/* second */}
  <div>
    <h3 className=" font-semibold text-4xl text-emerald-800">Explore the kingdom</h3>
  </div>

</div>


{/* image container */}
<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-30 lg:grid-cols-3  mt-8">

  {/* first card */}
  <div className="relative w-[300px] h-[320px] rounded-2xl overflow-hidden group cursor-pointer">

    <Image
      src="/image/vegetable.jpg"
      alt="Vegetables"
      fill
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    {/*  gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    {/* Text */}
    <div className="absolute bottom-6 left-4 text-white">
      <h3 className="text-xl font-semibold tracking-wide">
        Vegetables
      </h3>
      <p className="text-sm text-gray-200">
        Fresh Harvest
      </p>
    </div>

  </div>

{/* second card */}

<div className="relative w-[300px] h-[320px] rounded-2xl overflow-hidden group cursor-pointer">

    <Image
      src="/image/fruits.jpg"
      alt="Vegetables"
      fill
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    {/*  gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    {/* Text */}
    <div className="absolute bottom-6 left-4 text-white">
      <h3 className="text-xl font-semibold tracking-wide">
        Fruits
      </h3>
      <p className="text-sm text-gray-200">
        Farm Fruits
      </p>
    </div>

  </div>


{/* third card */}
 {/* <div className="relative w-[300px] h-[320px] rounded-2xl overflow-hidden group cursor-pointer"> */}

    {/* <Image
      src="/image/grains.jpg"
      alt="grains"
      fill
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    /> */}

    {/*  gradient */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div> */}

    {/* Text */}
    {/* <div className="absolute bottom-6 left-4 text-white">
      <h3 className="text-xl font-semibold tracking-wide">
        Grains
      </h3>
      <p className="text-sm text-gray-200">
        Natural Grains
      </p>
    </div> */}

  {/* </div>  */}

{/* fourth card */}
<div className="relative w-[300px] h-[320px] rounded-2xl overflow-hidden group cursor-pointer">

    <Image
      src="/image/flower.jpg"
      alt="flower"
      fill
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
    />

    {/*  gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

    {/* Text */}
    <div className="absolute bottom-6 left-4 text-white">
      <h3 className="text-xl font-semibold tracking-wide">
        Flower
      </h3>
      <p className="text-sm text-gray-200">
        Natural Flower
      </p>
    </div>

  </div>



</div>


</section>







{/* Reviews */}


<section className="w-full bg-emerald-50 max-w-[1440px] xl:max-w-[1500px] 2xl:max-w-[1900px] mx-auto py-12 px-4">

  {/* Title */}
  <div className="text-center mb-10">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800">
      Review Us 🌱
    </h3>
    <p className="text-gray-600 text-sm mt-2">
      What our customers say about us
    </p>
  </div>

  {/* Grid */}
  <div className="
    grid gap-6
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3
  ">

    {[
      {
        text: "The seeds I ordered germinated perfectly! My garden has never looked healthier.",
        name: "Sakthi 🤍 ✨",
      },
      {
        text: "Fast delivery and premium quality seeds. Highly recommend!",
        name: "Deva ❤ ✨",
      },
      {
        text: "Organic seeds that really work. My crops grew healthy and strong.",
        name: "Sakthi 💙 ✨",
      },
      {
        text: "Excellent germination rate and expert guidance made planting easy.",
        name: "Dinesh 💙 ✨",
      },
      {
        text: "High-yield seeds that gave my farm a great harvest this season.",
        name: "Priya 🖤 ✨",
      },
      {
        text: "Eco-friendly fertilizers and quality seeds helped my garden flourish!",
        name: "Abroova ❤ ✨",
      },
    ].map((item, index) => (
      
      <div
        key={index}
        className="
          bg-white/70 backdrop-blur-md
          border border-gray-200
          rounded-xl p-5
          shadow-sm hover:shadow-lg
          transition duration-300
          hover:-translate-y-1
          flex flex-col justify-between
        "
      >

        {/* Review Text */}
        <p className="text-gray-700 text-sm leading-relaxed">
          “{item.text}”
        </p>

        {/* Footer */}
        <div className="mt-6 text-right">
          <h4 className="text-emerald-800 font-semibold text-sm">
            — {item.name}
          </h4>
        </div>

      </div>

    ))}

  </div>

</section>








{/* Email section */}
<section className="flex flex-col justify-center items-center bg-emerald-50 min-h-[60vh] pt-5 w-full px-4">

  {/* Card Container */}
  <div className="max-w-2xl w-full bg-white rounded-2xl p-8 flex flex-col items-center space-y-5 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out">

    {/* Heading */}
    <h3 className="text-3xl font-bold text-emerald-700 text-center tracking-wide">
      Cultivate Your Inbox
    </h3>

    {/* Subtext */}
    <p className="text-center text-emerald-800 text-sm md:text-base leading-relaxed">
      Receive weekly tips on seasonal planting, traditional  seeds, and eco-friendly gardening.
    </p>

    {/* Input + Button */}
    <div className="flex flex-col sm:flex-row w-full gap-3 mt-3">
      <input
        type="email"
        name="email_join"
        id="email_join"
        placeholder="Your gardening email..."
        className="flex-1 px-5 py-3 rounded-2xl border border-gray-300 bg-emerald-50 text-gray-700 outline-none focus:ring-2 focus:ring-emerald-200 transition"
      />
      <button
        type="button"
        className="px-6 py-3 rounded-3xl cursor-pointer active:scale-95  hover:scale[100.2] bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition"
      >
        Subscribe
      </button>
    </div>

  </div>

</section>




<Footerr>
  
</Footerr>






    </>
 


// Rose




  );
}