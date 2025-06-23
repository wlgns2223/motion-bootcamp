"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import BasicMotionValueLiveCoding from "../live-coding/BasicMotionValueLiveCoding";
import ColorTransformLiveCoding from "../live-coding/ColorTransformLiveCoding";
import RotationTransformLiveCoding from "../live-coding/RotationTransformLiveCoding";
import MultipleTransformsLiveCoding from "../live-coding/MultipleTransformsLiveCoding";

/**
 * 🎥 Lesson 4: useMotionValue & useTransform (통합 강의)
 *
 * 핵심 개념:
 * 1. useMotionValue - 애니메이션 값을 직접 관리하고 추적
 * 2. useTransform - 하나의 motion value를 다른 값으로 변환
 * 3. 실시간 값 변화 추적 및 활용
 * 4. 복잡한 애니메이션 로직 구현
 */

export default function MotionValues() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 4: useMotionValue & useTransform</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          애니메이션 값을 직접 제어하고 변환하는 방법을 배워보세요. 강사와 함께 실시간 상호작용 애니메이션을 직접
          만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Basic Motion Value */}
      <Lesson1_BasicMotionValue />

      {/* 강의 2: Color Transform */}
      <Lesson2_ColorTransform />

      {/* 강의 3: Rotation Transform */}
      <Lesson3_RotationTransform />

      {/* 강의 4: Multiple Transforms */}
      <Lesson4_MultipleTransforms />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useMotionValue</strong>: 애니메이션 값을 직접 생성하고 관리합니다
          </li>
          <li>
            • <strong>useTransform</strong>: 하나의 값을 다른 값으로 매핑 변환합니다
          </li>
          <li>
            • <strong>실시간 변환</strong>: 사용자 입력에 따라 즉시 반응하는 애니메이션
          </li>
          <li>
            • <strong>성능 최적화</strong>: React 리렌더링 없이 애니메이션 처리
          </li>
        </ul>
      </div>
    </div>
  );
}

// 예제 1: Basic Motion Value
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

// 예제 2: Color Transform
function ColorTransformExample() {
  const x = useMotionValue(0);
  const backgroundColor = useTransform(x, [-200, 0, 200], ["#ef4444", "#3b82f6", "#10b981"]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, backgroundColor }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-16 h-16 rounded-lg cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  );
}

// 예제 3: Rotation Transform
function RotationTransformExample() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-360, 360]);
  const opacity = useTransform(x, [-200, 0, 200], [0.3, 1, 0.3]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, rotate, opacity }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-12 h-12 bg-purple-500 cursor-grab active:cursor-grabbing"
        >
          <div className="w-full h-full bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
            ⭐
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 예제 4: Multiple Transforms
function MultipleTransformsExample() {
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 1], [1, 1.5]);
  const rotate = useTransform(progress, [0, 1], [0, 180]);
  const borderRadius = useTransform(progress, [0, 1], ["8px", "50px"]);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    progress.set(isAnimating ? 0 : 1);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        style={{ scale, rotate, borderRadius }}
        className="w-20 h-20 bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer flex items-center justify-center text-white font-bold"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click
      </motion.div>
      <p className="text-sm text-gray-600">클릭하여 변환 애니메이션 실행</p>
    </div>
  );
}

// 강의 1: Basic Motion Value
function Lesson1_BasicMotionValue() {
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

// 강의 2: Color Transform
function Lesson2_ColorTransform() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Color Transform</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <p className="text-sm text-green-600 mb-4">드래그 위치에 따라 색상이 빨강 → 파랑 → 초록으로 변합니다</p>
        <ColorTransformExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const x = useMotionValue(0);
const backgroundColor = useTransform(
  x,
  [-200, 0, 200],
  ["#ef4444", "#3b82f6", "#10b981"]
);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: useMotionValue로 x 값 생성</li>
          <li>2단계: useTransform으로 3개 색상 매핑</li>
          <li>3단계: backgroundColor를 style에 전달</li>
          <li>4단계: 드래그 제약 조건 설정</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ColorTransformLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 색상 매핑</h5>
          <code className="text-sm text-gray-600">
            {`const backgroundColor = useTransform(
  x,
  [-200, 0, 200],
  ["#ef4444", "#3b82f6", "#10b981"]
);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 스타일 적용</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  drag="x"
  style={{ x, backgroundColor }}
  dragConstraints={{ left: -200, right: 200 }}
/>`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: Rotation Transform
function Lesson3_RotationTransform() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Rotation Transform</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <p className="text-sm text-purple-600 mb-4">드래그 거리에 따라 회전각도와 투명도가 동시에 변합니다</p>
        <RotationTransformExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const x = useMotionValue(0);
const rotate = useTransform(x, [-200, 200], [-360, 360]);
const opacity = useTransform(x, [-200, 0, 200], [0.3, 1, 0.3]);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: useMotionValue로 x 값 생성</li>
          <li>2단계: rotate 값을 -360~360도로 매핑</li>
          <li>3단계: opacity 값을 거리에 따라 매핑</li>
          <li>4단계: 두 transform을 동시에 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <RotationTransformLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 회전 매핑</h5>
          <code className="text-sm text-gray-600">
            {`const rotate = useTransform(
  x, [-200, 200], [-360, 360]
);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 투명도 + 적용</h5>
          <code className="text-sm text-gray-600">
            {`const opacity = useTransform(
  x, [-200, 0, 200], [0.3, 1, 0.3]
);
style={{ x, rotate, opacity }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 4: Multiple Transforms
function Lesson4_MultipleTransforms() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: Multiple Transforms</h3>

      {/* 예제 시연 */}
      <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-pink-800">✨ 완성된 예제</h4>
        <p className="text-sm text-pink-600 mb-4">
          클릭하면 하나의 progress 값으로 크기, 회전, 모서리 둥글기가 동시에 변합니다
        </p>
        <MultipleTransformsExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const progress = useMotionValue(0);
const scale = useTransform(progress, [0, 1], [1, 1.5]);
const rotate = useTransform(progress, [0, 1], [0, 180]);
const borderRadius = useTransform(progress, [0, 1], ["8px", "50px"]);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-pink-50 border-l-4 border-pink-400 p-4 mb-4">
        <h4 className="font-semibold text-pink-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-pink-700 space-y-1 text-sm">
          <li>1단계: progress useMotionValue 생성</li>
          <li>2단계: scale, rotate, borderRadius 각각 매핑</li>
          <li>3단계: 클릭 핸들러에서 progress.set() 호출</li>
          <li>4단계: 모든 transform을 style에 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <MultipleTransformsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 복합 변환</h5>
          <code className="text-sm text-gray-600">
            {`const progress = useMotionValue(0);
const scale = useTransform(progress, [0, 1], [1, 1.5]);
const rotate = useTransform(progress, [0, 1], [0, 180]);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 제어</h5>
          <code className="text-sm text-gray-600">
            {`const handleClick = () => {
  progress.set(isAnimating ? 0 : 1);
};
style={{ scale, rotate, borderRadius }}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ useMotionValue로 애니메이션 값 생성</li>
          <li>□ useTransform으로 값 매핑 및 변환</li>
          <li>□ 드래그 인터랙션 구현</li>
          <li>□ 복합 애니메이션 효과 적용</li>
          <li>□ 성능 최적화된 실시간 애니메이션</li>
        </ul>
      </div>
    </div>
  );
}
