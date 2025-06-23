"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import LayoutTransitionLiveCoding from "../../live-coding/LayoutTransitionLiveCoding";

export default function Lesson2_LayoutTransition() {
  const [currentView, setCurrentView] = useState<"grid" | "list">("grid");

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "AnimatePresence mode 설정",
      description: "mode='wait' 속성을 사용하여 이전 요소가 완전히 사라진 후 새 요소가 나타나도록 설정합니다.",
      code: `import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence mode="wait">
  {/* 레이아웃 컴포넌트들 */}
</AnimatePresence>

// mode="wait": 이전 애니메이션이 완료된 후 다음 애니메이션 시작
// mode 없음: 동시에 애니메이션 실행 (기본값)`,
    },
    {
      name: "고유한 key 값 설정",
      description: "각 레이아웃 컴포넌트에 고유한 key를 설정하여 React가 다른 컴포넌트로 인식하게 합니다.",
      code: `{currentView === "grid" ? (
  <motion.div
    key="grid"    // 고유한 key 값
    className="grid grid-cols-2 gap-2"
  >
    {/* Grid 레이아웃 */}
  </motion.div>
) : (
  <motion.div
    key="list"    // 다른 고유한 key 값
    className="flex flex-col gap-2"
  >
    {/* List 레이아웃 */}
  </motion.div>
)}`,
    },
    {
      name: "슬라이드 전환 애니메이션",
      description: "x축을 사용하여 좌우 슬라이드 전환 효과를 구현합니다.",
      code: `<motion.div
  initial={{ 
    opacity: 0, 
    x: 100      // 오른쪽에서 시작
  }}
  animate={{ 
    opacity: 1, 
    x: 0        // 중앙으로 이동
  }}
  exit={{ 
    opacity: 0, 
    x: -100     // 왼쪽으로 사라짐
  }}
  transition={{ duration: 0.3 }}
>`,
    },
    {
      name: "상태 기반 조건부 렌더링",
      description: "React 상태를 사용하여 버튼 클릭에 따라 다른 레이아웃을 렌더링합니다.",
      code: `const [currentView, setCurrentView] = useState<"grid" | "list">("grid");

<button onClick={() => setCurrentView("grid")}>
  Grid View
</button>
<button onClick={() => setCurrentView("list")}>
  List View
</button>

<AnimatePresence mode="wait">
  {currentView === "grid" ? (
    <motion.div key="grid">Grid Layout</motion.div>
  ) : (
    <motion.div key="list">List Layout</motion.div>
  )}
</AnimatePresence>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: 레이아웃 전환 애니메이션</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-green-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-green-700 mb-4">{steps[currentStep].description}</p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code>{steps[currentStep].code}</code>
          </pre>
        </div>
      </div>

      {/* 완성된 예제 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">✨ 완성된 예제</h4>
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
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <LayoutTransitionLiveCoding />
      </div>
    </div>
  );
}
