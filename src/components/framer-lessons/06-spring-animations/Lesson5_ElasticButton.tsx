"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import ElasticButtonLiveCoding from "../../live-coding/ElasticButtonLiveCoding";

// 예제 컴포넌트
function ElasticButtonExample() {
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    scale.set(0.8);
    setTimeout(() => scale.set(1.1), 100);
    setTimeout(() => scale.set(1), 200);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.button
        style={{ scale }}
        onClick={handleClick}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        Elastic Button
      </motion.button>
      <p className="text-sm text-gray-600">클릭 횟수: {clickCount}</p>
    </div>
  );
}

// 메인 강의 컴포넌트
export default function Lesson5_ElasticButton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 5: Elastic Button Effect</h3>

      {/* 예제 시연 */}
      <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-cyan-800">✨ 완성된 예제</h4>
        <p className="text-sm text-cyan-600 mb-4">
          클릭 시 탄성있게 반응하는 버튼 - 눌림 → 확대 → 원상복구 순서로 애니메이션
        </p>
        <ElasticButtonExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const scale = useSpring(1, { 
  stiffness: 300, 
  damping: 10 
});

const handleClick = () => {
  scale.set(0.8);
  setTimeout(() => scale.set(1.1), 100);
  setTimeout(() => scale.set(1), 200);
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-4">
        <h4 className="font-semibold text-cyan-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-cyan-700 space-y-1 text-sm">
          <li>1단계: scale용 스프링 생성 (초기값 1)</li>
          <li>2단계: 높은 stiffness로 빠른 반응 설정</li>
          <li>3단계: 클릭 시 0.8 → 1.1 → 1 순서로 애니메이션</li>
          <li>4단계: setTimeout으로 타이밍 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ElasticButtonLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 탄성 스프링</h5>
          <code className="text-sm text-gray-600">
            {`const scale = useSpring(1, { 
  stiffness: 300, 
  damping: 10 
});
// 높은 stiffness = 빠른 반응`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 연속 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`const handleClick = () => {
  scale.set(0.8);  // 눌림
  setTimeout(() => scale.set(1.1), 100);  // 확대
  setTimeout(() => scale.set(1), 200);    // 복구
};`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ useSpring으로 물리 기반 애니메이션 생성</li>
          <li>□ stiffness/damping 값 조정으로 느낌 변경</li>
          <li>□ 마우스 인터랙션과 스프링 연동</li>
          <li>□ useTransform과 스프링 조합 활용</li>
          <li>□ 실용적인 UI 효과 구현</li>
        </ul>
      </div>
    </div>
  );
}
