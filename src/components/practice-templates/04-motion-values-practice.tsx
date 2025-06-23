"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";

/**
 * 실습 4: Motion Values & Transform
 *
 * 목표: useMotionValue와 useTransform을 활용하여 고급 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 기본 Motion Value 사용하기
 * 2. Transform으로 값 변환하기
 * 3. 색상 변환 구현하기
 * 4. 복합 변환 시스템 만들기
 * 5. 실시간 인터랙션 구현하기
 */

export default function MotionValuesPractice() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 4: Motion Values & Transform
        </h2>
        <p className="text-gray-600">
          useMotionValue와 useTransform으로 고급 애니메이션을 구현해보세요
        </p>
      </div>

      {/* 실습 1: 기본 Motion Value */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 기본 Motion Value 사용하기
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: useMotionValue와 useTransform을 사용하여 드래그할 때 크기가
          변하는 요소를 만들어보세요
        </p>

        {/* TODO: Motion Value 구현 */}
        {/* 
        const x = useMotionValue(0);
        const scale = useTransform(x, [-100, 100], [0.5, 1.5]);
        */}

        <div className="flex justify-center">
          <div className="relative w-[300px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <div
              className="w-12 h-12 bg-blue-500 rounded-full cursor-grab active:cursor-grabbing"
              // TODO: motion.div로 변경하고 motion value 적용
              // drag="x"
              // style={{ x, scale }}
              // dragConstraints={{ left: -100, right: 100 }}
            />
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: Motion Value를 구현해보세요
const x = useMotionValue(?);
const scale = useTransform(x, [?, ?], [?, ?]);

<motion.div
  drag="?"
  style={{ x, scale }}
  dragConstraints={{ left: ?, right: ? }}
/>`}
          </code>
        </div>
      </div>

      {/* 실습 2: 색상 변환 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 색상 변환 구현하기
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 드래그 위치에 따라 색상이 변하는 요소를 만들어보세요 (빨강 →
          파랑 → 초록)
        </p>

        {/* TODO: 색상 변환 구현 */}
        {/* 
        const x = useMotionValue(0);
        const backgroundColor = useTransform(
          x,
          [-150, 0, 150],
          ["#ef4444", "#3b82f6", "#10b981"]
        );
        */}

        <div className="flex justify-center">
          <div className="relative w-[350px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-lg cursor-grab active:cursor-grabbing"
              // TODO: motion.div로 변경하고 backgroundColor 적용
              // style={{ x, backgroundColor }}
            />
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 색상 변환을 구현해보세요
const x = useMotionValue(?);
const backgroundColor = useTransform(
  x,
  [?, ?, ?],
  ["?", "?", "?"]
);

<motion.div
  style={{ x, backgroundColor }}
/>`}
          </code>
        </div>
      </div>

      {/* 실습 3: 회전과 투명도 조합 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 3: 회전과 투명도 조합
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 드래그 거리에 따라 회전과 투명도가 모두 변하는 복합 효과를
          만들어보세요
        </p>

        {/* TODO: 회전과 투명도 변환 구현 */}
        {/* 
        const x = useMotionValue(0);
        const rotate = useTransform(x, [-150, 150], [-180, 180]);
        const opacity = useTransform(x, [-150, 0, 150], [0.3, 1, 0.3]);
        */}

        <div className="flex justify-center">
          <div className="relative w-[350px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <div
              className="w-12 h-12 bg-purple-500 cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold text-xl"
              // TODO: motion.div로 변경하고 모든 transform 적용
              // style={{ x, rotate, opacity }}
            >
              ⭐
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 복합 변환을 구현해보세요
const x = useMotionValue(?);
const rotate = useTransform(x, [?, ?], [?, ?]);
const opacity = useTransform(x, [?, ?, ?], [?, ?, ?]);

<motion.div
  style={{ x, rotate, opacity }}
