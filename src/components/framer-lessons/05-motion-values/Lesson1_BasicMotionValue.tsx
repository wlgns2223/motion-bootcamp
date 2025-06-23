"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import BasicMotionValueLiveCoding from "../../live-coding/BasicMotionValueLiveCoding";

// BasicMotionValueExample 컴포넌트
function BasicMotionValueExample() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, scale }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-12 h-12 bg-blue-500 rounded-full cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  );
}

export default function Lesson1_BasicMotionValue() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "useMotionValue 훅 사용",
      description:
        "useMotionValue를 사용하여 애니메이션 가능한 값을 생성합니다. 리렌더링을 발생시키지 않는 특별한 값입니다.",
      code: `import { useMotionValue } from 'motion/react';

// x축 위치를 위한 motion value 생성
const x = useMotionValue(0);

// motion value는 리렌더링을 발생시키지 않고
// 애니메이션 성능을 최적화합니다`,
    },
    {
      name: "useTransform으로 값 변환",
      description: "useTransform을 사용하여 하나의 motion value를 다른 값으로 변환합니다.",
      code: `import { useTransform } from 'motion/react';

const x = useMotionValue(0);

// x 값을 scale 값으로 변환
const scale = useTransform(
  x,                    // 입력 motion value
  [-200, 200],         // 입력 범위 (x가 -200~200일 때)
  [0.5, 1.5]          // 출력 범위 (scale이 0.5~1.5로 변환)
);`,
    },
    {
      name: "드래그 기능 추가",
      description: "motion.div에 drag 속성을 추가하여 드래그 가능한 요소를 만듭니다.",
      code: `<motion.div
  drag="x"  // x축으로만 드래그 가능
  dragConstraints={{ 
    left: -200,   // 왼쪽 제한
    right: 200    // 오른쪽 제한
  }}
  className="cursor-grab active:cursor-grabbing"
>
  드래그 가능한 요소
</motion.div>`,
    },
    {
      name: "style prop으로 연결",
      description: "motion value들을 style prop을 통해 실제 DOM 요소에 연결합니다.",
      code: `<motion.div
  drag="x"
  style={{ 
    x,        // x 위치
    scale     // 크기 변환
  }}
  dragConstraints={{ left: -200, right: 200 }}
>
  {/* 드래그하면 위치와 크기가 동시에 변합니다 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">� 강의 1: Basic Motion Value</h3>

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
        <p className="text-sm text-gray-600 mb-4">마우스 드래그로 원을 움직이면 위치에 따라 크기가 변합니다</p>
        <BasicMotionValueExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <BasicMotionValueLiveCoding />
      </div>
    </div>
  );
}
