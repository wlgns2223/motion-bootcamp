"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import ElasticButtonLiveCoding from "../../live-coding/ElasticButtonLiveCoding";

export default function Lesson5_ElasticButton() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "스프링 설정",
      description: "탄성 효과를 위한 scale 스프링을 생성합니다. 높은 stiffness로 빠른 반응을 설정합니다.",
      code: `import { useSpring } from 'motion/react';

const scale = useSpring(1, { 
  stiffness: 300,  // 높은 값으로 빠른 반응
  damping: 10      // 낮은 값으로 탄성 효과
});

// 초기 scale은 1 (원래 크기)`,
    },
    {
      name: "연속 애니메이션",
      description: "클릭 시 3단계 연속 애니메이션을 구현합니다: 축소 → 확대 → 원상복구",
      code: `const handleClick = () => {
  // 1단계: 즉시 축소 (눌린 느낌)
  scale.set(0.8);
  
  // 2단계: 100ms 후 확대 (튕김 효과)
  setTimeout(() => scale.set(1.1), 100);
  
  // 3단계: 200ms 후 원상복구
  setTimeout(() => scale.set(1), 200);
};`,
    },
    {
      name: "상태 관리",
      description: "클릭 횟수를 추적하여 사용자 피드백을 제공합니다.",
      code: `const [clickCount, setClickCount] = useState(0);

const handleClick = () => {
  // 애니메이션 실행
  scale.set(0.8);
  setTimeout(() => scale.set(1.1), 100);
  setTimeout(() => scale.set(1), 200);
  
  // 클릭 횟수 증가
  setClickCount(prev => prev + 1);
};`,
    },
    {
      name: "버튼 스타일링",
      description: "motion.button에 scale을 적용하고 시각적으로 매력적인 스타일을 추가합니다.",
      code: `<motion.button
  style={{ scale }}
  onClick={handleClick}
  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 
             text-white font-bold rounded-xl shadow-lg 
             hover:shadow-xl transition-shadow"
>
  Elastic Button
</motion.button>`,
    },
  ];

  // 예제 컴포넌트
  function ElasticButtonExample() {
    const scale = useSpring(1, { stiffness: 300, damping: 10 });
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
      scale.set(0.8);
      setTimeout(() => scale.set(1.1), 100);
      setTimeout(() => scale.set(1), 200);
      setClickCount((prev) => prev + 1);
    };

    return (
      <div className="flex flex-col items-center space-y-4">
        <motion.button
          style={{ scale }}
          onClick={handleClick}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          Elastic Button
        </motion.button>
        <p className="text-sm text-gray-600">클릭 횟수: {clickCount}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 5: Elastic Button Effect</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-cyan-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-cyan-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-cyan-700 mb-4">{steps[currentStep].description}</p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code>{steps[currentStep].code}</code>
          </pre>
        </div>
      </div>

      {/* 완성된 예제 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">✨ 완성된 예제</h4>
        <p className="text-sm text-gray-600 mb-4">
          클릭 시 탄성있게 반응하는 버튼 - 눌림 → 확대 → 원상복구 순서로 애니메이션
        </p>
        <ElasticButtonExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <ElasticButtonLiveCoding />
    </div>
  );
}
