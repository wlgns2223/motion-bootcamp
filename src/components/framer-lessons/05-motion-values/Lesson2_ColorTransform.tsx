"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import ColorTransformLiveCoding from "../../live-coding/ColorTransformLiveCoding";

// ColorTransformExample 컴포넌트
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

// 강의 2: Color Transform
export default function Lesson2_ColorTransform() {
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
