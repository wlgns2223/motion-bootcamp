"use client";

import {
  Lesson1_ScrollProgress,
  Lesson2_ScrollTriggered,
  Lesson3_IntersectionObserver,
} from "../framer-lessons/07-advanced-transforms";

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

      {/* 강의 3: Intersection Observer */}
      <Lesson3_IntersectionObserver />

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
          <li>
            • <strong>Intersection Observer</strong>: 요소가 뷰포트에 들어오는지 감지하는 브라우저 API
          </li>
          <li>
            • <strong>컨테이너 기준 스크롤</strong>: root 옵션으로 특정 컨테이너 내부 스크롤 감지
          </li>
          <li>• 실무에서 자주 사용되는 스크롤 기반 인터랙션 패턴들</li>
        </ul>

        <div className="mt-4 bg-yellow-100 p-4 rounded">
          <h4 className="font-semibold text-yellow-800 mb-2">🆚 비교: useScroll vs Intersection Observer</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-yellow-700 mb-1">useScroll (Framer Motion)</h5>
              <ul className="space-y-1 text-yellow-600">
                <li>• 연속적인 값 변화 (0~1)</li>
                <li>• 스크롤 진행률 기반</li>
                <li>• useTransform과 완벽 연동</li>
                <li>• 패럴랙스 효과에 적합</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-yellow-700 mb-1">Intersection Observer (브라우저 API)</h5>
              <ul className="space-y-1 text-yellow-600">
                <li>• 불연속적인 트리거 (on/off)</li>
                <li>• 요소별 개별 감지</li>
                <li>• 성능 최적화</li>
                <li>• 스크롤 트리거 애니메이션에 적합</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
