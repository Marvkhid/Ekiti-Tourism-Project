'use client';
import { HomeIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Your First time in Ekiti?',
    'Ready to Explore Ekiti?',
    'Are you bored?',
    'Tired of seeing that view over and over again?',
    'Looking for the Best Hotels in Ekiti State?',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [texts.length]); // ✅ Fixed the warning

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center text-center mb-8 px-4 md:px-16"
      style={{
        backgroundImage: `url('/ikogosii.jpeg')`,
      }}
    >
      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-12 max-w-4xl w-full">
        <div className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full backdrop-blur-md bg-white/30 px-5 py-2">
          <HomeIcon className="h-8 w-8 text-white" />
          <p className="text-xl md:text-2xl font-semibold text-white">
            Find Your Dream Home
          </p>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-black transition-opacity duration-1000 ease-in-out">
          {texts[textIndex]}
        </h1>
        <p className="text-lg md:text-xl text-white mt-4">
          Discover the perfect place to live, rent, or invest.
        </p>
        <div className="flex justify-center my-8 px-8">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