/>`}
          </code>
        </div>
      </div>

      {/* 실습 4: 프로그레스 바와 연동 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 4: 프로그레스 바와 연동하기
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 슬라이더 값에 따라 여러 요소가 동시에 변하는 시스템을
          만들어보세요
        </p>

        {/* TODO: 프로그레스 연동 시스템 구현 */}
        {/* 
        const progressValue = useMotionValue(progress);
        const scale = useTransform(progressValue, [0, 100], [1, 2]);
        const rotate = useTransform(progressValue, [0, 100], [0, 360]);
        const borderRadius = useTransform(progressValue, [0, 100], [8, 50]);
        */}

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium">Progress:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="flex-1"
            />
            <span className="text-sm font-mono w-12">{progress}%</span>
          </div>

          <div className="flex justify-center items-center h-32">
            <div
              className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold"
              // TODO: motion.div로 변경하고 모든 변환 적용
              // style={{ scale, rotate, borderRadius }}
            >
              {progress}%
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 프로그레스 연동을 구현해보세요
const progressValue = useMotionValue(progress);
const scale = useTransform(progressValue, [?, ?], [?, ?]);
const rotate = useTransform(progressValue, [?, ?], [?, ?]);
const borderRadius = useTransform(progressValue, [?, ?], ["?px", "?px"]);

// progressValue.set(newProgress) 로 값 업데이트`}
          </code>
        </div>
      </div>

      {/* 실습 5: 마우스 추적 시스템 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 5: 마우스 추적 시스템 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 마우스 위치에 따라 요소가 따라오면서 크기와 색상이 변하는
          시스템을 만들어보세요
        </p>

        {/* TODO: 마우스 추적 시스템 구현 */}
        {/* 
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);
        const scale = useTransform(mouseX, [0, 400], [0.5, 1.5]);
        const hue = useTransform(mouseX, [0, 400], [0, 360]);
        const backgroundColor = useTransform(hue, (h) => `hsl(${h}, 70%, 50%)`);
        
        const handleMouseMove = (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        };
        */}

        <div
          className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg cursor-none overflow-hidden"
          // TODO: onMouseMove 이벤트 추가
        >
          <div
            className="absolute w-12 h-12 rounded-full pointer-events-none"
            // TODO: motion.div로 변경하고 마우스 추적 적용
            // style={{ x: mouseX, y: mouseY, scale, backgroundColor }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 pointer-events-none">
            마우스를 움직여보세요
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 마우스 추적을 구현해보세요
const mouseX = useMotionValue(?);
const mouseY = useMotionValue(?);
const scale = useTransform(mouseX, [?, ?], [?, ?]);
const hue = useTransform(mouseX, [?, ?], [?, ?]);
const backgroundColor = useTransform(hue, (h) => \`hsl(\${h}, 70%, 50%)\`);

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  mouseX.set(e.clientX - rect.left);
  mouseY.set(e.clientY - rect.top);
};`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-purple-700 space-y-2">
          <li>• 연쇄적 변환 (하나의 값이 다른 변환의 입력이 되는)</li>
          <li>• 복잡한 수학 함수를 사용한 변환</li>
          <li>• 여러 개의 요소가 서로 다른 변환을 적용받는 시스템</li>
          <li>• 3D 변환 (rotateX, rotateY, perspective)</li>
          <li>• 실시간 물리 시뮬레이션 효과</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>Motion Value:</strong> useMotionValue(initialValue)
          </p>
          <p>
            <strong>Transform:</strong> useTransform(motionValue, inputRange,
            outputRange)
          </p>
          <p>
            <strong>색상 변환:</strong> HSL, RGB, HEX 값 모두 지원
          </p>
          <p>
            <strong>함수형 변환:</strong> useTransform(value, (v) =&gt;
            customFunction(v))
          </p>
          <p>
            <strong>성능:</strong> React 리렌더링 없이 60fps 애니메이션
          </p>
        </div>
      </div>
    </div>
  );
}
