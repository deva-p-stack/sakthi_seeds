import Image from "next/image";

import {Pencil, LeafyGreen, NotebookPen, Clock, Flower} from "lucide-react";

const orders = [
  {
    id: 1,
    items: "Carrot, Okra",
    date: "Oct 12, 2024",
    status: "Delivered",
  },
  {
    id: 2,
    items: "Tomato, Onion",
    date: "Oct 10, 2024",
    status: "Pending",
  },
  {
    id: 3,
    items: "Potato, Beans",
    date: "Oct 8, 2024",
    status: "Cancelled",
  },
];

 const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-50 text-emerald-700";
      case "Pending":
        return "bg-yellow-50 text-yellow-700";
      case "Cancelled":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

export default function profile(){


return (

<>

<section className="  flex  p-5 flex-col  max-w-5xl bg-[#F3F4F3] w-full h-[80vh]  ">

{/* heaader profile image  */}
<div className="flex w-full gap-6 items-center duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm  bg-white border border-gray-100 shadow-sm rounded-2xl p-6">

  {/* Profile Image */}
  <div className="relative shrink-0">
    <Image
      src="/image/profile.jpg"
      alt="Profile"
      width={120}
      height={120}
      className="rounded-full object-cover border-4 border-white shadow-md"
    />

    {/* Edit Icon */}
    <button className="absolute bottom-1 right-1 flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500 text-white shadow-md hover:bg-emerald-600 active:scale-95 transition">
      <Pencil size={16} />
    </button>
  </div>

  {/* Content */}
  <div className="flex flex-col justify-center space-y-3 w-full">

    {/* Name + Badge */}
    <div className="flex items-center flex-wrap gap-3">
      <h3 className="text-xl font-semibold text-gray-800">
        Aboorva
      </h3>

      <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">
        <LeafyGreen size={14} />
        Greenhouse Member
      </span>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
      Passionate about sustainability and green living. Always exploring ways
      to make everyday life more eco-friendly and impactful.
    </p>

  </div>
</div>


{/* below section  */}
<div className="flex gap-10 ">


{/* personal details */}
<div className="w-full max-w-md mt-6 bg-white duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm  rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">

  {/* Header */}
  <div className="flex items-center gap-3">
    <div className="p-3  rounded-lg bg-emerald-50 ">
      <NotebookPen size={18} className="text-emerald-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">
      Personal Details
    </h3>
  </div>

  {/* Personal */}
  <div className="space-y-4">

    {/* Email */}
    <div className="flex flex-col gap-1">
      <label htmlFor="email_id" className="text-xs font-medium text-gray-500 tracking-wide">
        EMAIL ADDRESS
      </label>
      <input
        type="email"
        id="email_id"
        placeholder="aboorva2002@gmail.com"
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition"
      />
    </div>

    {/* Phone */}
    <div className="flex flex-col gap-1">
      <label htmlFor="phone" className="text-xs font-medium text-gray-500 tracking-wide">
        PHONE NUMBER
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="+91 8610297625"
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />
    </div>

    {/* Location */}
    <div className="flex flex-col gap-1">
      <label htmlFor="location" className="text-xs font-medium text-gray-500 tracking-wide">
        LOCATION
      </label>
      <input
        type="text"
        id="location"
        placeholder="Thedavur Pudur, Veeraganur"
        className="px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />
    </div>

    {/* Button */}
    <div className="pt-2">
      <button className="w-full py-2.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 active:scale-[0.98] transition">
        Edit Profile
      </button>
    </div>

  </div>





</div>



{/* recent order  */}

<div className="w-full mt-6 bg-white border duration-300 hover:-translate-y-1 ease-in-out hover:shadow-lg shadow-sm  border-gray-100 shadow-sm rounded-2xl p-6 space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50">
            <Clock size={18} className="text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            Recent Orders
          </h3>
        </div>

        <button className="text-sm font-medium text-emerald-600 hover:underline">
          View All
        </button>
      </div>

      {/* Orders List */}
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.id}
            className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4 hover:bg-gray-100 transition"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-sm">
                <Flower size={18} className="text-gray-600" />
              </div>

              <div className="flex flex-col">
                <h4 className="text-sm font-semibold text-gray-800">
                  {order.items}
                </h4>
                <p className="text-xs text-gray-500">
                  Ordered: {order.date}
                </p>
              </div>
            </div>

            {/* Status */}
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(
                order.status
              )}`}
            >
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>


{/* below section end div */}
</div>

{/* my garden  */}






{/* Recent order */}
<div className=" flex flex-col ">

</div>



</section>

</>
);


}