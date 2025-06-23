"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import React from "react";
import MouseFollowingLiveCoding from "../../live-coding/MouseFollowingLiveCoding";

// 예제 컴포넌트
function MouseFollowingExample() {
  const springX = useSpring(0, { stiffness: 50, damping: 15 });
  const springY = useSpring(0, { stiffness: 50, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 24; // 요소 크기의 절반
    const y = e.clientY - rect.top - 24;

    springX.set(x);
    springY.set(y);
  };

  return (
    <div
      className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-12 h-12 bg-purple-500 rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center text-gray-600">마우스를 움직여보세요</div>
    </div>
  );
}

export default function Lesson3_MouseFollowing() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "마우스 위치 추적",
      description: "마우스 움직임 이벤트를 감지하여 현재 위치를 계산합니다.",
      code: `const handleMouseMove = (e: React.MouseEvent) => {
  const rect = e.currentTarget.getBoundingClientRect();
  
  // 컨테이너 기준 상대 좌표 계산
  const x = e.clientX - rect.left - 24;  // 요소 크기 절반만큼 보정
  const y = e.clientY - rect.top - 24;
  
  // 스프링 값 업데이트
  springX.set(x);
  springY.set(y);
};`,
    },
    {
      name: "2D 스프링 생성",
      description: "X, Y 좌표를 위한 두 개의 독립적인 스프링을 생성합니다.",
      code: `// X축 스프링
const springX = useSpring(0, { 
  stiffness: 50,   // 부드러운 움직임
  damping: 15      // 적당한 감쇠
});

// Y축 스프링
const springY = useSpring(0, { 
  stiffness: 50, 
  damping: 15 
});

// 두 스프링이 독립적으로 작동하여 자연스러운 2D 움직임을 만듦`,
    },
    {
      name: "이벤트 핸들러 연결",
      description: "컨테이너 요소에 onMouseMove 이벤트를 연결합니다.",
      code: `<div
  className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100"
  onMouseMove={handleMouseMove}  // 마우스 움직임 감지
  style={{ cursor: 'none' }}     // 기본 커서 숨김
>
  {/* 마우스를 따라다니는 요소 */}
  <motion.div
    style={{ x: springX, y: springY }}
    className="absolute w-12 h-12 bg-purple-500 rounded-full"
  />
</div>`,
    },
    {
      name: "부드러운 추적 효과",
      description: "스프링 설정을 조정하여 마우스 추적의 부드러움을 제어합니다.",
      code: `// 빠른 추적 (즉시 반응)
{ stiffness: 300, damping: 30 }

// 부드러운 추적 (지연된 반응)  
{ stiffness: 50, damping: 15 }

// 느린 추적 (매우 부드러운 반응)
{ stiffness: 20, damping: 20 }

// 바운시한 추적 (진동 효과)
{ stiffness: 100, damping: 5 }`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Mouse Following Animation</h3>

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
        <MouseFollowingExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <MouseFollowingLiveCoding />
      </div>
    </div>
  );
}
