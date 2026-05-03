"use client"

export default function dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Welcome Back 
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-gray-500 mt-2">120 Orders</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Seeds Purchased</h3>
          <p className="text-gray-500 mt-2">45 Types</p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold">Farm Growth</h3>
          <p className="text-gray-500 mt-2">+20% Growth</p>
        </div>

      </div>
    </div>
  );
}