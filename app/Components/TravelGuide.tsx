"use client";

import React from "react";

const TravelGuide: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-900">
         Plan Your Visit: Travel Guide 
      </h2>

      <div className="space-y-6 text-lg md:text-xl leading-relaxed">
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h3 className="font-semibold text-green-800">Best Time to Visit</h3>
          <p>Ekiti is beautiful all year round, but the dry season (November to April) offers the best travel experience.</p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h3 className="font-semibold text-green-800">Transportation</h3>
          <p>You can travel by road from major cities like Lagos and Abuja. Local taxis and bikes are common for getting around.</p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h3 className="font-semibold text-green-800">Where to Stay</h3>
          <p>Ekiti offers a range of hotels from budget-friendly to premium stays. Book ahead during festivals!</p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h3 className="font-semibold text-green-800">Local Delicacies</h3>
          <p>Don't miss out on Ekiti&apos;s famous pounded yam with egusi soup. Street food is also a must-try!</p>
        </div>

        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h3 className="font-semibold text-green-800">Safety Tips</h3>
          <p>Ekiti is generally safe, but always keep an eye on your belongings and use trusted transport services.</p>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
