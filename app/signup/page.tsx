"use client";

import { useState } from "react";

const statesInNigeria = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT (Abuja)"
];

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    stateOfOrigin: "",
    gender: "",
    hasVisitedEkiti: "",
    visitingAsTourist: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.stateOfOrigin || !formData.gender || !formData.hasVisitedEkiti) {
      setError("All fields are required!");
      return;
    }

    if (!formData.email.includes("@gmail.com")) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    setError("");
    alert("Signup successful! 🚀");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6 py-12">
      <div className="w-full max-w-lg p-8 border rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-black text-center mb-6">
          Sign Up for Ekiti Tourism 🌍
        </h2>

        <p className="text-gray-600 text-center mb-6">Join us and explore Ekiti</p>

        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">Your mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            />
          </div>

          {/* State of Origin */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">State of Origin</label>
            <select
              name="stateOfOrigin"
              value={formData.stateOfOrigin}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-green-600"
              required
            >
              <option value="">Select your state</option>
              {statesInNigeria.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">Gender</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Have they been to Ekiti before? */}
          <div>
            <label className="block text-black text-lg font-medium mb-2">Have you been to Ekiti before?</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hasVisitedEkiti"
                  value="Yes"
                  onChange={handleChange}
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hasVisitedEkiti"
                  value="No"
                  onChange={handleChange}
                  required
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Visiting as a tourist */}
          <div>
            <label className="flex items-center space-x-2 text-black text-lg font-medium">
              <input
                type="checkbox"
                name="visitingAsTourist"
                checked={formData.visitingAsTourist}
                onChange={handleChange}
              />
              <span>Are you visiting as a tourist?</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white text-lg font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
