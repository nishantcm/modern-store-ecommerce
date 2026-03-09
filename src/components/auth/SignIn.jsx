"use client";

import { useState } from "react";

export default function SignIn({ switchToSignUp, onLogin }) {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {

      alert("Login successful");

      onLogin({
        name: data.user?.name || "User",
        email: data.user?.email || email
      });

    } else {
      alert(data.message);
    }
  };

  return (
    <div>

      <h2 className="text-lg font-semibold mb-4">Sign In</h2>
      <p className="text-gray-500 text-md">
        Welcome back! Please login to your account
      </p>

      <div className="mt-4">

        <div className="relative mb-3">
          <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border border-gray-600 p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
        </div>

        <div className="relative mb-3">

          <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border border-gray-600 p-2 pl-10 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <i
            onClick={()=>setShowPassword(!showPassword)}
            className={`fa-solid ${
              showPassword ? "fa-eye-slash" : "fa-eye"
            } absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer`}
          ></i>

        </div>

      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Sign In
      </button>

      <p className="text-sm mt-4 text-center">
        Don't have an account?{" "}
        <span
          onClick={switchToSignUp}
          className="text-blue-600 cursor-pointer"
        >
          Sign Up
        </span>
      </p>

    </div>
  );
}