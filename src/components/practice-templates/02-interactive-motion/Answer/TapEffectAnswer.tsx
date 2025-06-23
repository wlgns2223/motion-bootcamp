"use client";

import { motion } from "motion/react";

export default function TapEffectAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex justify-center space-x-4">
        <motion.button
          whileTap={{
            scale: 0.95,
            y: 2,
          }}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-4 bg-purple-500 text-white rounded-lg font-medium shadow-lg"
        >
          👆 Click Me!
        </motion.button>

        <motion.div
          whileTap={{
            scale: 0.9,
            rotate: 45,
          }}
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-red-500 rounded-lg cursor-pointer flex items-center justify-center text-white text-2xl"
        >
          🎯
        </motion.div>
      </div>
    </div>
  );
}
