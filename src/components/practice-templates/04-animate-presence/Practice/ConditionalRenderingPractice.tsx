"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * 🔥 실습 1: 조건부 렌더링 애니메이션
 *
 * 목표: 버튼을 클릭했을 때 박스가 나타나거나 사라지는 애니메이션을 만드세요.
 *
 * 요구사항:
 * 1. AnimatePresence를 사용해서 박스가 사라질 때도 애니메이션이 적용되도록 하세요
 * 2. 박스가 나타날 때: opacity 0 → 1, scale 0.8 → 1
 * 3. 박스가 사라질 때: opacity 1 → 0, scale 1 → 0.8
 * 4. 애니메이션 지속시간은 0.3초로 설정하세요
 */

export default function ConditionalRenderingPractice() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">🎯 실습 1: 조건부 렌더링 애니메이션</h3>
        <p className="text-blue-700 text-sm">
          AnimatePresence를 사용해서 요소가 나타나고 사라질 때 모두 애니메이션이 적용되도록 만들어보세요.
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
          {/* 
          TODO: 여기에 AnimatePresence와 motion.div를 사용해서 애니메이션을 구현하세요
          
          힌트:
          1. AnimatePresence로 감싸기
          2. 조건부 렌더링: {isVisible && <motion.div>...</motion.div>}
          3. initial, animate, exit 속성 사용
          4. opacity와 scale 변경
          */}

          {/* 현재는 애니메이션 없이 바로 나타나고 사라집니다 */}
          {isVisible && (
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl">
              ✨
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 힌트</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• AnimatePresence를 import하고 조건부 렌더링을 감싸세요</li>
          <li>• motion.div에 initial, animate, exit 속성을 추가하세요</li>
          <li>• initial과 exit는 같은 값으로, animate는 최종 상태로 설정하세요</li>
          <li>• transition에 duration: 0.3을 추가하세요</li>
        </ul>
      </div>
    </div>
  );
}
