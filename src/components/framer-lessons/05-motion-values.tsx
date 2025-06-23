"use client";

import Lesson1_BasicMotionValue from "./05-motion-values/Lesson1_BasicMotionValue";
import Lesson2_ColorTransform from "./05-motion-values/Lesson2_ColorTransform";
import Lesson3_RotationTransform from "./05-motion-values/Lesson3_RotationTransform";
import Lesson4_MultipleTransforms from "./05-motion-values/Lesson4_MultipleTransforms";

/**
 * 🎥 Lesson 4: useMotionValue & useTransform (통합 강의)
 *
 * 핵심 개념:
 * 1. useMotionValue - 애니메이션 값을 직접 관리하고 추적
 * 2. useTransform - 하나의 motion value를 다른 값으로 변환
 * 3. 실시간 값 변화 추적 및 활용
 * 4. 복잡한 애니메이션 로직 구현
 */

export default function MotionValues() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 4: useMotionValue & useTransform</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          애니메이션 값을 직접 제어하고 변환하는 방법을 배워보세요. 강사와 함께 실시간 상호작용 애니메이션을 직접
          만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Basic Motion Value */}
      <Lesson1_BasicMotionValue />

      {/* 강의 2: Color Transform */}
      <Lesson2_ColorTransform />

      {/* 강의 3: Rotation Transform */}
      <Lesson3_RotationTransform />

      {/* 강의 4: Multiple Transforms */}
      <Lesson4_MultipleTransforms />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useMotionValue</strong>: 애니메이션 값을 직접 생성하고 관리합니다
          </li>
          <li>
            • <strong>useTransform</strong>: 하나의 값을 다른 값으로 매핑 변환합니다
          </li>
          <li>
            • <strong>실시간 변환</strong>: 사용자 입력에 따라 즉시 반응하는 애니메이션
          </li>
          <li>
            • <strong>성능 최적화</strong>: React 리렌더링 없이 애니메이션 처리
          </li>
        </ul>
      </div>
    </div>
  );
}
