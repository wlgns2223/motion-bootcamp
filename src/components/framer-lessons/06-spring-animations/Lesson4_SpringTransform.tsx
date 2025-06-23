"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { useState } from "react";
import SpringTransformLiveCoding from "../../live-coding/SpringTransformLiveCoding";

// 예제 컴포넌트
function SpringTransformExample() {
  const progress = useSpring(0, { stiffness: 150, damping: 12 });
  const scale = useTransform(progress, [0, 1], [1, 2]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  const opacity = useTransform(progress, [0, 1], [0.5, 1]);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    progress.set(isExpanded ? 0 : 1);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        style={{ scale, rotate, opacity }}
        className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg cursor-pointer"
        onClick={handleToggle}
      />
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        {isExpanded ? "Shrink" : "Expand"}
      </button>
    </div>
  );
}

// 메인 강의 컴포넌트
export default function Lesson4_SpringTransform() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: Spring + Transform Combination</h3>

      {/* 예제 시연 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">✨ 완성된 예제</h4>
        <p className="text-sm text-orange-600 mb-4">
          스프링과 useTransform을 조합해 scale, rotate, opacity를 동시에 제어하는 복합 애니메이션
        </p>
        <SpringTransformExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const progress = useSpring(0);
const scale = useTransform(progress, [0, 1], [1, 2]);
const rotate = useTransform(progress, [0, 1], [0, 360]);
const opacity = useTransform(progress, [0, 1], [0.5, 1]);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-orange-700 space-y-1 text-sm">
          <li>1단계: progress용 스프링 생성 (0-1 값)</li>
          <li>2단계: useTransform으로 scale, rotate, opacity 매핑</li>
          <li>3단계: 클릭 핸들러에서 progress 값 토글</li>
          <li>4단계: 모든 transform을 style에 동시 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SpringTransformLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 + 변환</h5>
          <code className="text-sm text-gray-600">
            {`const progress = useSpring(0, { 
  stiffness: 150, damping: 12 
});
const scale = useTransform(progress, [0, 1], [1, 2]);
const rotate = useTransform(progress, [0, 1], [0, 360]);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 제어</h5>
          <code className="text-sm text-gray-600">
            {`const handleToggle = () => {
  progress.set(isExpanded ? 0 : 1);
  setIsExpanded(!isExpanded);
};
style={{ scale, rotate, opacity }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
