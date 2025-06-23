"use client";

import { motion, useSpring } from "motion/react";
import { useState } from "react";
import BasicSpringLiveCoding from "../../live-coding/BasicSpringLiveCoding";

// 예제 컴포넌트
function BasicSpringExample() {
  const springX = useSpring(0, { stiffness: 100, damping: 10 });
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newValue = isActive ? 0 : 200;
    springX.set(newValue);
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[300px] h-20 bg-gray-100 rounded-lg flex items-center">
        <motion.div style={{ x: springX }} className="w-12 h-12 bg-blue-500 rounded-full ml-4" />
      </div>
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isActive ? "Reset" : "Animate"}
      </button>
    </div>
  );
}

// 메인 강의 컴포넌트
export default function Lesson1_BasicSpring() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Basic Spring Animation</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <p className="text-sm text-blue-600 mb-4">기본 스프링 애니메이션 - 자연스러운 바운스 효과를 확인해보세요</p>
        <BasicSpringExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const springX = useSpring(0, { 
  stiffness: 100, 
  damping: 10 
});

// 값 변경
springX.set(100);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: useSpring(0, {`{ stiffness, damping }`}) 생성</li>
          <li>2단계: motion.div에 style={`{ x: springX }`} 적용</li>
          <li>3단계: 버튼 클릭 시 springX.set() 호출</li>
          <li>4단계: stiffness/damping 값 조정하여 효과 확인</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <BasicSpringLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 생성</h5>
          <code className="text-sm text-gray-600">
            {`const springX = useSpring(0, {
  stiffness: 100,
  damping: 10
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 값 제어</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div style={{ x: springX }} />

const handleClick = () => {
  springX.set(isActive ? 0 : 200);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}
