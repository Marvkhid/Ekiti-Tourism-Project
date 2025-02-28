import React from "react";

const Features = () => {
  return (
    <section className="w-full py-12 bg-gray-50 border-b">
      <div className="container px-4 md:px-16 mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-800">
          Attractive Centres in Ekiti State
        </h2>

        <div className="grid gap-6 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Ikogosi Warm Spring */}
          <div className="border rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white max-w-xs">
            <img
              src="/ikog.jpeg"
              alt="Ikogosi Warm Spring"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-500"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-900 lg:text-blue-700 transition-colors duration-300">
                Ikogosi Warm Spring
              </h3>
              <p className="text-sm sm:text-base text-gray-600 lg:text-gray-700">
                Experience the unique confluence of warm and cold springs at
                Ikogosi—a perfect spot for relaxation and sightseeing.
              </p>
            </div>
          </div>

          {/* Arinta Waterfalls */}
          <div className="border rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white max-w-xs">
            <img
              src="/arinta.webp"
              alt="Arinta Waterfalls"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-500"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-900 lg:text-green-700 transition-colors duration-300">
                Arinta Waterfalls
              </h3>
              <p className="text-sm sm:text-base text-gray-600 lg:text-gray-700">
                A beautiful cascade surrounded by lush greenery. Ideal for
                hiking, picnics, and nature photography.
              </p>
            </div>
          </div>

          {/* Fajuyi Memorial Park */}
          <div className="border rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white max-w-xs">
            <img
              src="/fajuyi.webp"
              alt="Fajuyi Memorial Park"
              className="w-full h-52 sm:h-56 lg:h-64 object-cover transition-all duration-500"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-900 lg:text-red-700 transition-colors duration-300">
                Fajuyi Memorial Park
              </h3>
              <p className="text-sm sm:text-base text-gray-600 lg:text-gray-700">
                Explore the historical park dedicated to Colonel Adekunle
                Fajuyi—a peaceful place for reflection and learning.
              </p>
            </div>
          </div>

          {/* Ikere Hills */}
          <div className="border rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white max-w-xs">
            <img
              src="/ikere.webp"
              alt="Ikere Hills"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-all duration-500"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 text-gray-900 lg:text-purple-700 transition-colors duration-300">
                Ikere Hills
              </h3>
              <p className="text-sm sm:text-base text-gray-600 lg:text-gray-700">
                Hike the scenic Ikere Hills and enjoy breathtaking views of
                Ekiti State. Ideal for adventurous tourists and nature lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
