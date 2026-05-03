"use client";


import { useEffect, useState } from "react";


export default function Seedcount() {

     const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProductCount() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/product-counts", {
        method: "GET",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch count");
      }

      setCount(result.totalProducts || 0);

    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductCount();
  }, []);
    return (    

        <>
        <div className="bg-white  group hover:cursor-pointer justify-center w-48 hover:border-emerald-500 space-y-1 border border-l-4 hover:-translate-y-1 duration-300 ease-in-out  border-l-emerald-300 border-0  rounded-2xl p-5  flex flex-col  ">
            {loading && <p>Loading...</p>}
               {error && <p className="text-red-500">{error}</p>}


{!loading && !error && (
        <h1 className="text-sm   font-semibold    text-gray-500 ">
          TOTAL SEEDS

          <p className=" text-2xl  group-hover:text-emerald-700  font-bold text-emerald-600">{count}</p>
        </h1>
      )}




</div>

{/* 
  <div className="p-4">
      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <h1 className="text-xl font-bold">
          Total Products: {count}
        </h1>
      )}
    </div> */}
        
        </>
    );


}