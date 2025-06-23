"use client";

import { motion } from "motion/react";
import CombinedLiveCoding from "../../live-coding/CombinedLiveCoding";

export default function Lesson4_Combined() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: 복합 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">✨ 완성된 예제</h4>
        <div className="flex justify-center space-x-4 mb-4">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 1
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-24 h-24 bg-orange-600 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 2
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-24 h-24 bg-orange-700 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          >
            Box 3
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// 순차적 복합 애니메이션
initial={{ opacity: 0, x: -50, scale: 0.8 }}
animate={{ opacity: 1, x: 0, scale: 1 }}
transition={{ delay: 0/0.2/0.4, duration: 0.6 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-orange-700 space-y-1 text-sm">
          <li>1단계: 여러 개의 motion.div 생성</li>
          <li>2단계: 각각에 복합 initial 상태 설정 (opacity, x, scale)</li>
          <li>3단계: 동일한 animate 상태로 설정</li>
          <li>4단계: delay를 다르게 해서 순차적 애니메이션 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <CombinedLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 복합 상태</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  initial={{ 
    opacity: 0, 
    x: -50, 
    scale: 0.8 
  }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 순차 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ 
  opacity: 1, 
  x: 0, 
  scale: 1 
}}
transition={{ 
  delay: 0/0.2/0.4,
  duration: 0.6 
}}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ Fade In 애니메이션 구현</li>
          <li>□ Slide In 애니메이션 구현</li>
          <li>□ Scale 애니메이션 구현</li>
          <li>□ 복합 애니메이션 구현</li>
          <li>□ delay를 활용한 순차적 애니메이션</li>
        </ul>
      </div>
    </div>
  );
}
