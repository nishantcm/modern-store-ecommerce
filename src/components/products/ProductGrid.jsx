"use client";

import { useSidebar } from "@/context/SidebarContext";

export default function ProductGrid({ children }) {
  const { sidebarOpen } = useSidebar();

  const gridClass = sidebarOpen
    ? "grid grid-cols-1 gap-5 min-[577px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    : "grid grid-cols-1 gap-5 min-[577px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

  return <div className={gridClass}>{children}</div>;
}
