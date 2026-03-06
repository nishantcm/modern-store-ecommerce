"use client";

import { useState } from "react";

export default function SignUp({ switchToSignIn }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div>
        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        <p className="text-gray-500 text-md">Join us and start shopping today</p>
        <div className="mt-4">
            {/* User */}
            <div className="relative mb-3">
                <i className="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
                <input
                    type="Name"
                    placeholder="Name"
                    className="w-full border border-gray-600 p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />
            </div>
            {/* Email */}
            <div className="relative mb-3">
                <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-600 p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />
            </div>

            {/* Password */}
            <div className="relative mb-3">
                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border border-gray-600 p-2 pl-10 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />

                <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={`fa-solid ${
                    showPassword ? "fa-eye-slash" : "fa-eye"
                    } absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer`}
                ></i>
            </div>
            {/* Password */}
            <div className="relative mb-3">
                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="w-full border border-gray-600 p-2 pl-10 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
                />

                <i
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`fa-solid ${
                    showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                    } absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer`}
                ></i>
            </div>
        </div>

        <button className="w-full bg-blue-700 text-white py-2 rounded">
            Create Account
        </button>

        <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <span
                onClick={switchToSignIn}
                className="text-blue-600 cursor-pointer"
            >
                Sign In
            </span>
        </p>
    </div>
  );
}