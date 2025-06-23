"use client";

import { motion } from "motion/react";
import { useState } from "react";
import ScaleLiveCoding from "../../live-coding/ScaleLiveCoding";

export default function Lesson3_Scale() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "motion.div 설정",
      description: "일반 div를 motion.div로 변경하여 애니메이션 기능 활성화",
      code: "import { motion } from 'motion/react'\n<motion.div>",
    },
    {
      name: "initial 속성 추가",
      description: "시작 상태를 설정 - scale: 0으로 설정하여 완전히 작은 상태",
      code: "initial={{ scale: 0 }}",
    },
    {
      name: "animate 속성 추가",
      description: "최종 상태를 정의 - scale: 1로 설정하여 원래 크기로 확대",
      code: "animate={{ scale: 1 }}",
    },
    {
      name: "spring transition 설정",
      description: "탄성 효과가 있는 스프링 애니메이션으로 자연스러운 확대 효과",
      code: "transition={{ type: 'spring', stiffness: 300 }}",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Scale 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Scale
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ type: "spring", stiffness: 300 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 설정</li>
          <li>2단계: initial로 시작 크기 설정 (scale: 0)</li>
          <li>3단계: animate로 최종 크기 정의 (scale: 1)</li>
          <li>4단계: spring transition으로 탄성 효과 추가</li>
        </ol>
      </div>

      {/* 단계별 진행 가이드 */}
      <div className="bg-white p-4 rounded-lg border-2 border-purple-200 mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">📚 강의 진행 가이드</h4>

        {/* 단계 네비게이션 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                currentStep === index ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}. {step.name}
            </button>
          ))}
        </div>

        {/* 현재 단계 정보 */}
        <div className="p-3 bg-purple-50 rounded border border-purple-200">
          <div className="text-sm">
            <strong>현재 단계:</strong> {steps[currentStep].name}
            <br />
            <strong>설명:</strong> {steps[currentStep].description}
            <br />
            <strong>코드:</strong>{" "}
            <code className="bg-white px-2 py-1 rounded text-xs font-mono text-purple-600">
              {steps[currentStep].code}
            </code>
          </div>
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
        <ScaleLiveCoding />
      </div>
    </div>
  );
}
