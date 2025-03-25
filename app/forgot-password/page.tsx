'use client';

import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

//backend guys , replace this with your credentials...t for thanks 
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Check your email.');
    } catch (err) {
      console.error("Error resetting password:", err); // Logs the actual error
      setError('Failed to send reset link. Please check your email.');
    }
    
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-6 md:px-12 text-black text-center">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-100 shadow-lg rounded-2xl p-8"
      >
        <Image src='/tourism-logo.jpeg' alt="Ekiti Logo" width={80} height={80} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="mb-4 text-gray-600">Enter your email to reset your password</p>
        {message && <p className="text-green-600 mb-3">{message}</p>}
        {error && <p className="text-red-600 mb-3">{error}</p>}
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </motion.button>
        </form>
        <p className="mt-4 text-gray-500 text-sm">
          Remembered your password? <a href="/login" className="text-green-600 font-semibold">Login</a>
        </p>
      </motion.div>
      <motion.div 
        className=" text-center mt-6 text-green-700 font-extrabold text-xl overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        Bringing you the best of Ekiti Tourism... Explore, Experience, Enjoy!
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
