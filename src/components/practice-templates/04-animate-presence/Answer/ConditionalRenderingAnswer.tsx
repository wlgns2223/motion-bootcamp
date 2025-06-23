"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ✅ 정답: 조건부 렌더링 애니메이션
 */

export default function ConditionalRenderingAnswer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">✅ 정답: 조건부 렌더링 애니메이션</h3>
        <p className="text-green-700 text-sm">
          AnimatePresence를 사용해서 요소가 나타나고 사라질 때 모두 애니메이션이 적용됩니다.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isVisible ? "박스 숨기기" : "박스 보이기"}
        </button>

        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl"
              >
                ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🔧 구현 포인트</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>
            • <code>AnimatePresence</code>로 조건부 렌더링을 감쌌습니다
          </li>
          <li>
            • <code>initial</code>과 <code>exit</code>를 같은 값으로 설정했습니다
          </li>
          <li>
            • <code>animate</code>는 최종 상태(완전히 나타난 상태)로 설정했습니다
          </li>
          <li>
            • <code>transition</code>에 지속시간을 설정했습니다
          </li>
        </ul>
      </div>
    </div>
  );
}
