"use client";

import { useState } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function ProfileMenu({ user, onLogout }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-gray-700 hover:text-black mt-2"
      >
        <FaUserCircle />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-xl border p-4">

          <div className="border-b pb-3 mb-3">
            <p className="font-semibold text-gray-800">
              {user?.name || "User"}
            </p>
            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <FaSignOutAlt />
            Sign Out
          </button>

        </div>
      )}

    </div>
  );
}