"use client";

import { useEffect, useState } from "react";

export default function Outofstock() {

 const [stockInfo, setStockInfo] = useState({inStock: 0, outOfStock: 0,});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const fetchProductStock = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/product-stock", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to fetch stock info");
    }

    // save the in stock and out of stock counts in state
    setStockInfo({
      inStock: result.inStock || 0,
      outOfStock: result.outOfStock || 0,
    });

  } catch (err) {
    console.error("Error:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchProductStock();
}, []);

  
    return (
        <>

 {/* second card */}
<div className="bg-white  group hover:cursor-pointer justify-center w-48 hover:border-emerald-500 space-y-1 border border-l-4 hover:-translate-y-1 duration-300 ease-in-out  border-l-emerald-300 border-0  rounded-2xl p-5  flex flex-col ">

<h3 className="text-sm   font-semibold    text-gray-500 ">OUT OF STOCK  </h3>
<p className="text-2xl  group-hover:text-emerald-700  font-bold text-emerald-600">   {loading ? "..." : stockInfo.outOfStock} </p>


</div>

{/* third card */}
<div className="bg-white  group hover:cursor-pointer justify-center w-48 hover:border-emerald-500 space-y-1 border border-l-4 hover:-translate-y-1 duration-300 ease-in-out  border-l-emerald-300 border-0  rounded-2xl p-5  flex flex-col ">


<h3 className="text-sm   font-semibold    text-gray-500 ">IN STOCK </h3>
<p className="text-2xl  group-hover:text-emerald-700  font-bold text-emerald-600"> {loading ? "..." : stockInfo.inStock}</p>


</div> 




        </>
    );
}





