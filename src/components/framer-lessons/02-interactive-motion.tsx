"use client";

import Lesson1_HoverEffects from "./02-interactive-motion/Lesson1_HoverEffects";
import Lesson2_TapEffects from "./02-interactive-motion/Lesson2_TapEffects";
import Lesson3_CombinedInteractions from "./02-interactive-motion/Lesson3_CombinedInteractions";

/**
 * 🎥 Lesson 2: Interactive Motion (통합 강의)
 *
 * 핵심 개념:
 * 1. whileHover - 마우스 호버 시 애니메이션
 * 2. whileTap - 클릭/터치 시 애니메이션
 * 3. whileFocus - 포커스 시 애니메이션
 * 4. 다양한 transition 타입 (spring, tween)
 */

export default function InteractiveMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 2: Interactive Motion</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          사용자 상호작용에 반응하는 애니메이션을 배워보세요. 강사와 함께 whileHover, whileTap 등을 이용해 인터랙티브한
          UI를 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Hover 애니메이션 */}
      <Lesson1_HoverEffects />

      {/* 강의 2: Tap 애니메이션 */}
      <Lesson2_TapEffects />

      {/* 강의 3: 복합 인터랙션 */}
      <Lesson3_CombinedInteractions />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>whileHover</strong>: 마우스 호버 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>whileTap</strong>: 클릭/터치 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>whileFocus</strong>: 포커스 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>transition</strong>: spring, tween 등 다양한 타입으로 애니메이션 조절
          </li>
          <li>• 상호작용 시 적절한 피드백을 제공하여 사용자 경험을 향상시킵니다</li>
        </ul>
      </div>
    </div>
  );
}
