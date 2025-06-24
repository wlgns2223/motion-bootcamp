"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ModalAnimationLiveCoding from "../../live-coding/ModalAnimationLiveCoding";

export default function Lesson4_ModalAnimation() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "모달 상태 관리",
      description: "모달의 열림/닫힘 상태를 관리하는 useState를 설정합니다.",
      code: `import { useState } from 'react';

const [isModalOpen, setIsModalOpen] = useState(false);

// 모달 열기
const openModal = () => setIsModalOpen(true);

// 모달 닫기  
const closeModal = () => setIsModalOpen(false);`,
    },
    {
      name: "AnimatePresence 설정",
      description: "조건부 렌더링되는 모달에 애니메이션을 적용하기 위해 AnimatePresence로 감쌉니다.",
      code: `import { AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isModalOpen && (
    // 모달 컴포넌트들이 여기에 들어감
  )}
</AnimatePresence>

// AnimatePresence는 컴포넌트가 사라질 때도 애니메이션 적용`,
    },
    {
      name: "배경 오버레이",
      description: "모달 뒤의 어두운 배경 오버레이를 만들고 페이드 인/아웃 애니메이션을 적용합니다.",
      code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/50 z-40"
  onClick={closeModal}
/>

// 클릭 시 모달 닫기 기능 포함`,
    },
    {
      name: "모달 컨테이너",
      description: "실제 모달 컨테이너에 스케일과 위치 애니메이션을 적용하여 부드럽게 나타나도록 합니다.",
      code: `<motion.div
  initial={{ opacity: 0, scale: 0.8, y: 50 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.8, y: 50 }}
  transition={{ type: "spring", damping: 25, stiffness: 300 }}
  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
             bg-white rounded-lg p-6 shadow-2xl z-50"
>
  {/* 모달 내용 */}
</motion.div>`,
    },
  ];

  // 예제 컴포넌트
  function ModalExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="flex flex-col items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Open Modal
        </button>

        <AnimatePresence>
          {isModalOpen && (
            <>
              {/* 배경 오버레이 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsModalOpen(false)}
              />
              {/* 모달 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-2xl z-50 w-80"
              >
                <h3 className="text-lg font-semibold mb-4">Example Modal</h3>
                <p className="text-gray-600 mb-4">이것은 AnimatePresence를 사용한 모달 애니메이션 예제입니다.</p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: 모달 애니메이션</h3>
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
        <p className="text-sm text-gray-600 mb-4">스프링 애니메이션이 적용된 모달과 부드러운 배경 오버레이</p>
        <ModalExample />
      </div>
      {/* 라이브 코딩 영역 */}
      <ModalAnimationLiveCoding />
    </div>
  );
}
