"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import MultipleTransformsLiveCoding from "../../live-coding/MultipleTransformsLiveCoding";

// 예제 컴포넌트
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

// 메인 강의 컴포넌트
export default function Lesson4_MultipleTransforms() {
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
