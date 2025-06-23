"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useRef, useState } from "react";
import ScrollProgressLiveCoding from "../live-coding/ScrollProgressLiveCoding";
import ScrollTriggeredLiveCoding from "../live-coding/ScrollTriggeredLiveCoding";

/**
 * 🎥 Lesson 6: Advanced Transforms (통합 강의)
 *
 * 핵심 개념:
 * 1. useScroll - 스크롤 진행도 추적
 * 2. Scroll Progress Indicator
 * 3. Scroll-triggered Animations
 * 4. 실무에서 자주 사용되는 스크롤 패턴들
 */

export default function AdvancedTransforms() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 6: Advanced Transforms</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          스크롤 진행도 추적과 스크롤 기반 애니메이션을 배워보세요. 강사와 함께 useScroll과 useTransform을 활용해
          실무에서 자주 사용되는 스크롤 패턴들을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Scroll Progress */}
      <Lesson1_ScrollProgress />

      {/* 강의 2: Scroll-triggered 애니메이션 */}
      <Lesson2_ScrollTriggered />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useScroll</strong>: 스크롤 진행도를 추적하여 애니메이션에 활용
          </li>
          <li>
            • <strong>useTransform</strong>: 스크롤 값을 다른 값으로 변환
          </li>
          <li>
            • <strong>scrollYProgress</strong>: 0~1 사이의 스크롤 진행률 값
          </li>
          <li>
            • <strong>offset</strong>: 언제 애니메이션을 시작/끝낼지 정의
          </li>
          <li>• 실무에서 자주 사용되는 스크롤 기반 인터랙션 패턴들</li>
        </ul>
      </div>
    </div>
  );
}

// 강의 1: Scroll Progress
function Lesson1_ScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Scroll Progress Indicator</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="relative mb-4">
          <motion.div style={{ scaleX }} className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left" />
          <div ref={containerRef} className="h-48 overflow-y-scroll bg-gray-50 rounded-lg p-4 space-y-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="h-16 bg-white rounded shadow p-4">
                <h4 className="font-semibold">Content Block {i + 1}</h4>
                <p className="text-sm text-gray-600">스크롤하면 상단의 프로그레스 바가 채워집니다.</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const { scrollYProgress } = useScroll({ container: containerRef });
const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div style={{ scaleX }} />`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: useRef로 스크롤 컨테이너 참조 생성</li>
          <li>2단계: useScroll로 스크롤 진행도 추적</li>
          <li>3단계: useTransform으로 scaleX 값 변환</li>
          <li>4단계: motion.div에 style로 애니메이션 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ScrollProgressLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스크롤 추적</h5>
          <code className="text-sm text-gray-600">
            {`const containerRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  container: containerRef
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 값 변환 및 적용</h5>
          <code className="text-sm text-gray-600">
            {`const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div style={{ scaleX }} />`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: Scroll-triggered 애니메이션
function Lesson2_ScrollTriggered() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Scroll-triggered 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="space-y-8 mb-4">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">스크롤하여 아래 요소들이 나타나는 것을 확인하세요</p>
          </div>

          <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
          >
            Scroll Triggered Element
          </motion.div>

          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">더 스크롤하면 요소가 사라집니다</p>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: useRef로 타겟 요소 참조 생성</li>
          <li>2단계: useScroll에 target과 offset 설정</li>
          <li>3단계: useTransform으로 여러 속성값 변환</li>
          <li>4단계: motion.div에 style로 모든 애니메이션 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ScrollTriggeredLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 타겟 설정</h5>
          <code className="text-sm text-gray-600">
            {`const ref = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 값 변환</h5>
          <code className="text-sm text-gray-600">
            {`const opacity = useTransform(
  scrollYProgress, 
  [0, 0.3, 0.7, 1], 
  [0, 1, 1, 0]
);

<motion.div ref={ref} style={{ opacity }} />`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ Scroll Progress Indicator 구현</li>
          <li>□ Scroll-triggered 애니메이션 구현</li>
          <li>□ useScroll과 useTransform 조합 활용</li>
          <li>□ offset을 사용한 정밀한 타이밍 제어</li>
          <li>□ 실무에서 사용할 수 있는 스크롤 패턴 구현</li>
        </ul>
      </div>
    </div>
  );
}
