"use client";

import { motion } from "motion/react";

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
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 2: Interactive Motion
        </h2>
        <p className="text-gray-600">
          사용자와 상호작용하는 애니메이션을 직접 구현해보세요
        </p>
      </div>

      {/* 실습 1: 호버 효과 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 호버 효과
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 마우스를 올렸을 때 크기가 1.2배 커지고 색상이 변하는 버튼을
          만들어보세요
        </p>

        <div className="flex justify-center space-x-4">
          {/* TODO: whileHover 속성 추가 */}
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium">
            Hover Me!
            {/* 힌트: whileHover={{ scale: ?, backgroundColor: ? }} */}
          </button>

          {/* TODO: 회전 효과가 있는 호버 버튼 만들기 */}
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium">
            Rotate on Hover
            {/* 힌트: whileHover={{ rotate: ? }} */}
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 호버 효과를 추가해보세요
<motion.button
  whileHover={{ 
    scale: ?,
    backgroundColor: "?",
    rotate: ?
  }}
  transition={{ type: "spring", stiffness: ? }}
>`}
          </code>
        </div>
      </div>

      {/* 실습 2: 클릭/탭 효과 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 클릭/탭 효과
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 클릭할 때 눌리는 효과(scale 감소)와 함께 색상이 변하는 버튼을
          만들어보세요
        </p>

        <div className="flex justify-center space-x-4">
          {/* TODO: whileTap 속성 추가 */}
          <button className="px-8 py-4 bg-purple-500 text-white rounded-xl font-bold">
            Press Me!
            {/* 힌트: whileTap={{ scale: ? }} */}
          </button>

          {/* TODO: 호버 + 탭 효과 조합 */}
          <button className="px-8 py-4 bg-orange-500 text-white rounded-xl font-bold">
            Hover + Tap
            {/* 힌트: whileHover와 whileTap 모두 사용 */}
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 클릭 효과를 추가해보세요
<motion.button
  whileHover={{ /* 호버 효과 */ }}
  whileTap={{ 
    scale: ?,
    backgroundColor: "?"
  }}
  transition={{ type: "spring" }}
>`}
          </code>
        </div>
      </div>

      {/* 실습 3: 포커스 효과 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 3: 포커스 효과
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 포커스될 때 테두리가 강조되고 약간 커지는 입력 필드를
          만들어보세요
        </p>

        <div className="max-w-md mx-auto space-y-4">
          {/* TODO: whileFocus 속성 추가 */}
          <input
            type="text"
            placeholder="클릭하여 포커스해보세요"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none"
            // 힌트: whileFocus={{ scale: ?, borderColor: ? }}
          />

          {/* TODO: 텍스트 영역에도 포커스 효과 추가 */}
          <textarea
            placeholder="텍스트 영역 포커스 효과"
            rows={3}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none resize-none"
            // 힌트: whileFocus와 transition 추가
          />
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 포커스 효과를 추가해보세요
<motion.input
  whileFocus={{ 
    scale: ?,
    borderColor: "?",
    boxShadow: "?"
  }}
  transition={{ duration: ? }}
>`}
          </code>
        </div>
      </div>

      {/* 실습 4: 드래그 기능 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 4: 드래그 기능
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 드래그할 수 있는 요소를 만들고, 드래그 중일 때 크기가 커지도록
          해보세요
        </p>

        <div className="h-48 bg-gray-100 rounded-lg relative flex items-center justify-center">
          {/* TODO: drag와 whileDrag 속성 추가 */}
          <div className="w-16 h-16 bg-red-500 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold">
            🔴
            {/* 힌트: drag="x" 또는 drag={true}, whileDrag={{ scale: ? }} */}
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 드래그 기능을 추가해보세요
<motion.div
  drag={?}
  whileDrag={{ scale: ? }}
  dragConstraints={{ 
    left: ?, right: ?, 
    top: ?, bottom: ? 
  }}
>`}
          </code>
        </div>
      </div>

      {/* 실습 5: 복합 인터랙션 카드 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 5: 복합 인터랙션 카드 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 호버, 클릭, 드래그 효과를 모두 가진 인터랙티브 카드를
          만들어보세요
        </p>

        <div className="flex justify-center">
          {/* TODO: 모든 인터랙션 효과 추가 */}
          <div className="w-64 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl cursor-pointer p-6 text-white">
            <h4 className="text-xl font-bold mb-2">Interactive Card</h4>
            <p className="text-blue-100">호버, 클릭, 드래그 해보세요!</p>
            {/* 힌트: whileHover, whileTap, drag, whileDrag 모두 사용 */}
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 모든 인터랙션을 조합해보세요
<motion.div
  whileHover={{ 
    scale: ?,
    boxShadow: "?",
    y: ?
  }}
  whileTap={{ scale: ? }}
  drag={?}
  whileDrag={{ 
    scale: ?,
    rotate: ?
  }}
  dragConstraints={{ ... }}
>`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-green-700 space-y-2">
          <li>• 버튼 클릭 시 리플 효과 만들기</li>
          <li>• 마우스 위치에 따라 카드가 기울어지는 효과</li>
          <li>• 드래그 거리에 따라 투명도가 변하는 효과</li>
          <li>• 여러 요소가 연쇄적으로 반응하는 인터랙션</li>
          <li>• 스프링 애니메이션으로 자연스러운 움직임 구현</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>인터랙션 속성:</strong> whileHover, whileTap, whileFocus,
            whileDrag
          </p>
          <p>
            <strong>드래그 옵션:</strong> drag, dragConstraints, dragElastic
          </p>
          <p>
            <strong>트랜지션 타입:</strong> spring, tween, just
          </p>
          <p>
            <strong>스프링 설정:</strong> stiffness, damping, mass
          </p>
        </div>
      </div>
    </div>
  );
}
