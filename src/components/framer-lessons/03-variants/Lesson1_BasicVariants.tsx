"use client";

import { motion } from "motion/react";
import { useState } from "react";
import BasicVariantsLiveCoding from "../../live-coding/BasicVariantsLiveCoding";

// 강의 1: 기본 Variants
export default function Lesson1_BasicVariants() {
  const [isVisible, setIsVisible] = useState(true);

  // 기본 variants 정의
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 기본 Variants</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Variants Box
          </motion.div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Toggle Visibility
          </button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const boxVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

<motion.div 
  variants={boxVariants}
  animate={isVisible ? "visible" : "hidden"}
/>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: variants 객체 정의 (hidden, visible 상태)</li>
          <li>2단계: motion.div에 variants 속성 추가</li>
          <li>3단계: animate 속성에 상태 이름 문자열 전달</li>
          <li>4단계: useState로 상태 토글 버튼 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <BasicVariantsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Variants 정의</h5>
          <code className="text-sm text-gray-600">
            {`const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 연결</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  variants={boxVariants}
  animate={isVisible ? "visible" : "hidden"}
/>`}
          </code>
        </div>
      </div>
    </div>
  );
}
