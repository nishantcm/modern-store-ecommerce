"use client";

import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";
import AuthModal from "./auth/AuthModal";
import { useRouter } from "next/navigation";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("signin");

  const router = useRouter();

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

  const handleLogin = (userData) => {
    sessionStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <header>
        <div className="flex items-center justify-between bg-[#faf9fd] p-4 shadow-md outline outline-black/5 dark:bg-gray-800">

          {/* Left: Logo + Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-200 hover:rounded-lg"
            >
              <i className="fa-solid fa-bars fa-lg text-black"></i>
            </button>

            <h1 className="text-black text-lg md:text-2xl font-medium">
              Modern Store
            </h1>
          </div>

          {/* Center: Search (hidden on small screens) */}
          <div className="hidden md:block w-1/2">
            <SearchBar />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => router.push("/wishlist")}
              className="p-2 hover:bg-gray-200 hover:rounded-lg"
            >
              <i className="fa-solid fa-heart text-gray-600"></i>
            </button>

            <button
              onClick={() => router.push("/cart")}
              className="p-2 hover:bg-gray-200 hover:rounded-lg"
            >
              <i className="fa-solid fa-cart-shopping text-gray-600"></i>
            </button>

            {user ? (
              <ProfileMenu user={user} onLogout={handleLogout} />
            ) : (
              <>
                <button
                  onClick={openSignIn}
                  className="hidden md:block hover:bg-gray-100 rounded-lg p-2 px-3"
                >
                  Sign In
                </button>

                <button
                  onClick={openSignUp}
                  className="hidden md:block bg-blue-800 hover:bg-blue-700 text-white rounded-lg p-2 px-3"
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
    </>
  );
}