"use client";

import { useState } from "react";
import Header from "./Header";
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
        <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
            defaultMode={authMode}
        />
        {children}
    </>
  );
}