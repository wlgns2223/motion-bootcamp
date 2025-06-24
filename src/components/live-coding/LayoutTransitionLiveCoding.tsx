"use client";

import { useState } from "react";

/**
 * 🎯 레이아웃 전환 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 mode="wait"와 key 기반 전환에만 집중할 수 있도록 최적화된 환경
 */

type View = "grid" | "list";
export default function LayoutTransitionLiveCoding() {
  const [currentView, setCurrentView] = useState<View>("grid");

  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-green-600 text-sm">여기서 레이아웃 전환 애니메이션을 직접 구현해보세요</p>
      </div>

      {/* 실습 영역 */}
      <div className="flex flex-col items-center space-y-4">
        {/* 뷰 전환 버튼 */}
        <div className="flex gap-2">
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

        {/* TODO: AnimatePresence와 레이아웃 전환 구현 */}
        {currentView === "grid" ? (
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-16 h-16 bg-green-400 rounded flex items-center justify-center text-white font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="w-32 h-8 bg-green-400 rounded flex items-center justify-center text-white font-bold"
              >
                Item {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-6 bg-green-100 border border-green-200 rounded p-4">
        <h5 className="font-semibold text-green-800 mb-3">💡 구현해야 할 내용</h5>
        <div className="space-y-3 text-green-700 text-sm">
          <div>
            <strong>1단계:</strong> AnimatePresence import 및 설정
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence mode="wait">
  {/* 레이아웃 컴포넌트들 */}
</AnimatePresence>`}
            </code>
          </div>

          <div>
            <strong>2단계:</strong> 조건부 렌더링에 motion.div와 key 추가
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`{currentView === "grid" ? (
  <motion.div key="grid">Grid Layout</motion.div>
) : (
  <motion.div key="list">List Layout</motion.div>
)}`}
            </code>
          </div>

          <div>
            <strong>3단계:</strong> 슬라이드 애니메이션 추가
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
transition={{ duration: 0.3 }}`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
