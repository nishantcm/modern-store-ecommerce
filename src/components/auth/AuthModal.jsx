"use client";

import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthModal({ isOpen, onClose, defaultMode, onLogin }) {

  const [authMode, setAuthMode] = useState(defaultMode);

  useEffect(() => {
    if (isOpen) {
      setAuthMode(defaultMode);
    }
  }, [isOpen, defaultMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[400px] relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500"
        >
          ✕
        </button>

        {authMode === "signin" ? (
          <SignIn
            switchToSignUp={() => setAuthMode("signup")}
            onLogin={(user) => {
              onLogin(user);
              onClose();
            }}
          />
        ) : (
          <SignUp
            switchToSignIn={() => setAuthMode("signin")}
            onLogin={(user) => {
              onLogin(user);
              onClose();
            }}
          />
        )}

      </div>
    </div>
  );
}