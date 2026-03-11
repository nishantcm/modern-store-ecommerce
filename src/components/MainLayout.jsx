"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AuthModal from "./auth/AuthModal";

export default function MainLayout({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  return (
    <>
      <Header
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
        <Sidebar />

        <main className="flex-1 ml-64 p-6">
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