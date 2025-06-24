"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * 🔥 실습: 모달 애니메이션
 *
 * 목표: AnimatePresence를 사용해서 모달 창이 부드럽게 나타나고 사라지는 애니메이션을 만드세요.
 *
 * 요구사항:
 * 1. AnimatePresence를 사용해서 모달이 사라질 때도 애니메이션 적용
 * 2. 배경 오버레이: opacity 0 → 1 → 0
 * 3. 모달 컨테이너: scale + y 이동 애니메이션
 * 4. 스프링 애니메이션 사용해서 자연스러운 효과
 */

export default function ModalAnimationLiveCoding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">🎯 실습: 모달 애니메이션</h3>
        <p className="text-green-700 text-sm">
          AnimatePresence를 사용해서 모달 창이 부드럽게 나타나고 사라지는 애니메이션을 만들어보세요.
        </p>
      </div>

      <div className="space-y-4 flex items-center justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          모달 열기
        </button>

        {/* 
        TODO: 여기에 AnimatePresence와 motion.div를 사용해서 모달 애니메이션을 구현하세요
        
        힌트:
        1. AnimatePresence import 추가하기
        2. AnimatePresence로 조건부 렌더링 감싸기
        3. 배경 오버레이와 모달 컨테이너 구분하기
        4. initial, animate, exit 애니메이션 설정
        5. transition에서 스프링 효과 사용하기
        */}

        {/* 현재는 AnimatePresence 없이 모달이 갑자기 나타나고 사라집니다 */}
        {isModalOpen && (
          <>
            {/* 배경 오버레이 */}
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsModalOpen(false)} />
            {/* 모달 컨테이너 */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-2xl z-50 w-80">
              <h3 className="text-lg font-semibold mb-4">연습용 모달</h3>
              <p className="text-gray-600 mb-4">AnimatePresence를 사용해서 이 모달에 애니메이션을 적용해보세요!</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                닫기
              </button>
            </div>
          </>
        )}
      </div>

      {/* 코딩 힌트 */}
      <div className="bg-orange-100 border border-orange-200 rounded p-4">
        <h5 className="font-semibold text-orange-800 mb-3">💡 구현해야 할 내용</h5>
        <div className="space-y-3 text-orange-700 text-sm">
          <div>
            <strong>1단계:</strong> AnimatePresence import 및 설정
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isModalOpen && (
    <>
      {/* 배경 오버레이와 모달 컨테이너 */}
    </>
  )}
</AnimatePresence>`}
            </code>
          </div>

          <div>
            <strong>2단계:</strong> 배경 오버레이 애니메이션
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/50 z-40"
  onClick={() => setIsModalOpen(false)}
/>`}
            </code>
          </div>

          <div>
            <strong>3단계:</strong> 모달 컨테이너 scale + y 애니메이션
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`initial={{ opacity: 0, scale: 0.8, y: 50 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.8, y: 50 }}
transition={{ type: "spring", damping: 25, stiffness: 300 }}`}
            </code>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">🔥 추가 챌린지</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• 배경 오버레이 클릭 시 모달이 닫히도록 하기</li>
          <li>• ESC 키를 눌러도 모달이 닫히도록 하기</li>
          <li>• 모달이 열릴 때 포커스 트랩 구현하기</li>
          <li>• 모달 내부를 클릭해도 닫히지 않도록 하기</li>
        </ul>
      </div>
    </div>
  );
}
