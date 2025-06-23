"use client";

import { motion } from "motion/react";

export default function DragAnswer() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex justify-center space-x-8">
        <motion.div
          drag
          dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
          whileDrag={{ scale: 1.2, rotate: 10 }}
          className="w-20 h-20 bg-orange-500 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold"
        >
          Drag
        </motion.div>

        <motion.div
          drag="x"
          dragConstraints={{ left: -150, right: 150 }}
          className="w-16 h-16 bg-cyan-500 rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center text-white"
        >
          ↔️
        </motion.div>
      </div>
    </div>
  );
}
