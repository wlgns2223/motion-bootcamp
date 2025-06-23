"use client";

import { motion } from "motion/react";
import FadeInLiveCoding from "../live-coding/FadeInLiveCoding";
import SlideInLiveCoding from "../live-coding/SlideInLiveCoding";
import ScaleLiveCoding from "../live-coding/ScaleLiveCoding";
import CombinedLiveCoding from "../live-coding/CombinedLiveCoding";

/**
 * 🎥 Lesson 1: Basic Motion Component (통합 강의)
 *
 * 핵심 개념:
 * 1. motion.div - 일반 HTML 요소를 애니메이션 가능한 요소로 변환
 * 2. initial - 컴포넌트의 초기 상태 설정
 * 3. animate - 애니메이션될 최종 상태 설정
 * 4. transition - 애니메이션의 지속시간, 지연시간, 이징 등 설정
 */

export default function BasicMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 1: Basic Motion Component</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          motion 컴포넌트의 기본 사용법을 배워보세요. 강사와 함께 initial, animate, transition 속성을 이용해 기본
          애니메이션을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Fade In 애니메이션 */}
      <Lesson1_FadeIn />

      {/* 강의 2: Slide In 애니메이션 */}
      <Lesson2_SlideIn />

      {/* 강의 3: Scale 애니메이션 */}
      <Lesson3_Scale />

      {/* 강의 4: 복합 애니메이션 */}
      <Lesson4_Combined />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>motion.div</strong>: 일반 HTML 요소를 애니메이션 가능하게 만듭니다
          </li>
          <li>
            • <strong>initial</strong>: 컴포넌트가 처음 렌더링될 때의 상태를 정의합니다
          </li>
          <li>
            • <strong>animate</strong>: 애니메이션이 완료되었을 때의 최종 상태를 정의합니다
          </li>
          <li>
            • <strong>transition</strong>: 애니메이션의 duration, delay, ease 등을 설정합니다
          </li>
          <li>• 여러 속성을 동시에 애니메이션할 수 있습니다 (opacity, x, y, scale, rotate 등)</li>
        </ul>
      </div>
    </div>
  );
}

// 강의 1: Fade In 애니메이션
function Lesson1_FadeIn() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Fade In 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Fade In
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: 일반 div를 motion.div로 변경</li>
          <li>2단계: initial 속성으로 시작 상태 설정</li>
          <li>3단계: animate 속성으로 최종 상태 정의</li>
          <li>4단계: transition으로 애니메이션 시간 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <FadeInLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 구조</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  initial={{ opacity: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ opacity: 1 }}
transition={{ duration: 1 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: Slide In 애니메이션
function Lesson2_SlideIn() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Slide In 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Slide In
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 설정</li>
          <li>2단계: initial로 시작 위치와 투명도 설정</li>
          <li>3단계: animate로 최종 위치와 투명도 정의</li>
          <li>4단계: transition으로 애니메이션 시간 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SlideInLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 시작 상태</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  initial={{ x: -100, opacity: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 최종 상태</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: Scale 애니메이션
function Lesson3_Scale() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Scale 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Scale
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ type: "spring", stiffness: 300 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 생성</li>
          <li>2단계: initial로 scale: 0 설정 (완전히 작은 상태)</li>
          <li>3단계: animate로 scale: 1 설정 (원래 크기)</li>
          <li>4단계: spring transition으로 탄성 효과 추가</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ScaleLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 설정</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  initial={{ scale: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3단계: 애니메이션</h5>
          <code className="text-sm text-gray-600">{`animate={{ scale: 1 }}`}</code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">4단계: Spring 효과</h5>
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

// 강의 4: 복합 애니메이션
function Lesson4_Combined() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: 복합 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">✨ 완성된 예제</h4>
        <div className="flex justify-center space-x-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 1
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-24 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-24 bg-orange-700 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 3
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// 순차적 복합 애니메이션
initial={{ opacity: 0, x: -50, scale: 0.8 }}
animate={{ opacity: 1, x: 0, scale: 1 }}
transition={{ delay: 0/0.2/0.4, duration: 0.6 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-orange-700 space-y-1 text-sm">
          <li>1단계: 여러 개의 motion.div 생성</li>
          <li>2단계: 각각에 복합 initial 상태 설정 (opacity, x, scale)</li>
          <li>3단계: 동일한 animate 상태로 설정</li>
          <li>4단계: delay를 다르게 해서 순차적 애니메이션 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <CombinedLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 복합 상태</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  initial={{ 
    opacity: 0, 
    x: -50, 
    scale: 0.8 
  }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 순차 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ 
  opacity: 1, 
  x: 0, 
  scale: 1 
}}
transition={{ 
  delay: 0/0.2/0.4,
  duration: 0.6 
}}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ Fade In 애니메이션 구현</li>
          <li>□ Slide In 애니메이션 구현</li>
          <li>□ Scale 애니메이션 구현</li>
          <li>□ 복합 애니메이션 구현</li>
          <li>□ delay를 활용한 순차적 애니메이션</li>
        </ul>
      </div>
    </div>
  );
}
