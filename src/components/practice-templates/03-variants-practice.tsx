"use client";

// Answer Components
import BasicVariantsAnswer from "./03-variants/Answer/BasicVariantsAnswer";
import ParentChildVariantsAnswer from "./03-variants/Answer/ParentChildVariantsAnswer";
import StaggerAnimationAnswer from "./03-variants/Answer/StaggerAnimationAnswer";
import ComplexVariantsAnswer from "./03-variants/Answer/ComplexVariantsAnswer";

// Practice Components
import BasicVariantsPractice from "./03-variants/Practice/BasicVariantsPractice";
import ParentChildVariantsPractice from "./03-variants/Practice/ParentChildVariantsPractice";
import StaggerAnimationPractice from "./03-variants/Practice/StaggerAnimationPractice";
import ComplexVariantsPractice from "./03-variants/Practice/ComplexVariantsPractice";

/**
 * 실습 3: Variants
 *
 * 목표: variants를 사용하여 복잡한 애니메이션을 체계적으로 관리해보세요
 *
 * 실습 과제:
 * 1. 기본 variants 정의하기
 * 2. 부모-자식 variants 전파
 * 3. staggerChildren으로 순차 애니메이션
 * 4. 조건부 애니메이션 상태 관리
 * 5. 복잡한 variants 시스템 구축
 */

export default function VariantsPractice() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Variants 실습</h1>

      <div className="space-y-12">
        {/* 1. 기본 Variants 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 기본 Variants</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <BasicVariantsAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <BasicVariantsPractice />
            </div>
          </div>
        </div>

        {/* 2. 부모-자식 Variants 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 부모-자식 Variants</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ParentChildVariantsAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ParentChildVariantsPractice />
            </div>
          </div>
        </div>

        {/* 3. Stagger 애니메이션 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. Stagger 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <StaggerAnimationAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <StaggerAnimationPractice />
            </div>
          </div>
        </div>

        {/* 4. 복합 Variants 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 4. 복합 Variants</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ComplexVariantsAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ComplexVariantsPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> variants에 다른 속성들(rotate, scale 등)을 추가해보세요
          </p>
          <p>
            <strong>중급:</strong> 조건부 variants로 다양한 상태를 관리해보세요
          </p>
          <p>
            <strong>고급:</strong> 복잡한 UI 컴포넌트(모달, 드롭다운 등)에 variants를 적용해보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 Variants 속성 참고</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>variants</code>: 애니메이션 상태 객체
            </p>
            <p>
              <code>initial</code>: 초기 상태
            </p>
            <p>
              <code>animate</code>: 애니메이션할 상태
            </p>
            <p>
              <code>staggerChildren</code>: 자식 요소 순차 애니메이션 간격
            </p>
            <p>
              <code>delayChildren</code>: 자식 애니메이션 시작 지연
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
