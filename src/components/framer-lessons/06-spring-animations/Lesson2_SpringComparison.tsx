"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import SpringComparisonLiveCoding from "../../live-coding/SpringComparisonLiveCoding";

// 예제 컴포넌트
function SpringComparisonExample() {
  const softSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const normalSpring = useSpring(0, { stiffness: 100, damping: 10 });
  const stiffSpring = useSpring(0, { stiffness: 200, damping: 15 });

  const [isActive, setIsActive] = useState(false);

  const handleAnimate = () => {
    const targetValue = isActive ? 0 : 150;
    softSpring.set(targetValue);
    normalSpring.set(targetValue);
    stiffSpring.set(targetValue);
    setIsActive(!isActive);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Soft:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: softSpring }} className="w-6 h-6 bg-green-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Normal:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: normalSpring }} className="w-6 h-6 bg-blue-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Stiff:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: stiffSpring }} className="w-6 h-6 bg-red-500 rounded-full ml-1" />
          </div>
        </div>
      </div>

      <button
        onClick={handleAnimate}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Compare Springs
      </button>
    </div>
  );
}

// 메인 강의 컴포넌트
export default function Lesson2_SpringComparison() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Spring Settings Comparison</h3>

      {/* 예제 시연 */}
      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-indigo-800">✨ 완성된 예제</h4>
        <p className="text-sm text-indigo-600 mb-4">
          다양한 stiffness와 damping 값에 따른 스프링 애니메이션 차이를 비교해보세요
        </p>
        <SpringComparisonExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// 부드러운 스프링
const soft = useSpring(0, { stiffness: 50, damping: 20 });

// 일반 스프링  
const normal = useSpring(0, { stiffness: 100, damping: 10 });

// 강한 스프링
const stiff = useSpring(0, { stiffness: 200, damping: 15 });`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
        <h4 className="font-semibold text-indigo-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-indigo-700 space-y-1 text-sm">
          <li>1단계: 3개의 서로 다른 설정값으로 스프링 생성</li>
          <li>2단계: 각각의 motion.div에 개별 스프링 적용</li>
          <li>3단계: 동시에 모든 스프링 값 변경</li>
          <li>4단계: stiffness/damping 차이로 인한 움직임 비교</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SpringComparisonLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 다양한 스프링</h5>
          <code className="text-sm text-gray-600">
            {`const softSpring = useSpring(0, { 
  stiffness: 50, damping: 20 
});
const normalSpring = useSpring(0, { 
  stiffness: 100, damping: 10 
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 동시 제어</h5>
          <code className="text-sm text-gray-600">
            {`const handleAnimate = () => {
  const targetValue = isActive ? 0 : 150;
  softSpring.set(targetValue);
  normalSpring.set(targetValue);
  stiffSpring.set(targetValue);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}
