"use client";

import { useState } from "react";

export default function SignUp({ switchToSignIn, onLogin }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {

      alert("Account created successfully");

      onLogin({
        name: name,
        email: email
      });

    } else {

      if (data.message === "User already exists") {

        // Auto login existing user
        onLogin({
          name: name,
          email: email
        });

      } else {
        alert(data.message);
      }

    }
  };

  return (
    <div>

      <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
      <p className="text-gray-500 text-md">
        Join us and start shopping today
      </p>

      <div className="mt-4">

        {/* NAME */}
        <div className="relative mb-3">

          <i className="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border border-gray-600 p-2 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

        </div>

        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-3">

          <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"></i>

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="w-full border border-gray-600 p-2 pl-10 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          />

          <i
            onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
            className={`fa-solid ${
              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
            } absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer`}
          ></i>

        </div>

      </div>

      <button
        onClick={handleSignup}
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
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