"use client";

import React from "react";
import { motion, useScroll, useTransform, useAnimation } from "motion/react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import ScrollProgressAnswer from "./07-advanced-transforms/Answer/ScrollProgressAnswer";
import ScrollProgressPractice from "./07-advanced-transforms/Practice/ScrollProgressPractice";
import ScrollTriggeredAnswer from "./07-advanced-transforms/Answer/ScrollTriggeredAnswer";
import ScrollTriggeredPractice from "./07-advanced-transforms/Practice/ScrollTriggeredPractice";
import ParallaxAnswer from "./07-advanced-transforms/Answer/ParallaxAnswer";
import ParallaxPractice from "./07-advanced-transforms/Practice/ParallaxPractice";
import ScrollTriggeredStaggerAnswer from "./07-advanced-transforms/Answer/ScrollTriggeredStaggerAnswer";
import ScrollTriggeredStaggerPractice from "./07-advanced-transforms/Practice/ScrollTriggeredStaggerPractice";
import ScrollLinkedAnswer from "./07-advanced-transforms/Answer/ScrollLinkedAnswer";
import ScrollLinkedPractice from "./07-advanced-transforms/Practice/ScrollLinkedPractice";
import UseInViewAnswer from "./07-advanced-transforms/Answer/UseInViewAnswer";
import UseInViewPractice from "./07-advanced-transforms/Practice/UseInViewPractice";

/**
 * 실습 7: Advanced Transforms & Scroll
 *
 * 목표: 스크롤 기반 고급 변환 애니메이션을 마스터해보세요
 *
 * 실습 과제:
 * 1. 스크롤 프로그레스 인디케이터 만들기
 * 2. 스크롤 트리거 애니메이션 (Intersection Observer)
 * 3. 패럴랙스 스크롤 효과
 * 4. 스크롤 트리거드: 스테거 애니메이션
 * 5. 스크롤 링크드 애니메이션
 * 6. useInView 훅 활용한 스크롤 트리거드 애니메이션
 */

export default function AdvancedTransformsPractice() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">7. Advanced Transforms & Scroll 실습</h1>

      <div className="space-y-12">
        {/* 1. 스크롤 프로그레스 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 스크롤 프로그레스</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ScrollProgressAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ScrollProgressPractice />
            </div>
          </div>
        </div>

        {/* 2. 스크롤 트리거 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 스크롤 트리거 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ScrollTriggeredAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ScrollTriggeredPractice />
            </div>
          </div>
        </div>

        {/* 3. 패럴랙스 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 패럴랙스 효과</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ParallaxAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ParallaxPractice />
            </div>
          </div>
        </div>

        {/* 4. 스크롤 트리거드 스테거 애니메이션 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">🎯 4. 스크롤 트리거드: 스테거 애니메이션</h2>
          <p className="text-center text-gray-600 mb-6">
            스크롤 위치에 따라 여러 요소가 순차적으로 나타나는 애니메이션
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ScrollTriggeredStaggerAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ScrollTriggeredStaggerPractice />
            </div>
          </div>
        </div>

        {/* 5. 스크롤 링크드 애니메이션 (Continuous) */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">🔗 5. 스크롤 링크드 애니메이션</h2>
          <p className="text-center text-gray-600 mb-6">스크롤 위치에 연속적으로 연결된 애니메이션</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ScrollLinkedAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ScrollLinkedPractice />
            </div>
          </div>
        </div>

        {/* 6. useInView 훅 활용 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">🎯 6. useInView 훅 활용</h2>
          <p className="text-center text-gray-600 mb-6">
            Framer Motion의 useInView 훅으로 더 간편하게 스크롤 트리거드 애니메이션 구현
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <UseInViewAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <UseInViewPractice />
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-gray-800">🆚 Intersection Observer vs useInView</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-gray-700 mb-1">Intersection Observer (직접 사용)</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>• 더 세밀한 제어 가능</li>
                  <li>• 복잡한 로직 구현 가능</li>
                  <li>• 코드가 상대적으로 복잡</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-1">useInView 훅</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>• 간단하고 직관적인 사용법</li>
                  <li>• Framer Motion과 완벽 통합</li>
                  <li>• 빠른 프로토타이핑에 적합</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> 다양한 offset 값으로 스크롤 트리거 타이밍을 조절해보세요
          </p>
          <p>
            <strong>중급:</strong> 여러 요소가 동시에 움직이는 복잡한 패럴랙스 씬을 만들어보세요
          </p>
          <p>
            <strong>고급:</strong> 3D 변환과 스크롤을 결합한 입체적인 애니메이션을 구현해보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 Scroll 애니메이션 핵심 개념</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>useScroll()</code>: 스크롤 기반 Motion Value 생성
            </p>
            <p>
              <code>scrollYProgress</code>: 스크롤 진행률 (0-1)
            </p>
            <p>
              <code>target</code>: 특정 요소를 기준으로 스크롤 측정
            </p>
            <p>
              <code>container</code>: 스크롤 컨테이너 지정
            </p>
            <p>
              <code>offset</code>: 스크롤 시작/끝 지점 설정
            </p>
            <p>
              <code>useTransform()</code>: 스크롤 값을 다른 값으로 변환
            </p>
            <p>
              <code>useInView()</code>: 요소가 뷰포트에 들어오는지 감지
            </p>
            <p>
              <code>IntersectionObserver</code>: 브라우저 네이티브 API로 직접 제어
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
