"use client";

// Answer Components
import ConditionalRenderingAnswer from "./04-animate-presence/Answer/ConditionalRenderingAnswer";
import LayoutTransitionAnswer from "./04-animate-presence/Answer/LayoutTransitionAnswer";
import ListAnimationAnswer from "./04-animate-presence/Answer/ListAnimationAnswer";
import ModalAnimationAnswer from "./04-animate-presence/Answer/ModalAnimationAnswer";

// Practice Components
import ConditionalRenderingPractice from "./04-animate-presence/Practice/ConditionalRenderingPractice";
import LayoutTransitionPractice from "./04-animate-presence/Practice/LayoutTransitionPractice";
import ListAnimationPractice from "./04-animate-presence/Practice/ListAnimationPractice";
import ModalAnimationPractice from "./04-animate-presence/Practice/ModalAnimationPractice";

/**
 * 실습 4: AnimatePresence
 *
 * 목표: AnimatePresence를 사용하여 요소의 등장과 퇴장 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 조건부 렌더링 애니메이션
 * 2. 레이아웃 전환 애니메이션
 * 3. 리스트 아이템 추가/제거 애니메이션
 * 4. 모달 등장/퇴장 애니메이션
 */

export default function AnimatePresencePractice() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">AnimatePresence 실습</h1>

      <div className="space-y-12">
        {/* 1. 조건부 렌더링 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 조건부 렌더링</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ConditionalRenderingAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ConditionalRenderingPractice />
            </div>
          </div>
        </div>

        {/* 2. 레이아웃 전환 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 레이아웃 전환</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <LayoutTransitionAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <LayoutTransitionPractice />
            </div>
          </div>
        </div>

        {/* 3. 리스트 애니메이션 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 리스트 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ListAnimationAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ListAnimationPractice />
            </div>
          </div>
        </div>

        {/* 4. 모달 애니메이션 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">� 4. 모달 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ModalAnimationAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ModalAnimationPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> exit 애니메이션에 다른 속성들(rotate, scale 등)을 추가해보세요
          </p>
          <p>
            <strong>중급:</strong> mode="wait"와 mode="popLayout"의 차이점을 실험해보세요
          </p>
          <p>
            <strong>고급:</strong> 복잡한 UI 전환(페이지 라우팅, 탭 전환 등)에 AnimatePresence를 적용해보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 AnimatePresence 속성 참고</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>initial</code>: 요소가 나타날 때의 초기 상태
            </p>
            <p>
              <code>animate</code>: 요소가 보이는 동안의 상태
            </p>
            <p>
              <code>exit</code>: 요소가 사라질 때의 상태
            </p>
            <p>
              <code>mode="wait"</code>: 이전 요소가 완전히 사라진 후 새 요소 등장
            </p>
            <p>
              <code>key</code>: 요소를 고유하게 식별하는 속성
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
