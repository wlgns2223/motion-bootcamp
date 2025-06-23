"use client";

import { motion } from "motion/react";

export default function CombinedInteractionAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex justify-center">
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#EC4899",
            boxShadow: "0 15px 30px rgba(236, 72, 153, 0.4)",
          }}
          whileTap={{
            scale: 0.95,
            rotate: [0, -5, 5, 0],
          }}
          whileFocus={{
            scale: 1.05,
            outline: "3px solid #F59E0B",
          }}
          transition={{
            duration: 0.2,
            rotate: { duration: 0.3 },
          }}
          className="px-8 py-4 bg-pink-500 text-white rounded-lg font-bold text-lg shadow-lg focus:outline-none"
        >
          🎉 복합 인터랙션!
        </motion.button>
      </div>
    </div>
  );
}
