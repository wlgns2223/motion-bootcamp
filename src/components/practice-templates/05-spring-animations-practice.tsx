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
 * 3. 버튼 인터랙션에 스프링 적용하기
 * 4. 마우스 추적 스프링 구현하기
 * 5. 복합 스프링 시스템 구축하기
 */

export default function SpringAnimationsPractice() {
  const [isToggled, setIsToggled] = useState(false);
  const [buttonClicks, setButtonClicks] = useState(0);

  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 5: Spring Animations
        </h2>
        <p className="text-gray-600">
          물리 기반의 자연스러운 스프링 애니메이션을 구현해보세요
        </p>
      </div>

      {/* 실습 1: 기본 스프링 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 기본 스프링 애니메이션
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: useSpring을 사용하여 버튼 클릭시 요소가 이동하는 애니메이션을
          만들어보세요
        </p>

        {/* TODO: 기본 스프링 구현 */}
        {/* 
        const springX = useSpring(0, { stiffness: 100, damping: 10 });
        
        const handleMove = () => {
          springX.set(isToggled ? 0 : 200);
          setIsToggled(!isToggled);
        };
        */}

        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-[300px] h-20 bg-gray-100 rounded-lg flex items-center">
            <div
              className="w-12 h-12 bg-blue-500 rounded-full ml-4"
              // TODO: motion.div로 변경하고 spring 애니메이션 적용
              // style={{ x: springX }}
            />
          </div>
          <button
            onClick={() => {
              // TODO: handleMove 함수 호출
              setIsToggled(!isToggled);
            }}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isToggled ? "Reset" : "Move"}
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 기본 스프링을 구현해보세요
const springX = useSpring(?, { 
  stiffness: ?, 
  damping: ? 
});

const handleMove = () => {
  springX.set(isToggled ? ? : ?);
};

<motion.div style={{ x: springX }} />`}
          </code>
        </div>
      </div>

      {/* 실습 2: 스프링 설정값 비교 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 스프링 설정값 실험하기
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 서로 다른 stiffness와 damping 값을 가진 3개의 스프링을 만들어
          비교해보세요
        </p>

        {/* TODO: 다양한 스프링 설정 구현 */}
        {/* 
        const softSpring = useSpring(0, { stiffness: 50, damping: 20 });
        const normalSpring = useSpring(0, { stiffness: 100, damping: 10 });
        const stiffSpring = useSpring(0, { stiffness: 200, damping: 15 });
        */}

        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm">Soft:</span>
              <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
                <div
                  className="w-6 h-6 bg-green-500 rounded-full ml-1"
                  // TODO: motion.div로 변경하고 softSpring 적용
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm">Normal:</span>
              <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
                <div
                  className="w-6 h-6 bg-blue-500 rounded-full ml-1"
                  // TODO: motion.div로 변경하고 normalSpring 적용
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="w-20 text-sm">Stiff:</span>
              <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
                <div
                  className="w-6 h-6 bg-red-500 rounded-full ml-1"
                  // TODO: motion.div로 변경하고 stiffSpring 적용
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              // TODO: 모든 스프링을 동시에 이동
              // softSpring.set(isToggled ? 0 : 150);
              // normalSpring.set(isToggled ? 0 : 150);
              // stiffSpring.set(isToggled ? 0 : 150);
              setIsToggled(!isToggled);
            }}
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Compare Springs
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 다양한 스프링 설정을 실험해보세요
const softSpring = useSpring(?, { stiffness: ?, damping: ? });
const normalSpring = useSpring(?, { stiffness: ?, damping: ? });
const stiffSpring = useSpring(?, { stiffness: ?, damping: ? });

// stiffness: 50-300 (높을수록 빠른 반응)
// damping: 10-40 (높을수록 빠른 정지)`}
          </code>
        </div>
      </div>

      {/* 실습 3: 탄성 버튼 효과 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 3: 탄성 버튼 효과
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 클릭할 때 탄성있게 축소되었다가 확대되는 버튼 효과를
          만들어보세요
        </p>

        {/* TODO: 탄성 버튼 구현 */}
        {/* 
        const scale = useSpring(1, { stiffness: 300, damping: 10 });
        
        const handleClick = () => {
          scale.set(0.8);
          setTimeout(() => scale.set(1.1), 100);
          setTimeout(() => scale.set(1), 200);
          setButtonClicks(prev => prev + 1);
        };
        */}

        <div className="flex flex-col items-center space-y-4">
          <div
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg cursor-pointer select-none"
            onClick={() => {
              // TODO: handleClick 함수 호출
              setButtonClicks((prev) => prev + 1);
            }}
            // TODO: motion.div로 변경하고 scale 적용
            // style={{ scale }}
          >
            Elastic Button
          </div>
          <p className="text-sm text-gray-600">클릭 횟수: {buttonClicks}</p>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 탄성 버튼을 구현해보세요
