"use client";

import { motion } from "motion/react";
import { useState } from "react";

export default function ComplexVariantsAnswer() {
  const [cardState, setCardState] = useState("closed");

  const cardVariants = {
    closed: {
      scale: 1,
      rotate: 0,
      backgroundColor: "#EF4444",
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      backgroundColor: "#F97316",
    },
    expanded: {
      scale: 1.2,
      rotate: 180,
      backgroundColor: "#10B981",
    },
  };

  const nextState = () => {
    const states = ["closed", "hover", "expanded"];
    const currentIndex = states.indexOf(cardState);
    const nextIndex = (currentIndex + 1) % states.length;
    setCardState(states[nextIndex]);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={nextState}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          상태 변경: {cardState}
        </button>

        <motion.div
          variants={cardVariants}
          animate={cardState}
          className="w-32 h-32 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          onClick={nextState}
        >
          {cardState === "closed" && "닫힘"}
          {cardState === "hover" && "호버"}
          {cardState === "expanded" && "확장"}
        </motion.div>
      </div>
    </div>
  );
}
