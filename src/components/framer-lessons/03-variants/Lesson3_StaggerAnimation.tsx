"use client";

import { motion } from "motion/react";
import { useState } from "react";
import StaggerAnimationLiveCoding from "../../live-coding/StaggerAnimationLiveCoding";

export default function Lesson3_StaggerAnimation() {
  const [cardsVisible, setCardsVisible] = useState(false);

  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  // 카드 컨테이너 variants
  const cardContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  // 개별 카드 variants
  const cardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.5,
      rotateX: -45,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  const steps = [
    {
      name: "카드 컨테이너 variants 정의",
      description: "Stagger 애니메이션을 제어할 부모 컨테이너의 variants를 정의합니다.",
      code: `const cardContainerVariants = {
  hidden: {
    opacity: 0,     // 컨테이너 시작 시 투명
  },
  visible: {
    opacity: 1,     // 컨테이너 보이게 됨
    transition: {
      delayChildren: 0.3,      // 자식들 시작 전 0.3초 대기
      staggerChildren: 0.2,    // 각 자식 사이 0.2초 간격
      when: "beforeChildren",  // 부모 먼저, 자식 나중
    },
  },
};`,
    },
    {
      name: "개별 카드 variants 정의",
      description: "각 카드가 어떻게 애니메이션될지 정의합니다. 3D 변형과 스프링 효과를 포함합니다.",
      code: `const cardVariants = {
  hidden: {
    y: 100,         // 아래로 100px 이동된 상태
    opacity: 0,     // 투명한 상태
    scale: 0.5,     // 50% 크기로 축소
    rotateX: -45,   // X축으로 -45도 회전 (3D 효과)
  },
  visible: {
    y: 0,           // 원래 위치
    opacity: 1,     // 완전히 보이게
    scale: 1,       // 원래 크기
    rotateX: 0,     // 회전 없음
    transition: {
      type: "spring",   // 스프링 애니메이션
      damping: 15,      // 감쇠 효과
      stiffness: 120,   // 스프링 강도
    },
  },
};`,
    },
    {
      name: "Grid 레이아웃 설정",
      description: "카드들을 격자 형태로 배치하고 부모 컨테이너에 variants를 연결합니다.",
      code: `<motion.div
  variants={cardContainerVariants}    // 컨테이너 variants 연결
  initial="hidden"
  animate={cardsVisible ? "visible" : "hidden"}
  className="grid grid-cols-1 md:grid-cols-3 gap-4"
>
  {/* 여기에 카드들이 들어감 */}
</motion.div>`,
    },
    {
      name: "각 카드에 variants 적용",
      description: "각 카드에 variants를 적용하여 순차적으로 나타나는 애니메이션을 구현합니다.",
      code: `{/* 각 카드는 동일한 variants 사용 */}
<motion.div
  variants={cardVariants}    // 카드 variants 연결
  className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl"
>
  <div className="text-3xl mb-3">🚀</div>
  <h4 className="font-semibold">Fast Performance</h4>
</motion.div>

// animate 속성을 각 카드에 따로 설정할 필요 없음!
// 부모로부터 자동으로 전파됨`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Stagger 애니메이션</h3>

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
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            key={cardsVisible ? "visible" : "hidden"}
            variants={cardContainerVariants}
            initial="hidden"
            animate={cardsVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl relative z-10 min-h-[200px]"
          >
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg border-2 border-purple-300"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2 text-purple-800">Fast Performance</h4>
              <p className="text-purple-600 text-sm">Lightning fast animations</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg border-2 border-blue-300"
            >
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2 text-blue-800">Beautiful Design</h4>
              <p className="text-blue-600 text-sm">Stunning visual effects</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg border-2 border-green-300"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2 text-green-800">Easy to Use</h4>
              <p className="text-green-600 text-sm">Simple and intuitive API</p>
            </motion.div>
          </motion.div>
          <button
            onClick={() => {
              console.log("Button clicked! Current state:", cardsVisible);
              setCardsVisible(!cardsVisible);
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold shadow-lg"
          >
            {cardsVisible ? "🫥 Hide Cards" : "✨ Show Cards"} (Current: {cardsVisible ? "Visible" : "Hidden"})
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
        <StaggerAnimationLiveCoding />
      </div>
    </div>
  );
}
