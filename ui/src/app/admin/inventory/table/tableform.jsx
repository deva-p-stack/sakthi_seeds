"use client";

import { useEffect, useState } from "react";


import {Download,Trash,Pencil} from "lucide-react"

import {router} from "next/navigation"

import Link from "next/link";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import Image from "next/image"



export default function TableForm() {

  const router = useRouter();

  // open and close the delte form conditional rendering
  const [open, setOpen] = useState(false);

  // passing the id of the product  to delete the product
const [selectedId, setSelectedId] = useState(null);

 

    const [products, setProducts] = useState([]);


  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState("");


 


   async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/products", {
        method: "GET",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to fetch products");
      }

      setProducts(result.data || []);
    } catch (err) {
      console.error("GET error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


    return(
     <>
     
     
     <div className=" flex justify-between items-center border border-0 border-b-1 pb-5  border-gray-200 ">
    {/* left  */}
<div >
    <h3 className="font-bold text-xl  text-emerald-700">Active Inventory </h3>
</div>

{/* right */}
<div>
    <Download className=" text-emerald-500 cursor-pointer active:scale-95 duration-300 ease-in-out transition-all   hover:text-emerald-600 hover:scale-102 " size={25}></Download>
</div>

</div>



 <table className="w-full mt-3">
      
      {/* header */}
      <thead className="bg-white text-emerald-900">
        <tr>
          <th className="px-6 py-3 text-left">Product</th>
          <th className="px-4 py-3 text-left">Category</th>
          <th className="px-9 py-3 text-left">Units</th>
          <th className="px-6 py-3 text-left">Base Price</th>
          <th className="px-6 py-3 text-left">Status</th>
          <th className="px-6 py-3 text-left">Actions</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody>
        {products.map((item) => {
          // get first variant for display optiomal chaining
          const firstVariant = item.variants?.[0];

          // total unit for three header of the table 
          const totalStock = item.variants?.reduce(
            (acc, v) => acc + (v.stock || 0),0);

          return (
            <tr key={item._id} className="hover:bg-gray-50 ">

              {/* product*/}
              <td className="py-3 px-4">
                <div className="flex gap-3 items-center">

                  <div className="relative w-14 h-14 overflow-hidden rounded-md">
                    <Image
                      src={item.image_url}
                      alt={item.plant_name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-emerald-900 text-sm font-semibold">
                      {item.plant_name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {item.description?.slice(0, 25)}...
                    </p>
                  </div>

                </div>
              </td>

              
              <td className="px-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-600">
                  {item.category}
                </span>
              </td>

             
              <td className="px-7 text-sm">
                {totalStock} units
              </td>

              
              <td className="px-12 text-sm font-medium">
                ₹{firstVariant?.price || 0}
              </td>

             
             <td className={`text-sm font-semibold ${ item.availability === "in_stock"  ? "text-emerald-600 px-3" : "text-red-500"  }`}>
              {item.availability === "in_stock"   ? "• In Stock" : "• Out of Stock"}
                </td>

              
              <td className="px-8">
                <div className="flex gap-2">


                 <Trash className="cursor-pointer text-emerald-500 hover:text-red-500 transition" size={18}
                    onClick={() => {
                      setSelectedId(item._id);
                      setOpen(true);
                    }}
                  />



{open && (
  
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-20">
    
    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">

      <h2 className="text-lg font-semibold mb-4">
        Delete this seed?
      </h2>

      

      <div className="flex justify-center mt-3 gap-5 mx-4">

        {/* Cancel */}
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>

        {/* Delete */}
        <button
          onClick={async () => {
            try {
              const res = await fetch(`/api/admin/product/${selectedId}`, {
                method: "DELETE",
                credentials: "include",
              });

              const data = await res.json();

              if (!res.ok) throw new Error(data.message);

              toast.success("Deleted successfully");
              // close the dialog
              setOpen(false);

              // refresh page
              router.refresh();

            } catch (err) {
              toast.error(err.message);
            }
          }}
          className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>

      </div>
    </div>
  </div>
)}






                  <Link href={`/admin/inventory/${item._id}/edit`} className="cursor-pointer text-emerald-500 hover:text-emerald-700 transition">
                    <Pencil size={18} />
                
                   </Link>

                  
                </div>
              </td>

            </tr>
          );
        })}
      </tbody>

    </table>





     
     </>
    );
}