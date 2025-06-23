"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ConditionalRenderingLiveCoding from "../../live-coding/ConditionalRenderingLiveCoding";

// 강의 1: 조건부 렌더링 애니메이션
export default function Lesson1_ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 조건부 렌더링 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isVisible ? "Hide" : "Show"} Element
          </button>
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
                >
                  Hello!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  )}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: AnimatePresence로 조건부 렌더링 영역 감싸기</li>
          <li>2단계: motion.div에 initial, animate 속성 추가</li>
          <li>3단계: exit 속성으로 제거 애니메이션 정의</li>
          <li>4단계: 조건부 렌더링과 상태 토글 버튼 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ConditionalRenderingLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 구조</h5>
          <code className="text-sm text-gray-600">
            {`<AnimatePresence>
  {condition && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  )}
</AnimatePresence>`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: Exit 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`exit={{ opacity: 0, scale: 0.8 }}
transition={{ duration: 0.3 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
