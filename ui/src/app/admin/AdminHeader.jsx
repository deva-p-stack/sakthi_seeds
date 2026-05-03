"use client";
import {LogOut} from "lucide-react";

import { useAuth } from "@/context/AuthContext"; 

export default function AdminHeader() {


    const { user, logout } = useAuth();

  if (!user) return null;


  return (
    <header className="bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold text-white/90 tracking-wide">
            Admin Dashboard
          </h2>
          <p className=" text-sm text-white/80">
            Manage your system efficiently
          </p>
        </div>

        {/* right  */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm">
          {/* avatar */}
          <img
            className="w-10 h-10 rounded-full border-2 border-white shadow"
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              user.full_name || "Admin",
            )}&background=ffffff&color=10b981&size=128`}
            alt="avatar"
          />

          {/* user */}
          <div className="text-right">
            <div class="flex items-center gap-1 ">
              <p className="text-white font-semibold text-sm">
                {user.full_name || "Admin"}
              </p>
            </div>
          </div>

              {/* logout button */}
                <button onClick={logout} className="text-sm hover:cursor-pointer text-white/80 hover:text-white transition">
                  <LogOut className="w-4 h-4" />
                </button>

        </div>



      </div>
    </header>
  );
}
