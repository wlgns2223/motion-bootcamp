"use client";

import { motion } from "motion/react";
import TapEffectsLiveCoding from "../../live-coding/TapEffectsLiveCoding";

// 강의 2: Tap 애니메이션
export default function Lesson2_TapEffects() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Tap 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold"
          >
            Button
          </motion.button>

          <motion.div
            whileTap={{ scale: 0.95, rotate: 5 }}
            whileHover={{ scale: 1.05 }}
            className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
          >
            Tap
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileTap={{ scale: 0.9 }}
whileTap={{ scale: 0.95, rotate: 5 }}
whileHover={{ scale: 1.05 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: motion.button 또는 motion.div로 구조 생성</li>
          <li>2단계: whileTap 속성으로 클릭 시 애니메이션 정의</li>
          <li>3단계: whileHover와 조합해서 더 풍부한 상호작용 제공</li>
          <li>4단계: 적절한 크기 조절로 눌린 느낌 표현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <TapEffectsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 클릭 반응</h5>
          <code className="text-sm text-gray-600">
            {`<motion.button
  whileTap={{ scale: 0.9 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 조합 효과</h5>
          <code className="text-sm text-gray-600">
            {`whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95, rotate: 5 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
