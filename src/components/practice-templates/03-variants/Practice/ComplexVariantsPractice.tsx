"use client";

import { useState } from "react";

export default function ComplexVariantsPractice() {
  const [cardState, setCardState] = useState("closed");

  const nextState = () => {
    const states = ["closed", "hover", "expanded"];
    const currentIndex = states.indexOf(cardState);
    const nextIndex = (currentIndex + 1) % states.length;
    setCardState(states[nextIndex]);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 복합 variants를 정의하여 카드의 상태별 애니메이션을 구현해보세요
      </p>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={nextState}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          상태 변경: {cardState}
        </button>

        {/* TODO: 복합 variants 적용 */}
        <div
          className="w-32 h-32 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer bg-red-400"
          onClick={nextState}
        >
          {cardState === "closed" && "닫힘"}
          {cardState === "hover" && "호버"}
          {cardState === "expanded" && "확장"}
          {/* 힌트: motion.div, variants, animate 사용 */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 복합 variants 정의
const cardVariants = {
  closed: {
    scale: ?,
    rotate: ?,
    backgroundColor: "?", // 빨간색
  },
  hover: {
    scale: ?,
    rotate: ?,
    backgroundColor: "?", // 주황색
  },
  expanded: {
    scale: ?,
    rotate: ?,
    backgroundColor: "?", // 초록색
  },
};

// 힌트: <motion.div variants={cardVariants} animate={cardState} />`}
        </code>
      </div>
    </div>
  );
}
