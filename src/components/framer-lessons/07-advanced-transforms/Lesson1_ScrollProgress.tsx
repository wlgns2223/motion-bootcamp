"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import ScrollProgressLiveCoding from "../../live-coding/ScrollProgressLiveCoding";

export default function Lesson1_ScrollProgress() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "컨테이너 참조 생성",
      description: "스크롤을 추적할 컨테이너 요소에 대한 ref를 생성합니다.",
      code: `import { useRef } from 'react';

const containerRef = useRef<HTMLDivElement>(null);

// 이 ref를 스크롤 컨테이너에 연결할 예정`,
    },
    {
      name: "useScroll 설정",
      description: "지정된 컨테이너의 스크롤 진행도를 추적하는 훅을 설정합니다.",
      code: `import { useScroll } from 'motion/react';

const { scrollYProgress } = useScroll({
  container: containerRef  // 특정 요소의 스크롤 추적
});

// scrollYProgress: 0~1 사이의 스크롤 진행도`,
    },
    {
      name: "useTransform 설정",
      description: "스크롤 진행도를 프로그레스 바의 너비로 변환합니다.",
      code: `import { useTransform } from 'motion/react';

const scaleX = useTransform(
  scrollYProgress,  // 입력값: 0~1
  [0, 1],          // 입력 범위
  [0, 1]           // 출력 범위 (scale)
);

// 스크롤 0% = scaleX 0, 스크롤 100% = scaleX 1`,
    },
    {
      name: "프로그레스 바 적용",
      description: "motion.div에 scaleX를 적용하여 프로그레스 바를 만듭니다.",
      code: `<div ref={containerRef} className="overflow-y-scroll">
  {/* 프로그레스 바 */}
  <motion.div 
    style={{ scaleX }} 
    className="h-1 bg-blue-500 origin-left"
  />
  
  {/* 스크롤 가능한 콘텐츠 */}
  <div>...</div>
</div>`,
    },
  ];

  // 예제 컴포넌트
  function ScrollProgressExample() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      container: containerRef,
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
      <div className="relative">
        <motion.div style={{ scaleX }} className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-10" />
        <div ref={containerRef} className="h-48 overflow-y-scroll bg-gray-50 rounded-lg p-4 space-y-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="h-16 bg-white rounded shadow p-4">
              <h4 className="font-semibold">Content Block {i + 1}</h4>
              <p className="text-sm text-gray-600">스크롤하면 상단의 프로그레스 바가 채워집니다.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Scroll Progress Indicator</h3>

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
        <p className="text-sm text-gray-600 mb-4">스크롤 진행도에 따라 실시간으로 업데이트되는 프로그레스 바</p>
        <ScrollProgressExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <ScrollProgressLiveCoding />
    </div>
  );
}
