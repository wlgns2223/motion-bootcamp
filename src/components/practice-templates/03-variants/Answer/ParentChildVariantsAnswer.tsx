"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ParentChildVariantsAnswer() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          {isOpen ? "닫기" : "열기"}
        </button>

        {isOpen && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-2">
            {["첫 번째", "두 번째", "세 번째", "네 번째"].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-green-100 rounded-lg text-green-800 font-medium"
              >
                {item} 아이템
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
