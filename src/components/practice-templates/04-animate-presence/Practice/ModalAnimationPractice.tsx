"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * 🔥 실습 4: 모달 애니메이션
 *
 * 목표: 모달이 열리고 닫힐 때 부드러운 애니메이션을 만드세요.
 *
 * 요구사항:
 * 1. AnimatePresence를 사용해서 모달과 백드롭 모두에 애니메이션 적용
 * 2. 백드롭: opacity 0 → 1 (나타날 때), opacity 1 → 0 (사라질 때)
 * 3. 모달: scale: 0.8, opacity: 0 → scale: 1, opacity: 1 (나타날 때)
 * 4. 모달: scale: 0.8, opacity: 0 (사라질 때)
 * 5. 백드롭을 클릭했을 때도 모달이 닫히도록 구현하세요
 */

export default function ModalAnimationPractice() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="space-y-6">
      <div className="bg-pink-50 border-l-4 border-pink-400 p-4">
        <h3 className="text-lg font-semibold text-pink-800 mb-2">🎯 실습 4: 모달 애니메이션</h3>
        <p className="text-pink-700 text-sm">모달이 열리고 닫힐 때 부드러운 애니메이션을 만들어보세요.</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={openModal}
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          모달 열기
        </button>

        {/* 
        TODO: 여기에 AnimatePresence와 motion.div를 사용해서 모달 애니메이션을 구현하세요
        
        힌트:
        1. AnimatePresence로 조건부 렌더링 감싸기
        2. 백드롭(배경)과 모달 모두 motion.div로 만들기
        3. 백드롭: fixed inset-0, bg-black bg-opacity-50
        4. 모달: 가운데 정렬, 흰색 배경, 그림자
        5. 백드롭 클릭 시 closeModal 호출
        */}

        {/* 현재는 애니메이션 없이 바로 나타나고 사라집니다 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 m-4 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">모달 제목</h3>
              <p className="text-gray-600 mb-6">
                이것은 모달 콘텐츠입니다. 여기에 원하는 내용을 넣을 수 있습니다. AnimatePresence를 사용해서 부드러운
                애니메이션을 만들어보세요.
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
            </div>
          </div>
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 힌트</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• AnimatePresence로 전체 모달을 감싸세요</li>
          <li>• 백드롭과 모달 콘텐츠를 각각 motion.div로 만드세요</li>
          <li>• 백드롭에 onClick을 추가하되, 모달 콘텐츠에는 클릭 이벤트 전파를 막으세요</li>
          <li>• scale과 opacity를 함께 사용해서 자연스러운 효과를 만드세요</li>
        </ul>
      </div>
    </div>
  );
}
