"use client";

import { usePathname } from "next/navigation";

import Header from "@/app/Components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return !isAdminRoute && <Header />;
}
 