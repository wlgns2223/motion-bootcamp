"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

// useInView 훅을 활용한 스크롤 트리거드 Answer 컴포넌트
export default function UseInViewAnswer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 각 카드마다 개별 ref와 useInView 훅 사용
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const cardInViews = cardRefs.map((ref) =>
    useInView(ref, {
      root: containerRef, // 컨테이너를 root로 설정
      once: true, // 한번만 트리거
      margin: "0px 0px -30% 0px", // 70% 보이면 트리거
    })
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="mb-4 text-center">
        <h4 className="text-md font-semibold text-green-700">useInView 훅 활용</h4>
        <p className="text-sm text-green-600">Framer Motion의 useInView로 간편하게 구현</p>
      </div>

      <div ref={containerRef} className="h-96 overflow-y-auto bg-white rounded-lg p-4">
        <div className="space-y-8">
          {/* 충분한 스크롤 공간을 위한 추가 여백 */}
          <div className="h-32"></div>

          {[1, 2, 3, 4, 5].map((i, index) => (
            <motion.div
              key={i}
              ref={cardRefs[index]}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              animate={
                cardInViews[index]
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }
                  : { opacity: 0, y: 50, rotateX: -30 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94], // 커스텀 이징
              }}
              className="bg-gradient-to-r from-emerald-400 to-teal-400 p-6 rounded-lg text-white shadow-xl transform-gpu"
              style={{ perspective: "1000px" }}
            >
              <h3 className="font-bold">카드 {i}</h3>
              <p>useInView 훅으로 트리거됩니다</p>
              <div className="mt-2 flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    cardInViews[index] ? "bg-green-300" : "bg-gray-400"
                  }`}
                />
                <span className="text-sm opacity-80">{cardInViews[index] ? "✅ In View" : "⏳ Waiting..."}</span>
              </div>
            </motion.div>
          ))}

          {/* 충분한 스크롤 공간을 위한 추가 여백 */}
          <div className="h-32"></div>
        </div>
      </div>
    </div>
  );
}
