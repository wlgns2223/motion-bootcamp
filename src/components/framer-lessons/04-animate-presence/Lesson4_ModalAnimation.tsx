"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ModalAnimationLiveCoding from "../../live-coding/ModalAnimationLiveCoding";

// 강의 4: 모달 애니메이션
export default function Lesson4_ModalAnimation() {
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
