"use client";

import { useAuth,logout } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  ListOrdered,
  Heart,
  Settings,
} from "lucide-react";


export default function AdminSidebar() {

  const { user, logout } = useAuth();

  if (!user) return null;
   const pathname = usePathname(); 

   const menu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Inventory", href: "/admin/inventory", icon: User },
    { name: "Orders", href: "/admin/orders", icon: ListOrdered },
    { name: "Customer", href: "/admin/customer", icon: Heart },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];
  

  return (
    <aside className="w-64 bg-white border-r border-emerald-50  shadow-sm p-5 flex flex-col justify-between">
      
      {/* TOP */}
      <div>
        {/* LOGO / TITLE */}
        <h2 className="text-2xl font-bold mb-8 text-emerald-600 tracking-tight">
          🌱 Dashboard
        </h2>

        {/* MENU */}
        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 
                ${
                  isActive
                    ? "bg-emerald-100 text-emerald-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM (optional section) */}
      <div className="mt-10 text-xs text-gray-400">
        © 2026 Admin Panel
      </div>
    </aside>
  );
}
 
