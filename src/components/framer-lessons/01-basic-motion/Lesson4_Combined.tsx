"use client";

import { motion } from "motion/react";
import { useState } from "react";
import CombinedLiveCoding from "../../live-coding/CombinedLiveCoding";

export default function Lesson4_Combined() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "motion.div 설정",
      description: "여러 개의 motion.div 요소를 생성하여 복합 애니메이션을 구현해보겠습니다.",
      code: `import { motion } from 'motion/react';

// 여러 개의 motion.div 요소
<motion.div>Box 1</motion.div>
<motion.div>Box 2</motion.div>
<motion.div>Box 3</motion.div>`,
    },
    {
      name: "복합 initial 속성",
      description: "각 요소의 시작 상태를 투명하고, 왼쪽으로 이동되며, 축소된 상태로 설정합니다.",
      code: `initial={{ 
  opacity: 0,    // 투명한 상태
  x: -50,        // 왼쪽으로 50px 이동
  scale: 0.8     // 80% 크기로 축소
}}`,
    },
    {
      name: "복합 animate 속성",
      description: "최종 상태를 완전히 보이고, 제자리에서, 원래 크기로 설정합니다.",
      code: `animate={{ 
  opacity: 1,    // 완전히 보이는 상태
  x: 0,          // 원래 위치
  scale: 1       // 원래 크기
}}`,
    },
    {
      name: "순차적 delay 설정",
      description: "각 요소마다 다른 delay 값을 설정하여 순차적으로 나타나는 애니메이션을 만듭니다.",
      code: `// 첫 번째 요소
transition={{ delay: 0, duration: 0.6 }}

// 두 번째 요소  
transition={{ delay: 0.2, duration: 0.6 }}

// 세 번째 요소
transition={{ delay: 0.4, duration: 0.6 }}`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: 복합 애니메이션</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-orange-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-orange-700 mb-4">{steps[currentStep].description}</p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code>{steps[currentStep].code}</code>
          </pre>
        </div>
      </div>

      {/* 완성된 예제 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">✨ 완성된 예제</h4>
        <div className="flex justify-center space-x-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 1
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-24 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-24 bg-orange-700 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 3
          </motion.div>
        </div>
      </div>

      {/* 라이브 코딩 영역 */}
      <CombinedLiveCoding />
    </div>
  );
}
