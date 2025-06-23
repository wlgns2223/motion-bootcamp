"use client";

import Lesson1_BasicSpring from "./06-spring-animations/Lesson1_BasicSpring";
import Lesson2_SpringComparison from "./06-spring-animations/Lesson2_SpringComparison";
import Lesson3_MouseFollowing from "./06-spring-animations/Lesson3_MouseFollowing";
import Lesson4_SpringTransform from "./06-spring-animations/Lesson4_SpringTransform";
import Lesson5_ElasticButton from "./06-spring-animations/Lesson5_ElasticButton";

/**
 * 🎥 Lesson 5: useSpring (통합 강의)
 *
 * 핵심 개념:
 * 1. useSpring - 스프링 물리학 기반의 부드러운 애니메이션
 * 2. stiffness - 스프링의 강성 (높을수록 빠른 반응)
 * 3. damping - 스프링의 감쇠 (높을수록 빠른 정지)
 * 4. mass - 스프링의 질량 (높을수록 느린 반응)
 */

export default function SpringAnimations() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 5: useSpring</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          물리학 기반의 자연스러운 스프링 애니메이션을 배워보세요. 강사와 함께 다양한 스프링 효과를 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Basic Spring */}
      <Lesson1_BasicSpring />

      {/* 강의 2: Spring Settings Comparison */}
      <Lesson2_SpringComparison />

      {/* 강의 3: Mouse Following Spring */}
      <Lesson3_MouseFollowing />

      {/* 강의 4: Spring + Transform */}
      <Lesson4_SpringTransform />

      {/* 강의 5: Elastic Button */}
      <Lesson5_ElasticButton />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useSpring</strong>: 물리 기반의 자연스러운 애니메이션 생성
          </li>
          <li>
            • <strong>stiffness</strong>: 스프링의 강성도 (높을수록 빠른 반응)
          </li>
          <li>
            • <strong>damping</strong>: 스프링의 감쇠율 (높을수록 빠른 정지)
          </li>
          <li>
            • <strong>useTransform</strong>: 스프링과 조합하여 복잡한 애니메이션 구현
          </li>
          <li>
            • <strong>실시간 상호작용</strong>: 마우스 움직임, 클릭 등에 반응하는 자연스러운 UI
          </li>
        </ul>
      </div>
    </div>
  );
}
