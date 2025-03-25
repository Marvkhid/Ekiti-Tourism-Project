"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { EyeIcon, EyeOffIcon, HomeIcon, Loader2 } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.error) {
        setError("Invalid email or password!");
      } else {
        router.push("/dashboard"); 
      }
    } catch (err) {
      setError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-white">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex mb-4 max-w-fit mx-auto lg:mx-0 items-center justify-center space-x-3 rounded-full bg-green-100 px-7 py-3">
            <HomeIcon className="h-6 w-6 text-green-600" />
            <p className="text-lg font-semibold text-green-700">Explore Ekiti</p>
          </div>
          <h2 className="text-4xl font-bold text-black text-center mb-6">Welcome Back!</h2>
          <p className="text-gray-700 text-lg text-center mb-6">Sign in to continue your journey.</p>

          {error && <p className="text-red-600 text-lg text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-black text-xl font-medium mb-2">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
                className="w-full p-4 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-black text-xl font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                  required
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon size={24} /> : <EyeIcon size={24} />}
                </div>
              </div>
              <div className="text-center mt-4">
                <Link href="/forgot-password" className="text-green-700 font-semibold text-lg hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white text-xl font-semibold py-4 rounded-lg transition-all duration-300"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Login"}
            </button>

            <div className="text-lg text-center">
              Not yet part of us?{" "}
              <Link href="/signup" className="text-green-800 font-semibold hover:underline">Sign Up</Link>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-end p-6">
          <img
            src="/tourism-logo.jpeg"
            width="400"
            height="400"
            alt="Tourism Logo"
            className="rounded-lg shadow-md"
          />
        </div>
      </div> 
    </div>
  );
};

export default LoginPage;
