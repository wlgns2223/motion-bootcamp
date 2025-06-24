"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

// 스크롤 트리거드 Answer 컴포넌트 (컨테이너 내부 스크롤 기준)
export default function ScrollTriggeredAnswer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer를 컨테이너 기준으로 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        root: container, // 컨테이너를 root로 설정
        rootMargin: "0px",
        threshold: 0.3, // 30% 이상 보이면 트리거
      }
    );

    // 모든 카드 요소를 관찰 대상으로 추가
    const cards = container.querySelectorAll("[data-card]");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div ref={containerRef} className="h-96 overflow-y-auto bg-white rounded-lg p-4">
        <div className="space-y-8">
          {/* 충분한 스크롤 공간을 위한 추가 여백 */}
          <div className="h-32"></div>
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              data-card
              data-index={i}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={
                visibleItems.has(i)
                  ? {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }
                  : { opacity: 0, x: -50, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: visibleItems.has(i) ? Array.from(visibleItems).indexOf(i) * 0.1 : 0,
                ease: "easeOut",
              }}
              className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-lg text-white shadow-lg"
            >
              <h3 className="font-bold">카드 {i}</h3>
              <p>컨테이너 내부 스크롤로 트리거됩니다</p>
              <p className="text-sm opacity-80">{visibleItems.has(i) ? "✅ 애니메이션 실행됨" : "⏳ 대기 중..."}</p>
            </motion.div>
          ))}
          {/* 충분한 스크롤 공간을 위한 추가 여백 */}
          <div className="h-32"></div>
        </div>
      </div>
    </div>
  );
}
