import React from "react";
import { motion } from "framer-motion";

const GlobalCompanion = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
            🌍 Global Companion
          </h1>
          <p className="text-lg text-blue-700 italic">
            Luxe travel assistant. Smart. Supportive. Always glowing.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex justify-center">
          <img src="/Icon-Only-Color.png" alt="Global Logo" className="globe-spin" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}>
          <div className="rounded-xl shadow-lg bg-white p-6 space-y-4 border border-gray-200">
            <p className="text-xl font-semibold text-pink-600">📍 Explore Nearby</p>
            <input
              type="text"
              placeholder="Search for places like 'coffee', 'spa', or 'brunch in Paris'"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalCompanion;