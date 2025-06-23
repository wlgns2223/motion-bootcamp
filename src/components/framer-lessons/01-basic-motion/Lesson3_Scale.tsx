"use client";

import { motion } from "motion/react";
import ScaleLiveCoding from "../../live-coding/ScaleLiveCoding";

export default function Lesson3_Scale() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Scale 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Scale
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ type: "spring", stiffness: 300 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 생성</li>
          <li>2단계: initial로 scale: 0 설정 (완전히 작은 상태)</li>
          <li>3단계: animate로 scale: 1 설정 (원래 크기)</li>
          <li>4단계: spring transition으로 탄성 효과 추가</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ScaleLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 설정</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  initial={{ scale: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3단계: 애니메이션</h5>
          <code className="text-sm text-gray-600">{`animate={{ scale: 1 }}`}</code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">4단계: Spring 효과</h5>
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
