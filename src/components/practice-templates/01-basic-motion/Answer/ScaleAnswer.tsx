"use client";

import { motion } from "motion/react";

export default function ScaleAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-24 h-24 bg-purple-500 rounded-full mx-auto"
      />
    </div>
  );
}
