"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import AuthModal from "./auth/AuthModal";

export default function Header() {

  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("signin");

  // Load user when page loads
  useEffect(() => {
    setMounted(true);
    
    const savedUser = sessionStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const openSignIn = () => {
    setMode("signin");
    setIsModalOpen(true);
  };

  const openSignUp = () => {
    setMode("signup");
    setIsModalOpen(true);
  };

  // LOGIN
  const handleLogin = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsModalOpen(false);
  };

  // LOGOUT
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header>
      <div className="grid grid-cols-12 gap-2 bg-[#faf9fd] p-6 shadow-md outline outline-black/5 dark:bg-gray-800 py-3">

        {/* Logo */}
        <div className="col-span-3 flex items-center justify-center gap-2">
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
                onClick={openSignIn}
                className="hover:bg-gray-100 rounded-lg p-2 px-3"
              >
                Sign In
              </button>

              <button
                onClick={openSignUp}
                className="bg-blue-800 hover:bg-blue-700 text-white rounded-lg p-2 px-3"
              >
                Sign Up
              </button>
            </>
          )}

        </div>
      </div>

      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultMode={mode}
        onLogin={handleLogin}
      />
    </header>
  );
}