const scale = useSpring(?, { stiffness: ?, damping: ? });

const handleClick = () => {
  scale.set(?); // 축소
  setTimeout(() => scale.set(?), ?); // 확대
  setTimeout(() => scale.set(?), ?); // 원래 크기
};

<motion.div style={{ scale }} onClick={handleClick} />`}
          </code>
        </div>
      </div>

      {/* 실습 4: 마우스 추적 스프링 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 4: 마우스 추적 스프링
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 마우스를 부드럽게 따라오는 스프링 애니메이션을 만들어보세요
        </p>

        {/* TODO: 마우스 추적 스프링 구현 */}
        {/* 
        const springX = useSpring(0, { stiffness: 50, damping: 15 });
        const springY = useSpring(0, { stiffness: 50, damping: 15 });
        
        const handleMouseMove = (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          springX.set(e.clientX - rect.left - 24);
          springY.set(e.clientY - rect.top - 24);
        };
        */}

        <div
          className="relative w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg cursor-none overflow-hidden"
          // TODO: onMouseMove 이벤트 추가
        >
          <div
            className="absolute w-12 h-12 bg-orange-500 rounded-full pointer-events-none flex items-center justify-center text-white font-bold"
            // TODO: motion.div로 변경하고 spring 위치 적용
            // style={{ x: springX, y: springY }}
          >
            🔥
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 pointer-events-none">
            마우스를 움직여보세요
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 마우스 추적 스프링을 구현해보세요
const springX = useSpring(?, { stiffness: ?, damping: ? });
const springY = useSpring(?, { stiffness: ?, damping: ? });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  springX.set(e.clientX - rect.left - ?);
  springY.set(e.clientY - rect.top - ?);
};

<motion.div style={{ x: springX, y: springY }} />`}
          </code>
        </div>
      </div>

      {/* 실습 5: 복합 스프링 시스템 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 5: 복합 스프링 시스템 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 여러 개의 요소가 서로 다른 타이밍으로 연쇄적으로 반응하는 스프링
          시스템을 만들어보세요
        </p>

        {/* TODO: 복합 스프링 시스템 구현 */}
        {/* 
        const spring1 = useSpring(0, { stiffness: 100, damping: 12 });
        const spring2 = useSpring(0, { stiffness: 80, damping: 15 });
        const spring3 = useSpring(0, { stiffness: 60, damping: 18 });
        const spring4 = useSpring(0, { stiffness: 40, damping: 20 });
        
        const triggerChain = () => {
          spring1.set(isToggled ? 0 : 150);
          setTimeout(() => spring2.set(isToggled ? 0 : 150), 100);
          setTimeout(() => spring3.set(isToggled ? 0 : 150), 200);
          setTimeout(() => spring4.set(isToggled ? 0 : 150), 300);
        };
        */}

        <div className="space-y-6">
          <div className="space-y-3">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center space-x-4">
                <span className="w-20 text-sm">Spring {num}:</span>
                <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full ml-1 ${
                      num === 1
                        ? "bg-red-500"
                        : num === 2
                        ? "bg-orange-500"
                        : num === 3
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    // TODO: motion.div로 변경하고 각각 다른 spring 적용
                    // style={{ x: spring1/spring2/spring3/spring4 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              // TODO: triggerChain 함수 호출
              setIsToggled(!isToggled);
            }}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Trigger Chain Reaction
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 연쇄 스프링 시스템을 구현해보세요
const spring1 = useSpring(?, { stiffness: ?, damping: ? });
const spring2 = useSpring(?, { stiffness: ?, damping: ? });
// ... 더 많은 스프링들

const triggerChain = () => {
  spring1.set(?);
  setTimeout(() => spring2.set(?), ?);
  setTimeout(() => spring3.set(?), ?);
  // 연쇄적으로 트리거
};`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-green-700 space-y-2">
          <li>• 스프링과 useTransform을 조합한 복합 애니메이션</li>
          <li>• 물리 법칙을 시뮬레이션하는 스프링 시스템</li>
          <li>• 사용자 제스처에 반응하는 동적 스프링</li>
          <li>• 여러 요소가 상호작용하는 스프링 네트워크</li>
          <li>• 실시간으로 stiffness/damping 값을 조절하는 인터페이스</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>useSpring:</strong> useSpring(initialValue, config)
          </p>
          <p>
            <strong>stiffness:</strong> 50-300 (스프링의 강성, 높을수록 빠른
            반응)
          </p>
          <p>
            <strong>damping:</strong> 10-40 (진동 감쇠, 높을수록 빠른 정지)
          </p>
          <p>
            <strong>mass:</strong> 0.1-2 (질량, 높을수록 느린 반응)
          </p>
          <p>
            <strong>값 설정:</strong> springValue.set(newValue)
          </p>
        </div>
      </div>
    </div>
  );
}
