"use client";

import { motion } from "motion/react";

/**
 * 실습 1: Basic Motion Component
 *
 * 목표: motion 컴포넌트의 기본 사용법을 익히고 다양한 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 페이드 인 애니메이션 만들기
 * 2. 슬라이드 인 애니메이션 만들기
 * 3. 스케일 애니메이션 만들기
 * 4. 회전 애니메이션 만들기
 * 5. 여러 속성을 조합한 복합 애니메이션 만들기
 */

export default function BasicMotionPractice() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 1: Basic Motion Component
        </h2>
        <p className="text-gray-600">
          아래의 TODO를 완성하여 다양한 애니메이션을 구현해보세요
        </p>
      </div>

      {/* 실습 1: 페이드 인 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 페이드 인 애니메이션
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 투명도 0에서 1로 변하는 애니메이션을 만들어보세요 (duration:
          1초)
        </p>

        {/* TODO: 아래 div를 motion.div로 변경하고 애니메이션 추가 */}
        <div className="w-32 h-32 bg-blue-500 rounded-lg mx-auto">
          {/* 힌트: initial={{ opacity: ? }}, animate={{ opacity: ? }}, transition={{ duration: ? }} */}
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// 여기에 완성한 코드를 작성해보세요
<motion.div
  initial={{ /* TODO */ }}
  animate={{ /* TODO */ }}
  transition={{ /* TODO */ }}
  className="w-32 h-32 bg-blue-500 rounded-lg mx-auto"
/>`}
          </code>
        </div>
      </div>

      {/* 실습 2: 슬라이드 인 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 슬라이드 인 애니메이션
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 왼쪽에서 오른쪽으로 슬라이드하며 나타나는 애니메이션을
          만들어보세요
        </p>

        {/* TODO: 아래 요소에 x축 이동 애니메이션 추가 */}
        <div className="w-32 h-16 bg-green-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold">
          Slide Me!
          {/* 힌트: initial={{ x: ? }}, animate={{ x: ? }} */}
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 완성해보세요
<motion.div
  initial={{ x: /* 시작 위치 */ }}
  animate={{ x: /* 끝 위치 */ }}
  transition={{ /* 애니메이션 설정 */ }}
>`}
          </code>
        </div>
      </div>

      {/* 실습 3: 스케일 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 3: 스케일 애니메이션
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 작은 크기에서 시작해서 원래 크기로 커지는 애니메이션을
          만들어보세요
        </p>

        {/* TODO: 스케일 애니메이션 추가 */}
        <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto">
          {/* 힌트: scale 속성 사용 */}
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: scale 애니메이션을 추가해보세요
initial={{ scale: ? }}
animate={{ scale: ? }}`}
          </code>
        </div>
      </div>

      {/* 실습 4: 회전 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 4: 회전 애니메이션
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 360도 회전하는 애니메이션을 만들어보세요 (무한 반복)
        </p>

        {/* TODO: 회전 애니메이션 추가 */}
        <div
          className="w-16 h-16 bg-orange-500 mx-auto"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        >
          {/* 힌트: rotate 속성과 repeat: Infinity 사용 */}
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 무한 회전 애니메이션을 만들어보세요
animate={{ rotate: ? }}
transition={{ 
  duration: ?, 
  repeat: ?,
  ease: "linear" 
}}`}
          </code>
        </div>
      </div>

      {/* 실습 5: 복합 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 5: 복합 애니메이션 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 페이드인 + 슬라이드 + 스케일을 조합한 복합 애니메이션을
          만들어보세요
        </p>

        {/* TODO: 여러 속성을 조합한 애니메이션 추가 */}
        <div className="w-40 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold">
          🎉 복합 애니메이션
          {/* 힌트: opacity, x, scale, rotate 등을 모두 사용해보세요 */}
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 창의적인 복합 애니메이션을 만들어보세요
<motion.div
  initial={{ 
    opacity: ?,
    x: ?,
    scale: ?,
    rotate: ?
  }}
  animate={{ 
    opacity: ?,
    x: ?,
    scale: ?,
    rotate: ?
  }}
  transition={{ 
    duration: ?,
    delay: ?,
    ease: "easeOut"
  }}
>`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• 키프레임 애니메이션 만들기 (배열 사용)</li>
          <li>• 지연 시간(delay)을 활용한 순차 애니메이션</li>
          <li>• 다양한 easing 함수 실험해보기</li>
          <li>• 애니메이션 완료 후 콜백 함수 활용하기</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>기본 속성:</strong> opacity, x, y, scale, rotate
          </p>
          <p>
            <strong>Transition 옵션:</strong> duration, delay, ease, repeat
          </p>
          <p>
            <strong>Easing 함수:</strong> "linear", "easeIn", "easeOut",
            "easeInOut"
          </p>
          <p>
            <strong>키프레임:</strong> animate=&#123;&#123; x: [0, 100, 0]
            &#125;&#125;
          </p>
        </div>
      </div>
    </div>
  );
}
