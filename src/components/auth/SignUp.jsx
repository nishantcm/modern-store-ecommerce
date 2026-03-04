"use client";

export default function SignUp({ switchToSignIn }) {
  return (
    <div>
        <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
        <p className="text-gray-500 text-md">Join us and start shopping today</p>
        <div className="mt-4">
            <input
                type="Name"
                placeholder="Name"
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded mb-3"
            />

            <input
                type="password"
                placeholder="Enter your password"
                className="w-full border p-2 rounded mb-3"
            />
            <input
                type="password"
                placeholder="Confirm your password"
                className="w-full border p-2 rounded mb-3"
            />
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