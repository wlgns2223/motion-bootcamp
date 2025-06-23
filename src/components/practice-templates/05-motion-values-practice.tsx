"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { useState } from "react";

/**
 * 실습 5: Motion Values
 *
 * 목표: Motion Values를 활용하여 실시간 반응형 애니메이션을 구현해보세요
 *
 * 실습 과제:
 * 1. 기본 Motion Value 사용하기
 * 2. useTransform으로 값 변환하기
 * 3. 색상 변환 애니메이션
 * 4. 복합 변환 시스템
 * 5. 실시간 인터랙션
 */

// Answer Components
function BasicMotionValueAnswer() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 100], [0.5, 1.5]);
  const backgroundColor = useTransform(x, [-100, 100], ["#EF4444", "#10B981"]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <p className="text-sm text-gray-600 mb-4">원을 좌우로 드래그해보세요 - 크기와 색상이 변합니다</p>
      <div className="flex justify-center">
        <div className="relative w-[300px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            style={{ x, scale, backgroundColor }}
            className="w-12 h-12 rounded-full cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>
    </div>
  );
}

function ColorTransformAnswer() {
  const [hue, setHue] = useState(0);
  const hueValue = useMotionValue(hue);
  const backgroundColor = useTransform(hueValue, (value) => `hsl(${value}, 70%, 60%)`);
  const borderColor = useTransform(hueValue, (value) => `hsl(${value + 60}, 70%, 50%)`);

  const handleChange = (value: number) => {
    setHue(value);
    hueValue.set(value);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <p className="text-sm text-gray-600 mb-4">슬라이더로 색상 변환을 제어해보세요</p>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-center">
          <motion.div style={{ backgroundColor, borderColor }} className="w-24 h-24 rounded-lg border-4" />
        </div>
      </div>
    </div>
  );
}

function ComplexTransformAnswer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotate = useTransform([x, y], ([xVal, yVal]) => {
    return Math.atan2(yVal as number, xVal as number) * (180 / Math.PI);
  });

  const scale = useTransform([x, y], ([xVal, yVal]) => {
    const distance = Math.sqrt((xVal as number) * (xVal as number) + (yVal as number) * (yVal as number));
    return 1 + distance / 200;
  });

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <p className="text-sm text-gray-600 mb-4">원을 자유롭게 드래그해보세요 - 회전과 크기가 동시에 변합니다</p>
      <div className="flex justify-center">
        <div className="relative w-[300px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
          <motion.div
            drag
            dragConstraints={{ left: -140, right: 140, top: -90, bottom: 90 }}
            style={{ x, y, rotate, scale }}
            className="w-16 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>
    </div>
  );
}

// Practice Components
function BasicMotionValuePractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: useMotionValue와 useTransform을 사용해서 드래그로 크기와 색상을 제어해보세요
      </p>

      <div className="flex justify-center">
        <div className="relative w-[300px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full cursor-grab active:cursor-grabbing">
            {/* TODO: motion.div로 변경하고 drag, Motion Value 연결 */}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: Motion Value 사용
const x = useMotionValue(0);
const scale = useTransform(x, [-100, 100], [0.5, 1.5]);
const backgroundColor = useTransform(x, [-100, 100], ["#EF4444", "#10B981"]);

<motion.div
  drag="x"
  dragConstraints={{ left: -100, right: 100 }}
  style={{ x, scale, backgroundColor }}
/>`}
        </code>
      </div>
    </div>
  );
}

function ColorTransformPractice() {
  const [hue, setHue] = useState(0);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 슬라이더로 HSL 색상을 실시간으로 변환하는 애니메이션을 만들어보세요
      </p>

      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-blue-500 rounded-lg border-4 border-gray-300">
            {/* TODO: Motion Value와 색상 변환 적용 */}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 색상 변환
const hueValue = useMotionValue(hue);
const backgroundColor = useTransform(hueValue, (value) => \`hsl(\${value}, 70%, 60%)\`);

<motion.div
  style={{ backgroundColor }}
/>`}
        </code>
      </div>
    </div>
  );
}

function ComplexTransformPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 드래그 위치에 따라 회전과 크기가 동시에 변하는 복합 변환을 구현해보세요
      </p>

      <div className="flex justify-center">
        <div className="relative w-[300px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-16 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-grab active:cursor-grabbing">
            {/* TODO: 복합 변환 적용 */}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 복합 변환
const x = useMotionValue(0);
const y = useMotionValue(0);

const rotate = useTransform([x, y], ([xVal, yVal]) => {
  return Math.atan2(yVal, xVal) * (180 / Math.PI);
});

const scale = useTransform([x, y], ([xVal, yVal]) => {
  const distance = Math.sqrt(xVal * xVal + yVal * yVal);
  return 1 + distance / 200;
});`}
        </code>
      </div>
    </div>
  );
}

export default function MotionValuesPractice() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">5. Motion Values 실습</h1>

      <div className="space-y-12">
        {/* 1. 기본 Motion Value 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 1. 기본 Motion Value</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <BasicMotionValueAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <BasicMotionValuePractice />
            </div>
          </div>
        </div>

        {/* 2. 색상 변환 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 2. 색상 변환</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ColorTransformAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ColorTransformPractice />
            </div>
          </div>
        </div>

        {/* 3. 복합 변환 실습 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">📖 3. 복합 변환</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 목표 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">✅ 목표 (Answer)</h3>
              <ComplexTransformAnswer />
            </div>

            {/* 실습 */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">👨‍💻 실습 (Practice)</h3>
              <ComplexTransformPractice />
            </div>
          </div>
        </div>
      </div>

      {/* 추가 정보 */}
      <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 추가 챌린지</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>초급:</strong> useSpring을 사용해서 더 부드러운 Motion Value 애니메이션을 만들어보세요
          </p>
          <p>
            <strong>중급:</strong> 여러 Motion Value들을 조합해서 복잡한 인터랙션을 구현해보세요
          </p>
          <p>
            <strong>고급:</strong> useScroll과 Motion Value를 결합한 스크롤 기반 애니메이션을 만들어보세요
          </p>
        </div>

        <div className="mt-6 bg-white/50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">💡 Motion Values 핵심 개념</h3>
          <div className="text-sm space-y-1">
            <p>
              <code>useMotionValue()</code>: 애니메이션 가능한 값 생성
            </p>
            <p>
              <code>useTransform()</code>: 값의 범위를 다른 범위로 변환
            </p>
            <p>
              <code>useSpring()</code>: 스프링 기반의 부드러운 애니메이션
            </p>
            <p>
              <code>set()</code>: Motion Value 직접 설정
            </p>
            <p>
              <code>get()</code>: 현재 Motion Value 가져오기
            </p>
            <p>
              <code>onChange()</code>: Motion Value 변화 감지
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
