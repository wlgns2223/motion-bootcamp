"use client";

import Lesson1_ConditionalRendering from "./04-animate-presence/Lesson1_ConditionalRendering";
import Lesson2_LayoutTransition from "./04-animate-presence/Lesson2_LayoutTransition";
import Lesson3_ListAnimation from "./04-animate-presence/Lesson3_ListAnimation";
import Lesson4_ModalAnimation from "./04-animate-presence/Lesson4_ModalAnimation";

/**
 * 🎥 Lesson 4: AnimatePresence (통합 강의)
 *
 * 핵심 개념:
 * 1. AnimatePresence - 컴포넌트가 제거될 때 exit 애니메이션 실행
 * 2. exit - 컴포넌트 제거 시 실행될 애니메이션 정의
 * 3. mode - 애니메이션 모드 설정 (sync, wait, popLayout)
 * 4. 조건부 렌더링과 리스트 애니메이션에서의 활용
 */

export default function AnimatePresenceLesson() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 4: AnimatePresence</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          컴포넌트가 DOM에서 제거될 때 실행되는 exit 애니메이션을 배워보세요. 강사와 함께 조건부 렌더링, 모달, 리스트
          애니메이션을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: 조건부 렌더링 애니메이션 */}
      <Lesson1_ConditionalRendering />

      {/* 강의 2: 레이아웃 전환 애니메이션 */}
      <Lesson2_LayoutTransition />

      {/* 강의 3: 리스트 애니메이션 */}
      <Lesson3_ListAnimation />

      {/* 강의 4: 모달 애니메이션 */}
      <Lesson4_ModalAnimation />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>AnimatePresence</strong>: 컴포넌트 제거 시 exit 애니메이션을 가능하게 합니다
          </li>
          <li>
            • <strong>exit</strong>: 컴포넌트가 DOM에서 제거될 때 실행될 애니메이션을 정의합니다
          </li>
          <li>
            • <strong>mode="wait"</strong>: 이전 컴포넌트가 완전히 사라진 후 새 컴포넌트를 나타냅니다
          </li>
          <li>
            • <strong>고유한 key</strong>: AnimatePresence가 어떤 컴포넌트가 추가/제거되었는지 추적하는데 필요합니다
          </li>
          <li>• 조건부 렌더링, 리스트, 모달 등 다양한 UI 패턴에서 활용 가능합니다</li>
        </ul>
      </div>
    </div>
  );
}
