"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * 실습 6: Advanced Transforms & Scroll
 *
 * 목표: 스크롤 기반 고급 변환 애니메이션을 마스터해보세요
 *
 * 실습 과제:
 * 1. 스크롤 프로그레스 인디케이터 만들기
 * 2. 스크롤 트리거 애니메이션
 * 3. 패럴랙스 스크롤 효과
 */

// Answer Components
function ScrollProgressAnswer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="relative">
        <motion.div style={{ scaleX }} className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-10" />
        <div ref={containerRef} className="h-48 overflow-y-scroll bg-white rounded-lg p-4 space-y-4">
          <p className="text-sm text-gray-600">스크롤해보세요! 위의 파란 바가 진행도를 보여줍니다.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              스크롤 콘텐츠 {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrollTriggeredAnswer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="h-96 overflow-y-scroll bg-white rounded-lg">
        <div className="h-[200px] bg-gradient-to-b from-blue-100 to-purple-100 p-4">
          <p className="text-sm">스크롤하면서 아래 요소를 관찰해보세요</p>
        </div>

        <motion.div
          ref={targetRef}
          style={{ opacity, scale, y }}
          className="mx-4 my-8 p-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg text-center font-bold"
        >
          스크롤 트리거 애니메이션! 🎉
        </motion.div>

        <div className="h-[200px] bg-gradient-to-b from-green-100 to-blue-100 p-4">
          <p className="text-sm">더 스크롤해보세요</p>
        </div>
      </div>
    </div>
  );
}

function ParallaxAnswer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div ref={containerRef} className="h-64 overflow-y-scroll relative rounded-lg">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"
        />

        <motion.div style={{ y: textY }} className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">패럴랙스 효과! ✨</h2>
        </motion.div>

        <div className="h-[400px] bg-gray-800 relative z-20">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">추가 콘텐츠</h3>
            <p>배경과 텍스트가 다른 속도로 움직이는 패럴랙스 효과를 확인해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Practice Components
function ScrollProgressPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 스크롤 진행도에 따라 상단 바가 채워지는 인디케이터를 만들어보세요
      </p>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300">
          {/* TODO: motion.div로 변경하고 scaleX 적용 */}
        </div>
        <div className="h-48 overflow-y-scroll bg-white rounded-lg p-4 space-y-4">
          <p className="text-sm text-gray-600">스크롤해보세요!</p>
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              스크롤 콘텐츠 {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 스크롤 프로그레스
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({ container: containerRef });
const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

<motion.div
  style={{ scaleX }}
  className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
/>`}
        </code>
      </div>
    </div>
  );
}

function ScrollTriggeredPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 요소가 뷰포트에 들어올 때 나타나는 스크롤 트리거 애니메이션을 만들어보세요
      </p>

      <div className="h-80 overflow-y-scroll bg-white rounded-lg">
        <div className="h-[150px] bg-gradient-to-b from-blue-100 to-purple-100 p-4">
          <p className="text-sm">스크롤하면서 아래 요소를 관찰해보세요</p>
        </div>

        <div className="mx-4 my-8 p-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg text-center font-bold">
          스크롤 트리거 애니메이션! 🎉
          {/* TODO: motion.div로 변경하고 스크롤 트리거 적용 */}
        </div>

        <div className="h-[150px] bg-gradient-to-b from-green-100 to-blue-100 p-4">
          <p className="text-sm">더 스크롤해보세요</p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 스크롤 트리거
const targetRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start end", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);`}
        </code>
      </div>
    </div>
  );
}

function ParallaxPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 배경과 텍스트가 다른 속도로 움직이는 패럴랙스 효과를 만들어보세요
      </p>

      <div className="h-64 overflow-y-scroll relative rounded-lg bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
          {/* TODO: motion.div로 변경하고 패럴랙스 적용 */}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">
            패럴랙스 효과! ✨{/* TODO: motion.div로 변경하고 다른 속도 적용 */}
          </h2>
        </div>

        <div className="h-[300px] bg-gray-800 relative z-20 p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">추가 콘텐츠</h3>
          <p>배경과 텍스트가 다른 속도로 움직여야 합니다.</p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 패럴랙스 효과
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

<motion.div style={{ y: backgroundY }} />
<motion.div style={{ y: textY }} />`}
        </code>
      </div>
    </div>
  );
}

export default function AdvancedTransformsPractice() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Advanced Transforms & Scroll 실습</h1>

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
          </div>
        </div>
      </div>
    </div>
  );
}
