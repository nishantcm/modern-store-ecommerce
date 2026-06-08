"use client";

import { usePathname, useRouter } from "next/navigation";
import { CATEGORIES, getActiveCategoryFromPath } from "@/data/products";
import { useSidebar } from "@/context/SidebarContext";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const active = getActiveCategoryFromPath(pathname);

  const linkClass = (name) =>
    `flex items-center px-3 py-2 rounded-lg w-55 ${
      active === name
        ? "bg-blue-900 text-white"
        : "text-gray-500 hover:bg-gray-100"
    }`;

  const handleCategoryClick = (href) => {
    router.push(href);

    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-17 left-0 z-40 w-64 h-full bg-white border-r transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-4 py-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6">Categories</h2>

        <ul className="space-y-2 font-medium">
          {CATEGORIES.map((category) => (
            <li key={category.slug}>
              <button
                type="button"
                onClick={() => handleCategoryClick(category.href)}
                className={linkClass(category.name)}
              >
                <span className="ml-2 font-semibold text-sm">{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
