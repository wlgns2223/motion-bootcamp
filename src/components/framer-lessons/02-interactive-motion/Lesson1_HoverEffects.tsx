"use client";

import { motion } from "motion/react";
import { useState } from "react";
import HoverEffectsLiveCoding from "../../live-coding/HoverEffectsLiveCoding";

export default function Lesson1_HoverEffects() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "motion.div 설정",
      description: "일반 div를 motion.div로 변경하여 호버 애니메이션 기능을 활성화합니다.",
      code: `import { motion } from 'motion/react';

<motion.div className="cursor-pointer">
  Scale
</motion.div>`,
    },
    {
      name: "whileHover 속성 추가",
      description: "마우스를 올렸을 때의 애니메이션 상태를 정의합니다.",
      code: `// Scale 효과
whileHover={{ scale: 1.1 }}

// Rotate 효과  
whileHover={{ rotate: 15 }}

// Lift 효과
whileHover={{ y: -10 }}`,
    },
    {
      name: "cursor-pointer 클래스",
      description: "마우스 커서를 포인터로 변경하여 인터랙티브 요소임을 표시합니다.",
      code: `className="... cursor-pointer"`,
    },
    {
      name: "transition 세밀 조정",
      description: "스프링 애니메이션의 강도와 반응성을 조절합니다.",
      code: `transition={{ 
  type: "spring", 
  stiffness: 300    // 스프링의 강도
}}

// 다양한 stiffness 값
// Scale: stiffness: 300
// Rotate: stiffness: 400  
// Lift: stiffness: 500`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Hover 애니메이션</h3>

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
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Scale
          </motion.div>

          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Rotate
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-24 h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Lift
          </motion.div>
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
        <HoverEffectsLiveCoding />
      </div>
    </div>
  );
}
