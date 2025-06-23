"use client";

import { motion } from "motion/react";

export default function CombinedAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <motion.div
        initial={{
          opacity: 0,
          x: -50,
          scale: 0.5,
          rotate: -180,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="w-40 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold"
      >
        🎉 복합 애니메이션
      </motion.div>
    </div>
  );
}
