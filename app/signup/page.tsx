"use client";

import { useState } from "react";
import Image from "next/image";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const statesInNigeria = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT (Abuja)"
];

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    stateOfOrigin: "",
    visitingAsForeigner: false,
    firstTimeInEkiti: false,
    needAccommodation: false,
    visitingForTourism: false,
    visitingForVacation: false,
    interestedInCulturalEvents: false,
    exploringInvestmentOpportunities: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.stateOfOrigin) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/auth/signup", formData);
      alert("Signup successful! 🚀");
      router.push("/dashboard"); // Redirect to the dashboard after signup
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12">
      <div className="w-full max-w-5xl rounded-2xl gap-24 shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-10">
          <div className="flex mb-4 max-w-fit mx-auto lg:mx-0 items-center justify-center space-x-3 rounded-full px-7 py-3">
            <HomeIcon className="h-6 w-6 text-green-600" />
            <p className="text-lg font-semibold rounded-xl border-green-300 text-green-700">Explore Ekiti</p>
          </div>
          <h2 className="text-4xl font-bold text-black mb-6">Your Details</h2>
          {error && <p className="text-red-600 text-lg text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-black text-xl font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-4 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-black text-xl font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full p-4 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-black text-xl font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full p-4 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-black text-xl font-medium mb-2">State of Origin</label>
              <select
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg text-black text-lg focus:outline-none focus:border-green-600"
                required
              >
                <option value="">Select your state</option>
                {statesInNigeria.map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {Object.keys(formData).slice(4).map((key) => (
              <div key={key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name={key}
                  checked={formData[key as keyof typeof formData] as boolean}
                  onChange={handleChange}
                  className="h-5 w-5"
                />
                <label className="text-lg text-black font-medium">{key.replace(/([A-Z])/g, ' $1')}</label>
              </div>
            ))}

            <button
              type="submit"
              className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <Image src="/tourism-logo.jpeg" alt="Tourism Logo" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
