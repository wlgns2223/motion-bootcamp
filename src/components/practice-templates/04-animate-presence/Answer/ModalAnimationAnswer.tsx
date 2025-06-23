"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ✅ 정답: 모달 애니메이션
 */

export default function ModalAnimationAnswer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">✅ 정답: 모달 애니메이션</h3>
        <p className="text-green-700 text-sm">모달이 열리고 닫힐 때 부드러운 애니메이션이 적용됩니다.</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          모달 열기
        </button>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-md w-full"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">모달 제목</h3>
                <p className="text-gray-600 mb-6">
                  이것은 모달 콘텐츠입니다. 여기에 원하는 내용을 넣을 수 있습니다. AnimatePresence를 사용해서 부드러운
                  애니메이션을 만들었습니다.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    취소
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    확인
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🔧 구현 포인트</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>
            • <code>AnimatePresence</code>로 전체 모달을 감쌌습니다
          </li>
          <li>
            • 백드롭과 모달 콘텐츠를 각각 <code>motion.div</code>로 만들었습니다
          </li>
          <li>• 백드롭 클릭 시 모달이 닫히고, 모달 콘텐츠 클릭 시에는 이벤트 전파가 중단됩니다</li>
          <li>
            • <code>scale</code>과 <code>opacity</code>를 함께 사용해서 자연스러운 효과를 만들었습니다
          </li>
        </ul>
      </div>
    </div>
  );
}
