"use client";

import { motion } from "motion/react";
import { useState } from "react";
import ParentChildVariantsLiveCoding from "../../live-coding/ParentChildVariantsLiveCoding";

export default function Lesson2_ParentChildVariants() {
  const [listVisible, setListVisible] = useState(false);

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  // 컨테이너 variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  // 자식 아이템 variants
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const steps = [
    {
      name: "부모 컨테이너 variants 정의",
      description: "자식 요소들의 애니메이션을 제어할 수 있는 부모 컨테이너의 variants를 정의합니다.",
      code: `const containerVariants = {
  hidden: {
    opacity: 0,    // 부모 요소는 투명하게 시작
  },
  visible: {
    opacity: 1,    // 부모 요소가 보이게 됨
    transition: {
      delayChildren: 0.2,     // 자식들 애니메이션 시작 지연
      staggerChildren: 0.1,   // 자식들 사이의 간격
      when: "beforeChildren", // 부모 먼저, 자식 나중
    },
  },
};`,
    },
    {
      name: "자식 아이템 variants 정의",
      description: "각 자식 요소들이 어떻게 애니메이션될지 정의합니다. 부모로부터 상태가 자동으로 전파됩니다.",
      code: `const itemVariants = {
  hidden: {
    y: 20,         // 아래로 20px 이동된 상태에서 시작
    opacity: 0,    // 투명하게 시작
  },
  visible: {
    y: 0,          // 원래 위치로
    opacity: 1,    // 완전히 보이게
  },
};

// 각 자식은 부모의 상태에 따라 자동으로 애니메이션됨`,
    },
    {
      name: "부모에 variants 설정",
      description: "부모 컨테이너에 variants를 연결하고 애니메이션 상태를 제어합니다.",
      code: `<motion.div
  variants={containerVariants}    // 부모 variants 연결
  initial="hidden"               // 초기 상태
  animate={listVisible ? "visible" : "hidden"}  // 조건부 상태
  className="w-full max-w-md"
>
  {/* 여기에 자식 요소들이 들어감 */}
</motion.div>`,
    },
    {
      name: "자식들에게 variants 연결",
      description: "각 자식 요소에 variants를 설정합니다. animate 속성은 부모로부터 자동으로 전파됩니다.",
      code: `{/* 부모 컨테이너 내부 */}
<motion.div variants={itemVariants} className="p-3 bg-green-100 rounded-lg mb-2">
  📱 모바일 앱
</motion.div>
<motion.div variants={itemVariants} className="p-3 bg-green-200 rounded-lg mb-2">
  💻 웹 개발
</motion.div>
<motion.div variants={itemVariants} className="p-3 bg-green-300 rounded-lg mb-2">
  🎨 UI/UX 디자인
</motion.div>

// animate 속성을 각 자식에 따로 설정할 필요 없음!`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: 부모-자식 Variants</h3>

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
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={listVisible ? "visible" : "hidden"}
            className="w-full max-w-md"
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Menu Items</h4>
            <motion.div variants={itemVariants} className="p-3 bg-green-100 rounded-lg mb-2">
              📱 모바일 앱
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-200 rounded-lg mb-2">
              💻 웹 개발
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-300 rounded-lg mb-2">
              🎨 UI/UX 디자인
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-400 rounded-lg">
              📊 데이터 분석
            </motion.div>
          </motion.div>
          <button
            onClick={() => setListVisible(!listVisible)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Toggle Menu
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
        <ParentChildVariantsLiveCoding />
      </div>
    </div>
  );
}
