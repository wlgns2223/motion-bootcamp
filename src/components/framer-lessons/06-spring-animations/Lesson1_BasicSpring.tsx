"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import BasicSpringLiveCoding from "../../live-coding/BasicSpringLiveCoding";

// 예제 컴포넌트
function BasicSpringExample() {
  const springX = useSpring(0, { stiffness: 100, damping: 10 });
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newValue = isActive ? 0 : 200;
    springX.set(newValue);
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[300px] h-20 bg-gray-100 rounded-lg flex items-center">
        <motion.div style={{ x: springX }} className="w-12 h-12 bg-blue-500 rounded-full ml-4" />
      </div>
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isActive ? "Reset" : "Animate"}
      </button>
    </div>
  );
}

export default function Lesson1_BasicSpring() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "useSpring 훅 사용",
      description: "useSpring을 사용하여 자연스러운 물리 기반 애니메이션을 만듭니다.",
      code: `import { useSpring } from 'motion/react';

// 기본 스프링 생성
const springX = useSpring(0);

// 스프링 설정이 포함된 생성
const springX = useSpring(0, {
  stiffness: 100,  // 강성 (높을수록 빠름)
  damping: 10      // 감쇠 (높을수록 빨리 정지)
});`,
    },
    {
      name: "스프링 설정 이해",
      description: "stiffness와 damping 매개변수를 통해 스프링의 동작을 제어합니다.",
      code: `// stiffness (강성): 스프링의 탄성력
// 값이 높을수록: 빠르고 강한 애니메이션
// 값이 낮을수록: 느리고 부드러운 애니메이션

// damping (감쇠): 진동의 감소
// 값이 높을수록: 빨리 멈춤 (진동 적음)
// 값이 낮을수록: 오래 진동 (바운스 많음)

const springX = useSpring(0, {
  stiffness: 300,  // 강한 탄성 (빠름)
  damping: 30      // 적당한 감쇠 (약간의 바운스)
});`,
    },
    {
      name: "스프링 값 변경",
      description: "springX.set() 메서드를 사용하여 스프링 값을 변경하고 애니메이션을 트리거합니다.",
      code: `const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
  const newValue = isActive ? 0 : 200;
  
  // 스프링 값 설정 (애니메이션 자동 시작)
  springX.set(newValue);
  
  setIsActive(!isActive);
};

// 버튼 클릭 시 0 ↔ 200 사이를 전환`,
    },
    {
      name: "motion.div에 연결",
      description: "스프링 값을 motion.div의 style 속성에 연결하여 실제 DOM에 애니메이션을 적용합니다.",
      code: `<motion.div 
  style={{ x: springX }}  // 스프링 값 연결
  className="w-12 h-12 bg-blue-500 rounded-full"
>
  {/* 스프링 값이 변경되면 자동으로 애니메이션됩니다 */}
</motion.div>

// useSpring의 장점:
// - 자연스러운 물리 기반 애니메이션
// - 부드러운 바운스 효과
// - 실시간 값 변경 가능`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Basic Spring Animation</h3>

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
        <p className="text-sm text-gray-600 mb-4">기본 스프링 애니메이션 - 자연스러운 바운스 효과를 확인해보세요</p>
        <BasicSpringExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <BasicSpringLiveCoding />
      </div>
    </div>
  );
}
