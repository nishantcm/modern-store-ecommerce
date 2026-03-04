"use client";

import { useState } from "react";
import Header from "./Header";
import AuthModal from "./auth/AuthModal";

export default function MainLayout({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
        <Header onOpenAuth={() => setIsAuthOpen(true)} />
        <AuthModal
            isOpen={isAuthOpen}
            onClose={() => setIsAuthOpen(false)}
        />
        {children}
    </>
  );
}