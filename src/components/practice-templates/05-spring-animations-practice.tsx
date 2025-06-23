"use client";

import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { useState, useEffect } from "react";

/**
 * 실습 5: Spring Animations
 *
 * 목표: useSpring을 활용하여 자연스러운 물리 기반 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 기본 스프링 애니메이션 만들기
 * 2. 스프링 설정값 실험하기
 * 3. 탄성 버튼 만들기
 * 4. 마우스 추적 스프링
 * 5. 복합 스프링 시스템
 */

// Answer Components
function BasicSpringAnswer() {
  const [isToggled, setIsToggled] = useState(false);
  const springX = useSpring(0, { stiffness: 100, damping: 10 });

  const handleMove = () => {
    springX.set(isToggled ? 0 : 200);
    setIsToggled(!isToggled);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <button onClick={handleMove} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        스프링 이동
      </button>
      <div className="relative w-[300px] h-16 bg-gray-100 rounded-lg">
        <motion.div style={{ x: springX }} className="absolute top-2 left-2 w-12 h-12 bg-blue-500 rounded-lg" />
      </div>
    </div>
  );
}

function ElasticButtonAnswer() {
  const scale = useSpring(1, { stiffness: 300, damping: 10 });

  const handlePress = () => {
    scale.set(0.95);
    setTimeout(() => scale.set(1), 100);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="flex justify-center">
        <motion.button
          style={{ scale }}
          onMouseDown={handlePress}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-lg shadow-lg"
        >
          탄성 버튼 ✨
        </motion.button>
      </div>
    </div>
  );
}

function MouseFollowAnswer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 20);
    mouseY.set(e.clientY - rect.top - 20);
  };

  return (
    <div
      className="bg-gray-50 p-6 rounded-lg border-2 border-green-200 relative h-64 cursor-none"
      onMouseMove={handleMouseMove}
    >
      <p className="text-sm text-gray-600 mb-4">마우스를 움직여보세요 - 부드럽게 따라옵니다</p>
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-10 h-10 bg-red-500 rounded-full pointer-events-none"
      />
    </div>
  );
}

// Practice Components
function BasicSpringPractice() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: useSpring을 사용해서 버튼 클릭 시 요소가 스프링 애니메이션으로 이동하도록 만들어보세요
      </p>

      <button
        onClick={() => setIsToggled(!isToggled)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        스프링 이동
      </button>
      <div className="relative w-[300px] h-16 bg-gray-100 rounded-lg">
        <div className="absolute top-2 left-2 w-12 h-12 bg-blue-500 rounded-lg">
          {/* TODO: motion.div로 변경하고 useSpring 적용 */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 기본 스프링 애니메이션
const springX = useSpring(0, { stiffness: 100, damping: 10 });

const handleMove = () => {
  springX.set(isToggled ? 0 : 200);
};

<motion.div style={{ x: springX }} />`}
        </code>
      </div>
    </div>
  );
}

function ElasticButtonPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 클릭할 때 탄성있게 반응하는 버튼을 만들어보세요</p>

      <div className="flex justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold text-lg shadow-lg">
          탄성 버튼 ✨{/* TODO: motion.button으로 변경하고 scale 스프링 적용 */}
        </button>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 탄성 버튼
const scale = useSpring(1, { stiffness: 300, damping: 10 });

const handlePress = () => {
  scale.set(0.95);
  setTimeout(() => scale.set(1), 100);
};

<motion.button style={{ scale }} onMouseDown={handlePress} />`}
        </code>
      </div>
    </div>
  );
}

function MouseFollowPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 마우스를 부드럽게 따라다니는 스프링 애니메이션을 만들어보세요</p>

      <div className="relative h-48 bg-white rounded-lg">
        <div className="absolute w-10 h-10 bg-red-500 rounded-full">
          {/* TODO: 마우스 추적 스프링 애니메이션 적용 */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 마우스 추적 스프링
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);
const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

const handleMouseMove = (e) => {
  mouseX.set(e.clientX);
  mouseY.set(e.clientY);
};`}
        </code>
      </div>
    </div>
  );
}

export default function SpringAnimationsPractice() {
  const [isToggled, setIsToggled] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Spring Animations 실습</h1>

      <div className="space-y-12">
        {/* 1. 기본 스프링 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 기본 스프링 애니메이션</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <BasicSpringAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <BasicSpringPractice />
            </div>
          </div>
        </div>

        {/* 2. 탄성 버튼 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 탄성 버튼</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ElasticButtonAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ElasticButtonPractice />
            </div>
          </div>
        </div>

        {/* 3. 마우스 추적 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 마우스 추적 스프링</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <MouseFollowAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <MouseFollowPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> 다양한 stiffness와 damping 값으로 스프링의 느낌을 바꿔보세요
          </p>
          <p>
            <strong>중급:</strong> 여러 요소가 연쇄적으로 반응하는 스프링 체인을 만들어보세요
          </p>
          <p>
            <strong>고급:</strong> 물리 시뮬레이션을 활용한 복잡한 스프링 시스템을 구현해보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 Spring 핵심 개념</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>useSpring()</code>: 스프링 기반 Motion Value 생성
            </p>
            <p>
              <code>stiffness</code>: 스프링의 강성 (높을수록 빠름)
            </p>
            <p>
              <code>damping</code>: 감쇠 (높을수록 빨리 멈춤)
            </p>
            <p>
              <code>mass</code>: 질량 (높을수록 느림)
            </p>
            <p>
              <code>velocity</code>: 초기 속도
            </p>
            <p>
              <code>restSpeed</code>: 정지 판정 속도
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
