"use client";

export default function Sidebar({ isOpen, active, setActive }) {

  const linkClass = (name) =>
    `flex items-center px-3 py-2 rounded-lg w-55 ${
      active === name
        ? "bg-blue-900 text-white"
        : "text-gray-500 hover:bg-gray-100"
    }`;

  return (
    <aside
      className={`fixed top-17 left-0 z-40 w-64 h-full bg-white border-r transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-4 py-6 overflow-y-auto">

        <h2 className="text-xl font-semibold mb-6">Categories</h2>

        <ul className="space-y-2 font-medium">

          <li>
            <button onClick={() => setActive("All")} className={linkClass("All")}>
              <span className="ml-2 font-semibold text-sm">All</span>
            </button>
          </li>

          <li>
            <button onClick={() => setActive("Electronics")} className={linkClass("Electronics")}>
              <span className="ml-2 font-semibold text-sm">Electronics</span>
            </button>
          </li>

          <li>
            <button onClick={() => setActive("Clothings")} className={linkClass("Clothings")}>
              <span className="ml-2 font-semibold text-sm">Clothings</span>
            </button>
          </li>

          <li>
            <button onClick={() => setActive("Accessories")} className={linkClass("Accessories")}>
              <span className="ml-2 font-semibold text-sm">Accessories</span>
            </button>
          </li>

          <li>
            <button onClick={() => setActive("Home")} className={linkClass("Home")}>
              <span className="ml-2 font-semibold text-sm">Home</span>
            </button>
          </li>

        </ul>
      </div>
    </aside>
  );
}