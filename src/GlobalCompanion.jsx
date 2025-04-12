import React from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const GlobalCompanion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 px-4 py-10 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
            🌍 Your Global Companion
          </h1>
          <p className="text-lg text-blue-700 italic">
            Luxe travel assistant. Smart. Supportive. Always glowing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center"
        >
          <Globe className="h-16 w-16 text-blue-400 animate-spin-slow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="rounded-2xl shadow-2xl border-0 bg-white p-6 space-y-4">
            <p className="text-xl font-semibold text-pink-600">
              📍 Explore Nearby
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="text"
                placeholder="Enter a city (e.g. Paris)"
                className="w-full md:w-2/3 p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-3 rounded-xl">
                Search
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="rounded-2xl shadow-lg border-0 bg-white mt-10 p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              🛡️ Safety Info
            </h2>
            <p className="text-sm text-gray-600 mb-3 italic">
              Travel smart: Stick to well-lit areas, stay aware, and always trust your instincts.
            </p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>🔒 Keep your location private unless necessary</li>
              <li>🧳 Use hotel safes for passports and valuables</li>
              <li>📤 Share your itinerary with someone you trust</li>
              <li>👁 Stay alert in crowded areas</li>
              <li>💳 Carry a backup credit card, not your life savings</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalCompanion;
