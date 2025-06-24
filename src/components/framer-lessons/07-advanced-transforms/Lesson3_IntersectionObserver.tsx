"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import IntersectionObserverLiveCoding from "../../live-coding/IntersectionObserverLiveCoding";

export default function Lesson3_IntersectionObserver() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "컨테이너 ref 생성",
      description: "Intersection Observer의 root로 사용할 컨테이너 요소에 대한 ref를 생성합니다.",
      code: `import { useRef, useState } from 'react';

const containerRef = useRef<HTMLDivElement>(null);
const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

// containerRef: Observer의 root 컨테이너
// visibleItems: 현재 보이는 요소들의 인덱스`,
    },
    {
      name: "Observer 설정",
      description: "Intersection Observer를 생성하고 콜백 함수를 정의합니다.",
      code: `const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
      
      if (entry.isIntersecting) {
        setVisibleItems(prev => new Set([...prev, cardIndex]));
      }
    });
  },
  {
    root: container,        // 컨테이너 기준
    rootMargin: '0px',
    threshold: 0.3          // 30% 보이면 트리거
  }
);`,
    },
    {
      name: "요소 관찰 시작",
      description: "관찰하고 싶은 모든 요소를 Observer에 등록합니다.",
      code: `// 모든 카드 요소를 찾아서 관찰 시작
const cards = container.querySelectorAll('[data-card]');

cards.forEach((card, index) => {
  observer.observe(card);  // 각 카드를 관찰 대상으로 추가
});

// 컴포넌트 언마운트 시 정리
return () => {
  cards.forEach(card => observer.unobserve(card));
  observer.disconnect();
};`,
    },
    {
      name: "애니메이션 적용",
      description: "visibleItems 상태에 따라 요소별로 다른 애니메이션을 적용합니다.",
      code: `<motion.div
  data-card
  data-index={i + 1}
  initial={{ opacity: 0, y: 50, scale: 0.8 }}
  animate={
    visibleItems.has(i + 1)
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0, y: 50, scale: 0.8 }
  }
  transition={{
    duration: 0.6,
    delay: visibleItems.has(i + 1) ? Array.from(visibleItems).indexOf(i + 1) * 0.1 : 0,
    ease: "easeOut"
  }}
/>`,
    },
  ];

  // 예제에서 사용할 데이터
  const demoItems = [
    { title: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
    { title: "Vue", icon: "💚", color: "from-green-400 to-green-600" },
    { title: "Angular", icon: "🅰️", color: "from-red-400 to-red-600" },
    { title: "Svelte", icon: "🧡", color: "from-orange-400 to-orange-600" },
    { title: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
    { title: "Nuxt", icon: "💚", color: "from-emerald-400 to-emerald-600" },
  ];

  // 예제 컴포넌트
  function IntersectionObserverExample() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");

            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newSet = new Set([...prev, cardIndex]);
                return newSet;
              });
            }
          });
        },
        {
          root: container,
          rootMargin: "0px",
          threshold: 0.3,
        }
      );

      const cards = container.querySelectorAll("[data-card]");
      cards.forEach((card) => {
        observer.observe(card);
      });

      return () => {
        cards.forEach((card) => observer.unobserve(card));
        observer.disconnect();
      };
    }, []);

    return (
      <div className="space-y-4">
        <div ref={containerRef} className="h-64 overflow-y-auto bg-white rounded-lg p-4 border-2 border-gray-200">
          {/* 스크롤 공간 확보 */}
          <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-6">
            <p className="text-gray-600 text-sm">📜 스크롤하여 카드들을 발견해보세요</p>
          </div>

          {/* 애니메이션 카드들 */}
          <div className="grid grid-cols-2 gap-3">
            {demoItems.map((item, i) => (
              <motion.div
                key={i}
                data-card
                data-index={i + 1}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={
                  visibleItems.has(i + 1)
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : { opacity: 0, y: 50, scale: 0.8 }
                }
                transition={{
                  duration: 0.6,
                  delay: visibleItems.has(i + 1) ? Array.from(visibleItems).indexOf(i + 1) * 0.1 : 0,
                  ease: "easeOut",
                }}
                className={`bg-gradient-to-br ${item.color} p-3 rounded-lg text-white text-center shadow-lg`}
              >
                <div className="text-lg mb-1">{item.icon}</div>
                <h3 className="font-bold text-xs">{item.title}</h3>
                <div className="mt-1 flex items-center justify-center gap-1">
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      visibleItems.has(i + 1) ? "bg-green-300" : "bg-gray-400"
                    }`}
                  />
                  <span className="text-xs opacity-80">{visibleItems.has(i + 1) ? "👁️" : "⏳"}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 하단 여백 */}
          <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg flex items-center justify-center mt-6">
            <p className="text-gray-600 text-sm">🎉 모든 카드를 발견했습니다!</p>
          </div>
        </div>

        {/* 현재 상태 표시 */}
        <div className="bg-white p-3 rounded border">
          <h5 className="font-medium text-gray-800 mb-2 text-sm">📊 현재 상태</h5>
          <div className="flex flex-wrap gap-1">
            {demoItems.map((_, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-xs rounded ${
                  visibleItems.has(i + 1) ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                }`}
              >
                {i + 1}: {visibleItems.has(i + 1) ? "✅" : "⏳"}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Intersection Observer 스크롤 트리거</h3>

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
        <p className="text-sm text-gray-600 mb-4">
          컨테이너 내부 스크롤 기준으로 요소들이 개별적으로 감지되는 애니메이션
        </p>
        <IntersectionObserverExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <IntersectionObserverLiveCoding />
    </div>
  );
}
