"use client";

import { Lesson1_ScrollProgress, Lesson2_ScrollTriggered } from "../framer-lessons/07-advanced-transforms";

/**
 * 🎥 Lesson 6: Advanced Transforms (통합 강의)
 *
 * 핵심 개념:
 * 1. useScroll - 스크롤 진행도 추적
 * 2. Scroll Progress Indicator
 * 3. Scroll-triggered Animations
 * 4. 실무에서 자주 사용되는 스크롤 패턴들
 */

export default function AdvancedTransforms() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 6: Advanced Transforms</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          스크롤 진행도 추적과 스크롤 기반 애니메이션을 배워보세요. 강사와 함께 useScroll과 useTransform을 활용해
          실무에서 자주 사용되는 스크롤 패턴들을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Scroll Progress */}
      <Lesson1_ScrollProgress />

      {/* 강의 2: Scroll-triggered 애니메이션 */}
      <Lesson2_ScrollTriggered />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useScroll</strong>: 스크롤 진행도를 추적하여 애니메이션에 활용
          </li>
          <li>
            • <strong>useTransform</strong>: 스크롤 값을 다른 값으로 변환
          </li>
          <li>
            • <strong>scrollYProgress</strong>: 0~1 사이의 스크롤 진행률 값
          </li>
          <li>
            • <strong>offset</strong>: 언제 애니메이션을 시작/끝낼지 정의
          </li>
          <li>• 실무에서 자주 사용되는 스크롤 기반 인터랙션 패턴들</li>
        </ul>
      </div>
    </div>
  );
}
