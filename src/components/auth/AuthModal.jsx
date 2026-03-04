"use client";

import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

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

            {isSignUp ? (
                <SignUp switchToSignIn={() => setIsSignUp(false)} />
                ) : (
                <SignIn switchToSignUp={() => setIsSignUp(true)} />
            )}
        </div>
    </div>
  );
}