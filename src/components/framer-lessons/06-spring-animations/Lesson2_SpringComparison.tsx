"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import SpringComparisonLiveCoding from "../../live-coding/SpringComparisonLiveCoding";

// 예제 컴포넌트
function SpringComparisonExample() {
  const softSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const normalSpring = useSpring(0, { stiffness: 100, damping: 10 });
  const stiffSpring = useSpring(0, { stiffness: 200, damping: 15 });

  const [isActive, setIsActive] = useState(false);

  const handleAnimate = () => {
    const targetValue = isActive ? 0 : 150;
    softSpring.set(targetValue);
    normalSpring.set(targetValue);
    stiffSpring.set(targetValue);
    setIsActive(!isActive);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Soft:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: softSpring }} className="w-6 h-6 bg-green-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Normal:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: normalSpring }} className="w-6 h-6 bg-blue-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Stiff:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: stiffSpring }} className="w-6 h-6 bg-red-500 rounded-full ml-1" />
          </div>
        </div>
      </div>

      <button
        onClick={handleAnimate}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Compare Springs
      </button>
    </div>
  );
}

export default function Lesson2_SpringComparison() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "다양한 스프링 설정",
      description: "서로 다른 stiffness와 damping 값으로 여러 개의 스프링을 생성합니다.",
      code: `// 부드러운 스프링 (낮은 강성, 높은 감쇠)
const softSpring = useSpring(0, { 
  stiffness: 50,   // 낮음 → 느린 반응
  damping: 20      // 높음 → 빠른 정지
});

// 일반 스프링 (중간 설정)
const normalSpring = useSpring(0, { 
  stiffness: 100,  // 중간 → 적당한 반응
  damping: 10      // 낮음 → 약간의 바운스
});

// 강한 스프링 (높은 강성, 중간 감쇠)
const stiffSpring = useSpring(0, { 
  stiffness: 200,  // 높음 → 빠른 반응
  damping: 15      // 중간 → 균형잡힌 정지
});`,
    },
    {
      name: "개별 스프링 적용",
      description: "각각의 motion.div에 서로 다른 스프링을 적용하여 동작 차이를 시각화합니다.",
      code: `{/* 부드러운 스프링 */}
<motion.div 
  style={{ x: softSpring }} 
  className="w-6 h-6 bg-green-500 rounded-full" 
/>

{/* 일반 스프링 */}
<motion.div 
  style={{ x: normalSpring }} 
  className="w-6 h-6 bg-blue-500 rounded-full" 
/>

{/* 강한 스프링 */}
<motion.div 
  style={{ x: stiffSpring }} 
  className="w-6 h-6 bg-red-500 rounded-full" 
/>`,
    },
    {
      name: "동시 값 변경",
      description: "모든 스프링의 값을 동시에 변경하여 서로 다른 애니메이션 동작을 비교합니다.",
      code: `const [isActive, setIsActive] = useState(false);

const handleAnimate = () => {
  const targetValue = isActive ? 0 : 150;
  
  // 모든 스프링에 동일한 목표 값 설정
  softSpring.set(targetValue);    // 부드럽게 이동
  normalSpring.set(targetValue);  // 적당한 바운스로 이동
  stiffSpring.set(targetValue);   // 빠르고 강하게 이동
  
  setIsActive(!isActive);
};`,
    },
    {
      name: "스프링 특성 이해",
      description: "각 스프링 설정이 애니메이션에 미치는 영향을 이해합니다.",
      code: `// stiffness (강성): 스프링의 탄성력
// - 높을수록 빠르고 강한 움직임
// - 낮을수록 느리고 부드러운 움직임

// damping (감쇠): 진동의 감소 
// - 높을수록 빨리 멈춤 (진동 적음)
// - 낮을수록 오래 진동 (바운스 많음)

// 조합 예시:
// stiffness: 50, damping: 20  → 느리고 부드러움
// stiffness: 100, damping: 10 → 적당한 바운스
// stiffness: 200, damping: 15 → 빠르고 안정적`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">� 강의 2: Spring Settings Comparison</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-indigo-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-indigo-700 mb-4">{steps[currentStep].description}</p>

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
          다양한 stiffness와 damping 값에 따른 스프링 애니메이션 차이를 비교해보세요
        </p>
        <SpringComparisonExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <SpringComparisonLiveCoding />
      </div>
    </div>
  );
}
