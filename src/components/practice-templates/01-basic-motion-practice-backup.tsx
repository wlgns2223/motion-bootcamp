"use client";

// Answer Components
import FadeInAnswer from "./01-basic-motion/Answer/FadeInAnswer";
import SlideInAnswer from "./01-basic-motion/Answer/SlideInAnswer";
import ScaleAnswer from "./01-basic-motion/Answer/ScaleAnswer";
import RotateAnswer from "./01-basic-motion/Answer/RotateAnswer";
import CombinedAnswer from "./01-basic-motion/Answer/CombinedAnswer";

// Practice Components
import FadeInPractice from "./01-basic-motion/Practice/FadeInPractice";
import SlideInPractice from "./01-basic-motion/Practice/SlideInPractice";
import ScalePractice from "./01-basic-motion/Practice/ScalePractice";
import RotatePractice from "./01-basic-motion/Practice/RotatePractice";
import CombinedPractice from "./01-basic-motion/Practice/CombinedPractice";

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
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Basic Motion 실습</h1>

      <div className="space-y-12">
        {/* 1. 페이드 인 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 페이드 인 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <FadeInAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <FadeInPractice />
            </div>
          </div>
        </div>

        {/* 2. 슬라이드 인 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 슬라이드 인 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <SlideInAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <SlideInPractice />
            </div>
          </div>
        </div>

        {/* 3. 스케일 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 스케일 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ScaleAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ScalePractice />
            </div>
          </div>
        </div>

        {/* 4. 회전 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 4. 회전 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <RotateAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <RotatePractice />
            </div>
          </div>
        </div>

        {/* 5. 복합 애니메이션 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 5. 복합 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <CombinedAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <CombinedPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> 위의 애니메이션들을 다른 방향이나 속도로 변경해보세요
          </p>
          <p>
            <strong>중급:</strong> 여러 요소가 연속으로 나타나는 애니메이션을 만들어보세요
          </p>
          <p>
            <strong>고급:</strong> 사용자 인터랙션(클릭, 호버)에 반응하는 애니메이션을 추가해보세요
          </p>
        </div>
      </div>
    </div>
  );
}
