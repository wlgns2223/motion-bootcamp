"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import MultipleTransformsLiveCoding from "../../live-coding/MultipleTransformsLiveCoding";

// 예제 컴포넌트
function MultipleTransformsExample() {
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 1], [1, 1.5]);
  const rotate = useTransform(progress, [0, 1], [0, 180]);
  const borderRadius = useTransform(progress, [0, 1], ["8px", "50px"]);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    progress.set(isAnimating ? 0 : 1);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        style={{ scale, rotate, borderRadius }}
        className="w-20 h-20 bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer flex items-center justify-center text-white font-bold"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click
      </motion.div>
      <p className="text-sm text-gray-600">클릭하여 변환 애니메이션 실행</p>
    </div>
  );
}

export default function Lesson4_MultipleTransforms() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Progress Motion Value 생성",
      description: "전체 애니메이션 진행도를 관리할 하나의 motion value를 생성합니다.",
      code: `import { useMotionValue } from 'motion/react';

// 애니메이션 진행도 (0 ~ 1)
const progress = useMotionValue(0);

// 하나의 값으로 여러 변환을 제어할 수 있습니다
// 0 = 시작 상태, 1 = 완료 상태`,
    },
    {
      name: "다중 변환 매핑",
      description: "하나의 progress 값을 여러 개의 다른 CSS 속성으로 변환합니다.",
      code: `const scale = useTransform(
  progress, [0, 1], [1, 1.5]    // 크기: 1배 → 1.5배
);

const rotate = useTransform(
  progress, [0, 1], [0, 180]    // 회전: 0도 → 180도
);

const borderRadius = useTransform(
  progress, [0, 1], ["8px", "50px"]  // 모서리: 사각형 → 원형
);`,
    },
    {
      name: "프로그래밍 방식 제어",
      description: "클릭 이벤트에서 progress.set()을 사용하여 애니메이션을 트리거합니다.",
      code: `const [isAnimating, setIsAnimating] = useState(false);

const handleClick = () => {
  setIsAnimating(true);
  
  // progress 값을 직접 설정
  progress.set(isAnimating ? 0 : 1);
  
  // 애니메이션 완료 후 상태 리셋
  setTimeout(() => setIsAnimating(false), 600);
};`,
    },
    {
      name: "통합 스타일 적용",
      description: "모든 변환을 style 객체에 한 번에 적용하여 동시에 애니메이션됩니다.",
      code: `<motion.div
  style={{ 
    scale,          // 크기 변환
    rotate,         // 회전 변환
    borderRadius    // 모서리 변환
  }}
  onClick={handleClick}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="cursor-pointer"
>
  {/* 클릭 시 모든 변환이 동시에 실행됩니다 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: Multiple Transforms</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-pink-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-pink-700 mb-4">{steps[currentStep].description}</p>

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
          클릭하면 하나의 progress 값으로 크기, 회전, 모서리 둥글기가 동시에 변합니다
        </p>
        <MultipleTransformsExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <MultipleTransformsLiveCoding />
      </div>
    </div>
  );
}
