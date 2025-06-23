"use client";

// Answer Components
import HoverEffectAnswer from "./02-interactive-motion/Answer/HoverEffectAnswer";
import TapEffectAnswer from "./02-interactive-motion/Answer/TapEffectAnswer";
import DragAnswer from "./02-interactive-motion/Answer/DragAnswer";
import CombinedInteractionAnswer from "./02-interactive-motion/Answer/CombinedInteractionAnswer";

// Practice Components
import HoverEffectPractice from "./02-interactive-motion/Practice/HoverEffectPractice";
import TapEffectPractice from "./02-interactive-motion/Practice/TapEffectPractice";
import DragPractice from "./02-interactive-motion/Practice/DragPractice";
import CombinedInteractionPractice from "./02-interactive-motion/Practice/CombinedInteractionPractice";

/**
 * 실습 2: Interactive Motion
 *
 * 목표: 사용자 상호작용에 반응하는 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 호버 효과 만들기
 * 2. 클릭/탭 효과 만들기
 * 3. 포커스 효과 만들기
 * 4. 드래그 기능 구현하기
 * 5. 복합 인터랙션 효과 만들기
 */

export default function InteractiveMotionPractice() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Interactive Motion 실습</h1>

      <div className="space-y-12">
        {/* 1. 호버 효과 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 호버 효과</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <HoverEffectAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <HoverEffectPractice />
            </div>
          </div>
        </div>

        {/* 2. 탭 효과 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 탭/클릭 효과</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <TapEffectAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <TapEffectPractice />
            </div>
          </div>
        </div>

        {/* 3. 드래그 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 드래그 기능</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <DragAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <DragPractice />
            </div>
          </div>
        </div>

        {/* 4. 복합 인터랙션 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 4. 복합 인터랙션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <CombinedInteractionAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <CombinedInteractionPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> 다양한 easing 함수로 호버 효과의 느낌을 바꿔보세요
          </p>
          <p>
            <strong>중급:</strong> 드래그 후 원래 위치로 돌아가는 스냅백 효과를 만들어보세요
          </p>
          <p>
            <strong>고급:</strong> 제스처와 애니메이션을 조합한 카드 스와이프 기능을 구현해보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 인터랙션 속성 참고</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>whileHover</code>: 마우스 오버 시
            </p>
            <p>
              <code>whileTap</code>: 클릭/탭 시
            </p>
            <p>
              <code>whileFocus</code>: 포커스 시
            </p>
            <p>
              <code>whileDrag</code>: 드래그 시
            </p>
            <p>
              <code>drag</code>: 드래그 가능 (true, "x", "y")
            </p>
            <p>
              <code>dragConstraints</code>: 드래그 범위 제한
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
