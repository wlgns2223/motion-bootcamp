"use client";

import { motion } from "motion/react";
import { useState } from "react";
import BasicVariantsLiveCoding from "../../live-coding/BasicVariantsLiveCoding";

export default function Lesson1_BasicVariants() {
  const [isVisible, setIsVisible] = useState(true);

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  // 기본 variants 정의
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const steps = [
    {
      name: "variants 객체 정의",
      description: "애니메이션 상태들을 하나의 객체로 정의하여 재사용 가능하게 만듭니다.",
      code: `const boxVariants = {
  hidden: {
    opacity: 0,    // 투명한 상태
    scale: 0.8,    // 80% 크기로 축소
    y: 50,         // 아래로 50px 이동
  },
  visible: {
    opacity: 1,    // 완전히 보이는 상태
    scale: 1,      // 원래 크기
    y: 0,          // 원래 위치
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};`,
    },
    {
      name: "variants 속성 연결",
      description: "motion.div에 variants 속성을 추가하여 정의한 애니메이션 상태들을 연결합니다.",
      code: `<motion.div
  variants={boxVariants}    // variants 객체 연결
  className="w-32 h-32 bg-blue-500 rounded-lg"
>
  Variants Box
</motion.div>`,
    },
    {
      name: "상태 이름으로 애니메이션",
      description: "animate 속성에 객체 대신 상태 이름 문자열을 전달하여 애니메이션을 제어합니다.",
      code: `// 직접 객체 전달 (기존 방식)
animate={{ opacity: 1, scale: 1 }}

// 상태 이름으로 제어 (variants 방식)
initial="hidden"
animate="visible"

// 조건부 애니메이션
animate={isVisible ? "visible" : "hidden"}`,
    },
    {
      name: "상태 토글 구현",
      description: "useState와 버튼을 사용하여 애니메이션 상태를 동적으로 토글할 수 있게 합니다.",
      code: `const [isVisible, setIsVisible] = useState(true);

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate={isVisible ? "visible" : "hidden"}
/>

<button onClick={() => setIsVisible(!isVisible)}>
  Toggle Visibility
</button>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 기본 Variants</h3>

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
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Variants Box
          </motion.div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Toggle Visibility
          </button>
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
        <BasicVariantsLiveCoding />
      </div>
    </div>
  );
}
