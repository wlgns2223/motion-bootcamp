"use client";

import { motion, useSpring } from "motion/react";
import React from "react";
import MouseFollowingLiveCoding from "../../live-coding/MouseFollowingLiveCoding";

// 예제 컴포넌트
function MouseFollowingExample() {
  const springX = useSpring(0, { stiffness: 50, damping: 15 });
  const springY = useSpring(0, { stiffness: 50, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 24; // 요소 크기의 절반
    const y = e.clientY - rect.top - 24;

    springX.set(x);
    springY.set(y);
  };

  return (
    <div
      className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-12 h-12 bg-purple-500 rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center text-gray-600">마우스를 움직여보세요</div>
    </div>
  );
}

// 메인 강의 컴포넌트
export default function Lesson3_MouseFollowing() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Mouse Following Spring</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <p className="text-sm text-purple-600 mb-4">
          마우스를 따라가는 스프링 애니메이션 - 부드럽고 자연스러운 추적 효과
        </p>
        <MouseFollowingExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const springX = useSpring(0);
const springY = useSpring(0);

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  springX.set(x);
  springY.set(y);
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: X, Y 좌표용 두 개의 스프링 생성</li>
          <li>2단계: onMouseMove 이벤트 핸들러 추가</li>
          <li>3단계: 마우스 좌표를 컨테이너 기준으로 변환</li>
          <li>4단계: 스프링 값에 변환된 좌표 설정</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <MouseFollowingLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 설정</h5>
          <code className="text-sm text-gray-600">
            {`const springX = useSpring(0, { 
  stiffness: 50, damping: 15 
});
const springY = useSpring(0, { 
  stiffness: 50, damping: 15 
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 마우스 추적</h5>
          <code className="text-sm text-gray-600">
            {`const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  springX.set(e.clientX - rect.left);
  springY.set(e.clientY - rect.top);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}
