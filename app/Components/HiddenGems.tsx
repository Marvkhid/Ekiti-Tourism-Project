"use client";

import { useState, useEffect } from "react";

const funFacts: string[] = [
  "“Ekiti” means “Hill” The name reflects its mountainous terrain!",
  "Ekiti has over 120 hills, making it a paradise for hikers",
  "The first Nigerian professor of mathematics, Adegoke Olubummo, was from Ekiti.",
  "Ekiti is known for its rich cultural festivals, including Udiroko and Ogun Festival.",
  "Fajuyi Park in Ado-Ekiti is named after a hero who sacrificed himself for Nigeria.",
  "Ekiti is known to make the best pounded yam in Nigeria. A must-try for food lovers!",
  "The Ikogosi Warm Springs is a rare natural wonder where warm and cold water meet.",
];

const HiddenGems: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10 p-6 bg-green-400 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
         Hidden Gems of Ekiti 
      </h2>
      <p
        className="text-lg md:text-xl text-center italic transition-opacity duration-1000 ease-in-out"
      >
        {funFacts[index]}
      </p>
    </div>
  );
};

export default HiddenGems;
