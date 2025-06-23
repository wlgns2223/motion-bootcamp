"use client";

import { motion } from "motion/react";
import { useState } from "react";
import TapEffectsLiveCoding from "../../live-coding/TapEffectsLiveCoding";

export default function Lesson2_TapEffects() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "motion 요소 설정",
      description: "motion.button 또는 motion.div를 사용하여 탭 애니메이션이 가능한 요소를 생성합니다.",
      code: `import { motion } from 'motion/react';

<motion.button className="px-6 py-3 bg-green-500 text-white rounded-lg">
  Button
</motion.button>

<motion.div className="... cursor-pointer">
  Tap
</motion.div>`,
    },
    {
      name: "whileTap 속성 추가",
      description: "클릭(탭)할 때의 애니메이션 상태를 정의합니다. scale을 줄여서 눌린 느낌을 표현합니다.",
      code: `// 버튼 클릭 효과
whileTap={{ scale: 0.9 }}

// 더 복합적인 탭 효과
whileTap={{ 
  scale: 0.95, 
  rotate: 5 
}}`,
    },
    {
      name: "whileHover와 조합",
      description: "호버와 탭 효과를 조합하여 더 풍부한 상호작용을 제공합니다.",
      code: `// 호버 시 살짝 커지기
whileHover={{ scale: 1.05 }}

// 탭 시 작아지기
whileTap={{ scale: 0.9 }}

// 둘을 조합하면 자연스러운 버튼 느낌`,
    },
    {
      name: "적절한 크기 조절",
      description: "사용자에게 명확한 피드백을 주기 위해 적절한 scale 값을 설정합니다.",
      code: `// 일반적인 버튼
whileHover={{ scale: 1.05 }}  // 5% 커지기
whileTap={{ scale: 0.9 }}     // 10% 작아지기

// 더 강한 효과
whileHover={{ scale: 1.1 }}   // 10% 커지기  
whileTap={{ scale: 0.85 }}    // 15% 작아지기`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Tap 애니메이션</h3>

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
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold"
          >
            Button
          </motion.button>

          <motion.div
            whileTap={{ scale: 0.95, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Tap
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
        <TapEffectsLiveCoding />
      </div>
    </div>
  );
}
