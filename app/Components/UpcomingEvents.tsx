"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Udiroko Festival",
    date: "August 12, 2025",
    location: "Ado-Ekiti",
    image: "/udiroko.jpeg",
    description:
      "A historic Yoruba festival celebrated by the Ado-Ekiti people, marking the beginning of a new year.",
  },
  {
    id: 2,
    title: "Ekiti Food & Arts Fair",
    date: "November 5, 2025",
    location: "Ekiti State Pavilion",
    image: "/ekitifood.jpeg",
    description:
      "A vibrant celebration of Ekiti’s finest cuisines, arts, and crafts featuring local vendors and live performances.",
  },
  {
    id: 3,
    title: "Ikogosi Festival",
    date: "December 20, 2025",
    location: "Ikogosi Warm Springs",
    image: "/ikogosidec.jpeg",
    description:
      "An annual event showcasing the warm and cold spring's mystery, cultural displays, and tourism activities.",
  },
  {
    id: 4,
    title: "Ewi Festival",
    date: "October 15, 2025",
    location: "Ado-Ekiti Palace",
    image: "/ewi.jpeg",
    description:
      "A cultural and royal festival that honors the traditions of the Ekiti people.",
  },
];

const UpcomingEvents = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Check your email.");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <section className="py-12 bg-gray-50 border-t overflow-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          Upcoming Events in Ekiti
        </h2>

        <motion.div
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-6"
          whileTap={{ cursor: "grabbing" }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="min-w-[350px] md:min-w-[500px] lg:min-w-[600px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <img src={event.image} alt={event.title} className="w-full h-64 md:h-80 lg:h-96 object-cover" />
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm md:text-lg text-gray-600">{event.date} - {event.location}</p>
                <p className="text-gray-700 mt-3 text-sm md:text-lg">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center space-y-4">
          <h3 className="text-xl md:text-3xl font-semibold text-gray-800">Stay Updated!</h3>
          <p className="text-gray-600 text-sm md:text-lg">
            Subscribe to get notifications about upcoming events in Ekiti.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full max-w-md px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition-all"
          >
            Get Notified
          </button>

          {message && <p className="text-sm md:text-lg text-gray-700 mt-2">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
