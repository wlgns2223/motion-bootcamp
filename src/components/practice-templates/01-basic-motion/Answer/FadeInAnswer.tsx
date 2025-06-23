"use client";

import { motion } from "motion/react";

export default function FadeInAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 bg-blue-500 rounded-lg mx-auto"
      />
    </div>
  );
}
