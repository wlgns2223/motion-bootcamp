"use client";

import { motion } from "motion/react";
import HoverEffectsLiveCoding from "../../live-coding/HoverEffectsLiveCoding";

// 강의 1: Hover 애니메이션
export default function Lesson1_HoverEffects() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Hover 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Scale
          </motion.div>

          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Rotate
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-24 h-24 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Lift
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileHover={{ scale: 1.1 }}
whileHover={{ rotate: 15 }}
whileHover={{ y: -10 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 생성</li>
          <li>2단계: whileHover 속성 추가</li>
          <li>3단계: cursor-pointer 클래스 추가</li>
          <li>4단계: transition으로 애니메이션 세밀 조정</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <HoverEffectsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 설정</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  whileHover={{ scale: 1.1 }}
  className="... cursor-pointer">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 세밀 조정</h5>
          <code className="text-sm text-gray-600">
            {`transition={{ 
  type: "spring", 
  stiffness: 300 
}}`}
          </code>
        </div>
      </div>
    </div>
  );
}
