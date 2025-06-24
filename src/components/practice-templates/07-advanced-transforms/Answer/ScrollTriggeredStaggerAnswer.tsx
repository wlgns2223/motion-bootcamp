"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// 스크롤 트리거드 스테거 Answer 컴포넌트 (컨테이너 내부 스크롤 기준)
export default function ScrollTriggeredStaggerAnswer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef, // 컨테이너 내부 스크롤만 기준으로 설정
  });

  const items = [
    { title: "Frontend", icon: "💻", color: "from-blue-400 to-blue-600" },
    { title: "Backend", icon: "⚙️", color: "from-green-400 to-green-600" },
    { title: "Database", icon: "🗃️", color: "from-purple-400 to-purple-600" },
    { title: "DevOps", icon: "🚀", color: "from-orange-400 to-orange-600" },
    { title: "Mobile", icon: "📱", color: "from-pink-400 to-pink-600" },
    { title: "AI/ML", icon: "🤖", color: "from-indigo-400 to-indigo-600" },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <h4 className="text-md font-semibold mb-3 text-green-700">✅ 완성된 예시:</h4>
      <p className="text-sm text-green-600 mb-4">
        컨테이너 내부 스크롤로 여러 카드가 순차적으로 나타나는 스테거 애니메이션
      </p>

      <div ref={containerRef} className="h-96 overflow-y-scroll bg-white rounded-lg p-4">
        <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-600">컨테이너 내부에서 스크롤하며 카드들을 관찰해보세요</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => {
            // 간단한 스크롤 기준 스테거 애니메이션
            const startProgress = i * 0.12; // 각 카드마다 12% 간격
            const endProgress = startProgress + 0.25; // 25% 구간에서 애니메이션

            const opacity = useTransform(scrollYProgress, [startProgress, endProgress], [0, 1]);
            const y = useTransform(scrollYProgress, [startProgress, endProgress], [60, 0]);
            const scale = useTransform(scrollYProgress, [startProgress, endProgress], [0.7, 1]);

            return (
              <motion.div
                key={i}
                style={{ opacity, y, scale }}
                className={`bg-gradient-to-br ${item.color} p-4 rounded-lg text-white text-center shadow-lg`}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm">{item.title}</h3>
                <div className="text-xs mt-1 opacity-75">
                  Progress: {startProgress.toFixed(2)} - {endProgress.toFixed(2)}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 더 많은 스크롤 공간 확보 */}
        <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg flex items-center justify-center mt-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">모든 카드가 나타났습니다!</p>
            <p className="text-xs text-gray-500">계속 스크롤해보세요</p>
          </div>
        </div>
      </div>
    </div>
  );
}
