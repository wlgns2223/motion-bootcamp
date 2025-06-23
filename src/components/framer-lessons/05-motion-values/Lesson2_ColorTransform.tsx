"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import ColorTransformLiveCoding from "../../live-coding/ColorTransformLiveCoding";

// ColorTransformExample 컴포넌트
function ColorTransformExample() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-200, 0, 200], ["#ef4444", "#3b82f6", "#10b981"]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, backgroundColor }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-16 h-16 rounded-lg cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  );
}

export default function Lesson2_ColorTransform() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Motion Value 생성",
      description: "드래그 위치를 추적할 x 값을 useMotionValue로 생성합니다.",
      code: `import { useMotionValue } from 'motion/react';

// x축 위치를 추적하는 motion value
const x = useMotionValue(0);

// 초기값 0에서 시작하여
// 드래그할 때마다 실시간으로 값이 변경됩니다`,
    },
    {
      name: "색상 변환 범위 설정",
      description: "useTransform을 사용하여 위치 값을 색상으로 변환하는 범위를 설정합니다.",
      code: `const backgroundColor = useTransform(
  x,                              // 입력 값 (위치)
  [-200, 0, 200],                // 입력 범위 (위치)
  ["#ef4444", "#3b82f6", "#10b981"] // 출력 범위 (색상)
);

// -200 위치 → 빨간색 (#ef4444)
//    0 위치 → 파란색 (#3b82f6)  
//  200 위치 → 초록색 (#10b981)`,
    },
    {
      name: "다중 색상 포인트",
      description: "3개 이상의 색상 포인트를 사용하여 부드러운 색상 전환을 만듭니다.",
      code: `// 2개 포인트 (단순)
useTransform(x, [-200, 200], ["red", "blue"]);

// 3개 포인트 (중간 색상 추가)
useTransform(x, [-200, 0, 200], ["red", "blue", "green"]);

// 5개 포인트 (더 복잡한 그라데이션)
useTransform(x, 
  [-200, -100, 0, 100, 200], 
  ["red", "orange", "blue", "purple", "green"]
);`,
    },
    {
      name: "스타일 속성 연결",
      description: "변환된 색상 값을 motion.div의 style 속성에 연결합니다.",
      code: `<motion.div
  drag="x"
  style={{ 
    x,                    // 위치
    backgroundColor       // 변환된 색상
  }}
  dragConstraints={{ left: -200, right: 200 }}
  className="w-16 h-16 rounded-lg cursor-grab"
>
  {/* 드래그하면 위치와 색상이 동시에 변합니다 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Color Transform</h3>

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
        <p className="text-sm text-gray-600 mb-4">드래그 위치에 따라 색상이 빨강 → 파랑 → 초록으로 변합니다</p>
        <ColorTransformExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <ColorTransformLiveCoding />
      </div>
    </div>
  );
}
