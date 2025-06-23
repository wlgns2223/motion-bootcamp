"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function StaggerAnimationAnswer() {
  const [isVisible, setIsVisible] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          {isVisible ? "리셋" : "애니메이션 시작"}
        </button>

        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-4"
          >
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {i + 1}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
