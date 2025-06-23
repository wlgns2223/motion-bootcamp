"use client";

import { motion } from "motion/react";
import { useState } from "react";
import HoverEffectsLiveCoding from "../live-coding/HoverEffectsLiveCoding";
import TapEffectsLiveCoding from "../live-coding/TapEffectsLiveCoding";
import CombinedInteractionsLiveCoding from "../live-coding/CombinedInteractionsLiveCoding";

/**
 * 🎥 Lesson 2: Interactive Motion (통합 강의)
 *
 * 핵심 개념:
 * 1. whileHover - 마우스 호버 시 애니메이션
 * 2. whileTap - 클릭/터치 시 애니메이션
 * 3. whileFocus - 포커스 시 애니메이션
 * 4. 다양한 transition 타입 (spring, tween)
 */

export default function InteractiveMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 2: Interactive Motion</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          사용자 상호작용에 반응하는 애니메이션을 배워보세요. 강사와 함께 whileHover, whileTap 등을 이용해 인터랙티브한
          UI를 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Hover 애니메이션 */}
      <Lesson1_HoverEffects />

      {/* 강의 2: Tap 애니메이션 */}
      <Lesson2_TapEffects />

      {/* 강의 3: 복합 인터랙션 */}
      <Lesson3_CombinedInteractions />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>whileHover</strong>: 마우스 호버 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>whileTap</strong>: 클릭/터치 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>whileFocus</strong>: 포커스 시 애니메이션을 실행합니다
          </li>
          <li>
            • <strong>transition</strong>: spring, tween 등 다양한 타입으로 애니메이션 조절
          </li>
          <li>• 상호작용 시 적절한 피드백을 제공하여 사용자 경험을 향상시킵니다</li>
        </ul>
      </div>
    </div>
  );
}

// 강의 1: Hover 애니메이션
function Lesson1_HoverEffects() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Hover 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Scale
          </motion.div>

          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Rotate
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-24 h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Lift
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileHover={{ scale: 1.1 }}
whileHover={{ rotate: 15 }}
whileHover={{ y: -10 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 생성</li>
          <li>2단계: whileHover 속성 추가</li>
          <li>3단계: cursor-pointer 클래스 추가</li>
          <li>4단계: transition으로 애니메이션 세밀 조정</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <HoverEffectsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 설정</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  whileHover={{ scale: 1.1 }}
  className="... cursor-pointer">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 세밀 조정</h5>
          <code className="text-sm text-gray-600">
            {`transition={{ 
  type: "spring", 
  stiffness: 300 
}}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: Tap 애니메이션
function Lesson2_TapEffects() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Tap 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold"
          >
            Button
          </motion.button>

          <motion.div
            whileTap={{ scale: 0.95, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Tap
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileTap={{ scale: 0.9 }}
whileTap={{ scale: 0.95, rotate: 5 }}
whileHover={{ scale: 1.05 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: motion.button 또는 motion.div로 구조 생성</li>
          <li>2단계: whileTap 속성으로 클릭 시 애니메이션 정의</li>
          <li>3단계: whileHover와 조합해서 더 풍부한 상호작용 제공</li>
          <li>4단계: 적절한 크기 조절로 눌린 느낌 표현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <TapEffectsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 클릭 반응</h5>
          <code className="text-sm text-gray-600">
            {`<motion.button
  whileTap={{ scale: 0.9 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 조합 효과</h5>
          <code className="text-sm text-gray-600">
            {`whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95, rotate: 5 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: 복합 인터랙션
function Lesson3_CombinedInteractions() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 복합 인터랙션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer max-w-xs"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Interactive Card</h4>
            <p className="text-gray-600 text-sm">Hover and click to see the magic!</p>
          </motion.div>

          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isLiked ? 0 : 0 }}
            className={`text-3xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
          >
            ❤️
          </motion.button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileHover={{ scale: 1.05, rotate: 2 }}
whileTap={{ scale: 0.95 }}
onClick={() => setIsLiked(!isLiked)}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: 카드형 motion.div 구조 생성</li>
          <li>2단계: whileHover로 호버 시 상호작용 추가</li>
          <li>3단계: whileTap으로 클릭 피드백 추가</li>
          <li>4단계: 상태 변경과 애니메이션 조합</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <CombinedInteractionsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 카드 기본</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  whileHover={{ 
    scale: 1.05, 
    rotate: 2 
  }}
  className="p-6 bg-white rounded-xl">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 연동</h5>
          <code className="text-sm text-gray-600">
            {`whileTap={{ scale: 0.95 }}
onClick={() => setIsLiked(!isLiked)}
animate={{ ... }}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ Hover 애니메이션 구현</li>
          <li>□ Tap/Click 애니메이션 구현</li>
          <li>□ 버튼 피드백 효과</li>
          <li>□ 카드 상호작용</li>
          <li>□ 상태와 애니메이션 조합</li>
        </ul>
      </div>
    </div>
  );
}
