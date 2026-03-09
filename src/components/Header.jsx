"use client"

import { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

export default function Header({ onOpenSignIn, onOpenSignUp }) {

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header>
      <div className="grid grid-cols-12 gap-2 bg-white p-6 rounded-lg">

        {/* Logo */}
        <div className="col-span-3 flex items-center gap-2">
          <i className="fa-solid fa-bars fa-xl text-black"></i>
          <h1 className="text-black text-[28px] font-medium">
            Modern Store
          </h1>
        </div>

        {/* Search */}
        <div className="col-span-6">
          <SearchBar />
        </div>

        {/* Right Section */}
        <div className="col-span-3 flex items-center justify-center gap-3">

          <i className="fa-solid fa-heart fa-xl text-gray-600"></i>
          <i className="fa-solid fa-cart-shopping fa-xl text-gray-600"></i>

          {user ? (
            <ProfileMenu user={user} onLogout={handleLogout} />
          ) : (
            <>
              <button
                onClick={() => onOpenSignIn(setUser)}
                className="hover:bg-gray-100 rounded-lg p-2 px-3"
              >
                Sign In
              </button>

              <button
                onClick={() => onOpenSignUp(setUser)}
                className="bg-blue-800 hover:bg-blue-700 text-white rounded-lg p-2 px-3"
              >
                Sign Up
              </button>
            </>
          )}

        </div>

      </div>
    </header>
  );
}