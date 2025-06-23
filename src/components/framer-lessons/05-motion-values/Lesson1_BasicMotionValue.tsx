"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import BasicMotionValueLiveCoding from "../../live-coding/BasicMotionValueLiveCoding";

// BasicMotionValueExample 컴포넌트
function BasicMotionValueExample() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, scale }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-12 h-12 bg-blue-500 rounded-full cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  );
}

// 강의 1: Basic Motion Value
export default function Lesson1_BasicMotionValue() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Basic Motion Value</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <p className="text-sm text-blue-600 mb-4">마우스 드래그로 원을 움직이면 위치에 따라 크기가 변합니다</p>
        <BasicMotionValueExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const x = useMotionValue(0);
const scale = useTransform(x, [-200, 200], [0.5, 1.5]);

<motion.div
  drag="x"
  style={{ x, scale }}
  dragConstraints={{ left: -200, right: 200 }}
/>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: useMotionValue(0)로 x 값 생성</li>
          <li>2단계: useTransform으로 scale 값 매핑</li>
          <li>3단계: motion.div에 drag="x" 속성 추가</li>
          <li>4단계: style prop에 {`{ x, scale }`} 전달</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <BasicMotionValueLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Motion Value 생성</h5>
          <code className="text-sm text-gray-600">
            {`const x = useMotionValue(0);
const scale = useTransform(
  x, [-200, 200], [0.5, 1.5]
);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 드래그 연결</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  drag="x"
  style={{ x, scale }}
  dragConstraints={{ left: -200, right: 200 }}
/>`}
          </code>
        </div>
      </div>
    </div>
  );
}
