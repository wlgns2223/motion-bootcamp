"use client";

import { motion } from "motion/react";
import { useState } from "react";
import CombinedInteractionsLiveCoding from "../../live-coding/CombinedInteractionsLiveCoding";

export default function Lesson3_CombinedInteractions() {
  const [isLiked, setIsLiked] = useState(false);

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "카드형 motion.div 생성",
      description: "인터랙티브 카드를 위한 기본 motion.div 구조를 생성합니다.",
      code: `import { motion } from 'motion/react';

<motion.div 
  className="p-6 bg-white rounded-xl shadow-lg cursor-pointer"
>
  <div className="text-2xl mb-2">🎯</div>
  <h4 className="font-semibold mb-2">Interactive Card</h4>
  <p className="text-gray-600 text-sm">Hover and click to see the magic!</p>
</motion.div>`,
    },
    {
      name: "whileHover 상호작용 추가",
      description: "마우스 호버 시 카드가 살짝 커지고 회전하는 효과를 추가합니다.",
      code: `whileHover={{ 
  scale: 1.05,   // 5% 크기 증가
  rotate: 2      // 2도 회전
}}

// 자연스러운 호버 효과로 카드가 살아있는 느낌을 제공`,
    },
    {
      name: "whileTap 클릭 피드백",
      description: "클릭 시 카드가 살짝 눌리는 듯한 피드백 효과를 추가합니다.",
      code: `whileTap={{ 
  scale: 0.95    // 클릭 시 5% 작아짐
}}

// 호버와 탭 효과가 조합되어 자연스러운 버튼 느낌 제공`,
    },
    {
      name: "상태 변경과 애니메이션",
      description: "React 상태와 애니메이션을 조합하여 동적인 상호작용을 구현합니다.",
      code: `const [isLiked, setIsLiked] = useState(false);

<motion.button
  onClick={() => setIsLiked(!isLiked)}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  animate={{ rotate: isLiked ? 0 : 0 }}
  className={\`text-3xl \${isLiked ? "text-red-500" : "text-gray-400"}\`}
>
  ❤️
</motion.button>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 복합 인터랙션</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-purple-700 mb-4">{steps[currentStep].description}</p>

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
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer max-w-xs"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Interactive Card</h4>
            <p className="text-gray-600 text-sm">Hover and click to see the magic!</p>
          </motion.div>

          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isLiked ? 0 : 0 }}
            className={`text-3xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
          >
            ❤️
          </motion.button>
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
        <CombinedInteractionsLiveCoding />
      </div>
    </div>
  );
}
