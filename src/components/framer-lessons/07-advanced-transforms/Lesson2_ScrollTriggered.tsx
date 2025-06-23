"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import ScrollTriggeredLiveCoding from "../../live-coding/ScrollTriggeredLiveCoding";

export default function Lesson2_ScrollTriggered() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "타겟 요소 참조",
      description: "애니메이션이 적용될 특정 요소에 대한 ref를 생성합니다.",
      code: `import { useRef } from 'react';

const ref = useRef<HTMLDivElement>(null);

// 이 요소가 뷰포트에 들어오고 나갈 때를 감지`,
    },
    {
      name: "useScroll offset 설정",
      description: "언제 애니메이션을 시작하고 끝낼지 정의하는 offset을 설정합니다.",
      code: `import { useScroll } from 'motion/react';

const { scrollYProgress } = useScroll({
  target: ref,                    // 추적할 요소
  offset: ["start end", "end start"]  // 시작점과 끝점
});

// "start end": 요소 시작이 화면 끝에 도달할 때
// "end start": 요소 끝이 화면 시작에 도달할 때`,
    },
    {
      name: "복합 변환 설정",
      description: "하나의 스크롤 값을 여러 CSS 속성으로 변환합니다.",
      code: `import { useTransform } from 'motion/react';

// 4단계 변환: 나타남 → 유지 → 사라짐
const opacity = useTransform(
  scrollYProgress, 
  [0, 0.3, 0.7, 1],    // 입력 범위
  [0, 1, 1, 0]         // 투명도 변화
);

const scale = useTransform(
  scrollYProgress, 
  [0, 0.3, 0.7, 1], 
  [0.5, 1, 1, 0.5]     // 크기 변화
);

const y = useTransform(
  scrollYProgress, 
  [0, 0.3, 0.7, 1], 
  [100, 0, 0, -100]    // 위치 변화
);`,
    },
    {
      name: "모든 애니메이션 적용",
      description: "motion.div에 모든 변환된 값을 적용하여 복합 애니메이션을 만듭니다.",
      code: `<motion.div
  ref={ref}
  style={{ 
    opacity,  // 투명도 애니메이션
    scale,    // 크기 애니메이션
    y         // 위치 애니메이션
  }}
  className="bg-gradient-to-r from-green-400 to-blue-500"
>
  Scroll Triggered Element  
</motion.div>`,
    },
  ];

  // 예제 컴포넌트
  function ScrollTriggeredExample() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

    return (
      <div className="space-y-8">
        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">스크롤하여 아래 요소들이 나타나는 것을 확인하세요</p>
        </div>

        <motion.div
          ref={ref}
          style={{ opacity, scale, y }}
          className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
        >
          Scroll Triggered Element
        </motion.div>

        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">더 스크롤하면 요소가 사라집니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Scroll-triggered 애니메이션</h3>

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
        <p className="text-sm text-gray-600 mb-4">스크롤 위치에 따라 부드럽게 나타나고 사라지는 요소</p>
        <ScrollTriggeredExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <ScrollTriggeredLiveCoding />
    </div>
  );
}
