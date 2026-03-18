"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AuthModal from "./auth/AuthModal";

export default function MainLayout({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const [sidebarOpen, setSidebarOpen] = useState(false); // 👈 moved here

  const [active, setActive] = useState("All");

  return (
    <>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onOpenSignIn={() => {
          setAuthMode("signin");
          setIsAuthOpen(true);
        }}
        onOpenSignUp={() => {
          setAuthMode("signup");
          setIsAuthOpen(true);
        }}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          active={active}
          setActive={setActive}
        />

        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        defaultMode={authMode}
      />
    </>
  );
}