"use client";

export default function SignIn({ switchToSignUp }) {
  return (
    <div>
        <h2 className="text-lg font-semibold mb-4">Sign In</h2>
        <p className="text-gray-500 text-md">Sign in to your account to continue shopping</p>
        <div className="mt-4">
            <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-3"
            />

            <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-3"
            />
        </div>

        <button className="w-full bg-black text-white py-2 rounded">
            Login
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