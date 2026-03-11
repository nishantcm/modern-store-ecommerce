"use client";

import { useState } from "react";
import { FaUserCircle} from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

export default function ProfileMenu({ user, onLogout }) {

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setOpen(false);
  };

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-gray-700 hover:text-black mt-2"
      >
        <FaUserCircle />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-50 bg-zinc-100 shadow-lg rounded-md shadow-md outline outline-black/5 dark:bg-gray-800 p-2">

          <div className="border-b pb-3 mb-3">
            <p className="font-semibold text-gray-800">
              {user?.name || "User"}
            </p>
            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-600"
          >
            <PiSignOutBold size={25} />
            Sign Out
          </button>

        </div>
      )}

    </div>
  );
}