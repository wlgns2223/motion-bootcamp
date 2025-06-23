"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ConditionalRenderingLiveCoding from "../live-coding/ConditionalRenderingLiveCoding";
import LayoutTransitionLiveCoding from "../live-coding/LayoutTransitionLiveCoding";
import ListAnimationLiveCoding from "../live-coding/ListAnimationLiveCoding";
import ModalAnimationLiveCoding from "../live-coding/ModalAnimationLiveCoding";

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
            • <strong>mode</strong>: sync(동시), wait(순차), popLayout(레이아웃 팝) 모드를 설정합니다
          </li>
          <li>
            • <strong>key</strong>: 각 컴포넌트를 고유하게 식별하여 애니메이션을 적용합니다
          </li>
          <li>• 모달, 토글, 리스트 아이템 등 동적 UI에 필수적인 기능입니다</li>
        </ul>
      </div>
    </div>
  );
}

// 강의 1: 조건부 렌더링 애니메이션
function Lesson1_ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 조건부 렌더링 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isVisible ? "Hide" : "Show"} Element
          </button>
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
                >
                  Hello!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    />
  )}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: AnimatePresence로 조건부 렌더링 영역 감싸기</li>
          <li>2단계: motion.div에 initial, animate 속성 추가</li>
          <li>3단계: exit 속성으로 제거 애니메이션 정의</li>
          <li>4단계: 조건부 렌더링과 상태 토글 버튼 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ConditionalRenderingLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 구조</h5>
          <code className="text-sm text-gray-600">
            {`<AnimatePresence>
  {condition && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  )}
</AnimatePresence>`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: Exit 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`exit={{ opacity: 0, scale: 0.8 }}
transition={{ duration: 0.3 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: 레이아웃 전환 애니메이션
function Lesson2_LayoutTransition() {
  const [currentView, setCurrentView] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: 레이아웃 전환 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setCurrentView("grid")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === "grid" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setCurrentView("list")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentView === "list" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            >
              List View
            </button>
          </div>
          <AnimatePresence mode="wait">
            {currentView === "grid" ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-2"
              >
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-16 h-16 bg-green-400 rounded flex items-center justify-center text-white font-bold"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2"
              >
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-32 h-8 bg-green-400 rounded flex items-center justify-center text-white font-bold"
                  >
                    Item {item}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence mode="wait">
  {currentView === 'grid' ? (
    <motion.div key="grid" exit={{ x: -100 }} />
  ) : (
    <motion.div key="list" exit={{ x: -100 }} />
  )}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: AnimatePresence에 mode="wait" 속성 추가</li>
          <li>2단계: 각 레이아웃에 고유한 key 값 설정</li>
          <li>3단계: 슬라이드 전환을 위한 x축 애니메이션 설정</li>
          <li>4단계: 상태 기반 조건부 렌더링 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <LayoutTransitionLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Mode와 Key</h5>
          <code className="text-sm text-gray-600">
            {`<AnimatePresence mode="wait">
  <motion.div key="unique-key" />
</AnimatePresence>`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 슬라이드 전환</h5>
          <code className="text-sm text-gray-600">
            {`initial={{ x: 100 }}
animate={{ x: 0 }}
exit={{ x: -100 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: 리스트 애니메이션
function Lesson3_ListAnimation() {
  const [items, setItems] = useState([1, 2, 3]);
  const [nextId, setNextId] = useState(4);

  const addItem = () => {
    setItems([...items, nextId]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 리스트 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <button
            onClick={addItem}
            className="mb-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Add Item
          </button>
          <div className="flex flex-wrap gap-2 justify-center min-h-[60px] items-center">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-400 text-white rounded-lg cursor-pointer hover:bg-purple-500"
                  onClick={() => removeItem(item)}
                >
                  <span>Item {item}</span>
                  <span className="text-xs">×</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <p className="text-sm text-gray-600 mt-2">클릭하여 아이템을 제거하세요</p>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence>
  {items.map(item => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    />
  ))}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: 리스트 상태와 추가/제거 함수 구현</li>
          <li>2단계: map 함수로 리스트 렌더링</li>
          <li>3단계: 각 아이템에 고유한 key 설정</li>
          <li>4단계: scale 기반 나타남/사라짐 애니메이션</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ListAnimationLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 리스트 관리</h5>
          <code className="text-sm text-gray-600">
            {`const [items, setItems] = useState([1,2,3]);
{items.map(item => (
  <motion.div key={item} />
))}`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: Scale 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`initial={{ scale: 0 }}
animate={{ scale: 1 }}
exit={{ scale: 0 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 4: 모달 애니메이션
function Lesson4_ModalAnimation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: 모달 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Open Modal
          </button>

          <AnimatePresence>
            {isModalOpen && (
              <>
                {/* 배경 오버레이 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsModalOpen(false)}
                />
                {/* 모달 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-2xl z-50 w-80"
                >
                  <h3 className="text-lg font-semibold mb-4">Example Modal</h3>
                  <p className="text-gray-600 mb-4">이것은 AnimatePresence를 사용한 모달 애니메이션 예제입니다.</p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence>
  {isOpen && (
    <>
      <motion.div /* 오버레이 */
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      />
      <motion.div /* 모달 */
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
      />
    </>
  )}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-orange-700 space-y-1 text-sm">
          <li>1단계: 모달 상태와 열기/닫기 함수 구현</li>
          <li>2단계: 배경 오버레이와 모달 컨테이너 구조 생성</li>
          <li>3단계: 각각에 다른 애니메이션 효과 적용</li>
          <li>4단계: Spring transition으로 자연스러운 모달 등장</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ModalAnimationLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 모달 구조</h5>
          <code className="text-sm text-gray-600">
            {`{isOpen && (
  <>
    <motion.div /* 오버레이 */ />
    <motion.div /* 모달 */ />
  </>
)}`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 모달 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`initial={{ scale: 0.8, y: 50 }}
animate={{ scale: 1, y: 0 }}
transition={{ type: "spring" }}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ 조건부 렌더링 애니메이션</li>
          <li>□ mode="wait"를 활용한 레이아웃 전환</li>
          <li>□ 리스트 아이템 추가/제거 애니메이션</li>
          <li>□ 모달과 오버레이 애니메이션</li>
          <li>□ 고유한 key를 사용한 컴포넌트 식별</li>
        </ul>
      </div>
    </div>
  );
}
