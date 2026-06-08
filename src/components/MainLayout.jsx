"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AuthModal from "./auth/AuthModal";
import Toast from "./Toast";
import { WishlistProvider } from "@/context/WishlistContext";
import { ToastProvider } from "@/context/ToastContext";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

function LayoutContent({ children, isAuthOpen, setIsAuthOpen, authMode, setAuthMode }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

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

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex">
        <Sidebar />

        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? "md:ml-64" : "ml-0"
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

      <Toast />
    </>
  );
}

export default function MainLayout({ children }) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  return (
    <ToastProvider>
      <WishlistProvider>
        <SidebarProvider>
          <LayoutContent
            isAuthOpen={isAuthOpen}
            setIsAuthOpen={setIsAuthOpen}
            authMode={authMode}
            setAuthMode={setAuthMode}
          >
            {children}
          </LayoutContent>
        </SidebarProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
