"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import LayoutTransitionLiveCoding from "../../live-coding/LayoutTransitionLiveCoding";

// 강의 2: 레이아웃 전환 애니메이션
export default function Lesson2_LayoutTransition() {
  const [currentView, setCurrentView] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: 레이아웃 전환 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setCurrentView("grid")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === "grid" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setCurrentView("list")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === "list" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              List View
            </button>
          </div>
          <AnimatePresence mode="wait">
            {currentView === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-2"
              >
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-16 h-16 bg-green-400 rounded flex items-center justify-center text-white font-bold"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2"
              >
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-32 h-8 bg-green-400 rounded flex items-center justify-center text-white font-bold"
                  >
                    Item {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence mode="wait">
  {currentView === 'grid' ? (
    <motion.div key="grid" exit={{ x: -100 }} />
  ) : (
    <motion.div key="list" exit={{ x: -100 }} />
  )}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: AnimatePresence에 mode="wait" 속성 추가</li>
          <li>2단계: 각 레이아웃에 고유한 key 값 설정</li>
          <li>3단계: 슬라이드 전환을 위한 x축 애니메이션 설정</li>
          <li>4단계: 상태 기반 조건부 렌더링 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <LayoutTransitionLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Mode와 Key</h5>
          <code className="text-sm text-gray-600">
            {`<AnimatePresence mode="wait">
  <motion.div key="unique-key" />
</AnimatePresence>`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 슬라이드 전환</h5>
          <code className="text-sm text-gray-600">
            {`initial={{ x: 100 }}
animate={{ x: 0 }}
exit={{ x: -100 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
