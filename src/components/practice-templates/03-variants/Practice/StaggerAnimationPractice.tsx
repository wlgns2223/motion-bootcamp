"use client";

import { useState } from "react";

export default function StaggerAnimationPractice() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: stagger 애니메이션을 적용하여 카드들이 순차적으로 나타나도록 구현해보세요
      </p>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          {isVisible ? "리셋" : "애니메이션 시작"}
        </button>

        {/* TODO: stagger 애니메이션 적용 */}
        {isVisible && (
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold"
              >
                {i + 1}
                {/* 힌트: motion.div, variants, initial, animate 사용 */}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: stagger 애니메이션 variants 정의
const containerVariants = {
  hidden: { opacity: ? },
  visible: {
    opacity: ?,
    transition: {
      staggerChildren: ?,  // 0.15 추천
      delayChildren: ?,    // 0.1 추천
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: ?,
    y: ?,      // 50 추천
    scale: ?,  // 0.8 추천
  },
  visible: {
    opacity: ?,
    y: ?,
    scale: ?,
  },
};

// 힌트: 
// <motion.div variants={containerVariants} initial="hidden" animate="visible">
//   <motion.div variants={cardVariants} />`}
        </code>
      </div>
    </div>
  );
}
