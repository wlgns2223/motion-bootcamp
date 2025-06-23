"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useState } from "react";
import SpringTransformLiveCoding from "../../live-coding/SpringTransformLiveCoding";

// 예제 컴포넌트
function SpringTransformExample() {
  const progress = useSpring(0, { stiffness: 150, damping: 12 });
  const scale = useTransform(progress, [0, 1], [1, 2]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  const opacity = useTransform(progress, [0, 1], [0.5, 1]);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    progress.set(isExpanded ? 0 : 1);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        style={{ scale, rotate, opacity }}
        className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg cursor-pointer"
        onClick={handleToggle}
      />
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        {isExpanded ? "Shrink" : "Expand"}
      </button>
    </div>
  );
}

export default function Lesson4_SpringTransform() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Progress 스프링 생성",
      description: "전체 애니메이션 진행도를 관리할 스프링을 생성합니다.",
      code: `import { useSpring } from 'motion/react';

// 0-1 값으로 진행도를 관리하는 스프링
const progress = useSpring(0, { 
  stiffness: 150,  // 적당히 빠른 반응
  damping: 12      // 부드러운 정지
});

// 이 하나의 값으로 여러 변환을 제어할 예정`,
    },
    {
      name: "다중 Transform 매핑",
      description: "하나의 progress 스프링 값을 여러 CSS 속성으로 변환합니다.",
      code: `import { useTransform } from 'motion/react';

// 크기 변환: 1배 → 2배
const scale = useTransform(progress, [0, 1], [1, 2]);

// 회전 변환: 0도 → 360도 (한 바퀴 회전)
const rotate = useTransform(progress, [0, 1], [0, 360]);

// 투명도 변환: 50% → 100%
const opacity = useTransform(progress, [0, 1], [0.5, 1]);`,
    },
    {
      name: "상태 기반 제어",
      description: "React 상태와 연동하여 애니메이션을 토글할 수 있게 합니다.",
      code: `const [isExpanded, setIsExpanded] = useState(false);

const handleToggle = () => {
  // progress 값을 0 ↔ 1 사이에서 토글
  progress.set(isExpanded ? 0 : 1);
  
  // React 상태도 함께 업데이트
  setIsExpanded(!isExpanded);
};

// 클릭할 때마다 애니메이션이 반대 방향으로 실행`,
    },
    {
      name: "복합 스타일 적용",
      description: "모든 변환을 motion.div에 동시에 적용하여 매끄러운 복합 애니메이션을 만듭니다.",
      code: `<motion.div
  style={{ 
    scale,      // 크기 변화
    rotate,     // 회전 변화  
    opacity     // 투명도 변화
  }}
  onClick={handleToggle}
  className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500"
>
  {/* 클릭 시 크기, 회전, 투명도가 모두 부드럽게 변함 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">� 강의 4: Spring + Transform Combination</h3>

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
        <p className="text-sm text-gray-600 mb-4">
          스프링과 useTransform을 조합해 scale, rotate, opacity를 동시에 제어하는 복합 애니메이션
        </p>
        <SpringTransformExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <SpringTransformLiveCoding />
      </div>
    </div>
  );
}
