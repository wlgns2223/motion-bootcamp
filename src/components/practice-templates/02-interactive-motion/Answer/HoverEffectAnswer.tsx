"use client";

import { motion } from "motion/react";

export default function HoverEffectAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#3B82F6",
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
          }}
          transition={{ duration: 0.2 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium"
        >
          Hover Me!
        </motion.button>

        <motion.button
          whileHover={{
            rotate: 360,
            scale: 1.05,
          }}
          transition={{ duration: 0.6 }}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium"
        >
          🔄 Rotate
        </motion.button>
      </div>
    </div>
  );
}
