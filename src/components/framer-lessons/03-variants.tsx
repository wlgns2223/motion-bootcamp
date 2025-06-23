"use client";

import Lesson1_BasicVariants from "./03-variants/Lesson1_BasicVariants";
import Lesson2_ParentChildVariants from "./03-variants/Lesson2_ParentChildVariants";
import Lesson3_StaggerAnimation from "./03-variants/Lesson3_StaggerAnimation";

/**
 * 🎥 Lesson 3: Variants (통합 강의)
 *
 * 핵심 개념:
 * 1. variants - 애니메이션 상태를 객체로 정의
 * 2. 부모-자식 간 variants 전파
 * 3. staggerChildren - 자식 요소들의 지연 애니메이션
 * 4. delayChildren - 자식 애니메이션의 전체 지연
 */

export default function VariantsMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 3: Variants</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Variants를 사용해 복잡한 애니메이션을 체계적으로 관리하는 방법을 배워보세요. 강사와 함께 부모-자식 전파와
          stagger 애니메이션을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: 기본 Variants */}
      <Lesson1_BasicVariants />

      {/* 강의 2: 부모-자식 Variants */}
      <Lesson2_ParentChildVariants />

      {/* 강의 3: Stagger 애니메이션 */}
      <Lesson3_StaggerAnimation />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>variants</strong>: 애니메이션 상태를 객체로 정의하여 재사용 가능
          </li>
          <li>
            • <strong>부모-자식 전파</strong>: 부모의 variants가 자식에게 자동으로 전달
          </li>
          <li>
            • <strong>staggerChildren</strong>: 자식 요소들의 애니메이션을 순차적으로 실행
          </li>
          <li>
            • <strong>delayChildren</strong>: 모든 자식 애니메이션의 시작을 지연
          </li>
          <li>• animate 속성에 문자열로 상태 이름을 전달하여 variants 활용</li>
        </ul>
      </div>
    </div>
  );
}
