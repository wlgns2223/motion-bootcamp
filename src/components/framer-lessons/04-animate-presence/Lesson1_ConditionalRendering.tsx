"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ConditionalRenderingLiveCoding from "../../live-coding/ConditionalRenderingLiveCoding";

export default function Lesson1_ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "AnimatePresence 설정",
      description: "조건부 렌더링되는 요소들을 AnimatePresence로 감싸서 exit 애니메이션을 가능하게 합니다.",
      code: `import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isVisible && (
    <motion.div>
      Hello!
    </motion.div>
  )}
</AnimatePresence>

// AnimatePresence 없이는 exit 애니메이션이 작동하지 않음`,
    },
    {
      name: "initial & animate 속성 추가",
      description: "요소가 나타날 때의 시작 상태와 최종 상태를 정의합니다.",
      code: `<motion.div
  initial={{ 
    opacity: 0,    // 투명한 상태로 시작
    scale: 0.8     // 80% 크기로 축소된 상태
  }}
  animate={{ 
    opacity: 1,    // 완전히 보이게
    scale: 1       // 원래 크기로
  }}
>
  Hello!
</motion.div>`,
    },
    {
      name: "exit 속성 정의",
      description: "요소가 사라질 때의 애니메이션을 정의합니다. 이것이 AnimatePresence의 핵심 기능입니다.",
      code: `<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ 
    opacity: 0,    // 다시 투명해지며
    scale: 0.8     // 축소되면서 사라짐
  }}
  transition={{ duration: 0.3 }}
>
  Hello!
</motion.div>`,
    },
    {
      name: "조건부 렌더링과 상태 관리",
      description: "React 상태를 사용하여 요소의 표시/숨김을 제어하고 토글 버튼을 구현합니다.",
      code: `const [isVisible, setIsVisible] = useState(true);

<button onClick={() => setIsVisible(!isVisible)}>
  {isVisible ? "Hide" : "Show"} Element
</button>

<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      Hello!
    </motion.div>
  )}
</AnimatePresence>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 조건부 렌더링 애니메이션</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-blue-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-blue-700 mb-4">{steps[currentStep].description}</p>

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
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <ConditionalRenderingLiveCoding />
      </div>
    </div>
  );
}
