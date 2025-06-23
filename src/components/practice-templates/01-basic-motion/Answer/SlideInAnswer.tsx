"use client";

import { motion } from "motion/react";

export default function SlideInAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-32 h-16 bg-green-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold"
      >
        Slide Me!
      </motion.div>
    </div>
  );
}
