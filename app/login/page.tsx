"use client";

import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@gmail.com")) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    setError("");
    alert("Login successful! 🚀");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-12">
      <div className="w-full max-w-md p-8 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-6">
          Welcome to Ekiti Tourism 
        </h2>

        <p className="text-gray-900 text-xl text-center mb-6">Log in to explore Ekiti's beauty.</p>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black text-lg font-medium mb-2">Your Mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-black text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-600 text-center mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-green-700 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
