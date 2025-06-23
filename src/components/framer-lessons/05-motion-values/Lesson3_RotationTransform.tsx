"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import RotationTransformLiveCoding from "../../live-coding/RotationTransformLiveCoding";

// RotationTransformExample 컴포넌트
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

// 강의 3: Rotation Transform
export default function Lesson3_RotationTransform() {
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
