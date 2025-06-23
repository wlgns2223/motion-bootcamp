"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function BasicVariantsAnswer() {
  const [isVisible, setIsVisible] = useState(true);

  const boxVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isVisible ? "숨기기" : "보이기"}
        </button>

        <motion.div
          variants={boxVariants}
          animate={isVisible ? "visible" : "hidden"}
          className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold"
        >
          Variants!
        </motion.div>
      </div>
    </div>
  );
}
