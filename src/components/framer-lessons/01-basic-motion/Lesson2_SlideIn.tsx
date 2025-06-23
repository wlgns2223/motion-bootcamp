"use client";

import { motion } from "motion/react";
import SlideInLiveCoding from "../../live-coding/SlideInLiveCoding";

export default function Lesson2_SlideIn() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Slide In 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Slide In
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: motion.div로 기본 구조 설정</li>
          <li>2단계: initial로 시작 위치와 투명도 설정</li>
          <li>3단계: animate로 최종 위치와 투명도 정의</li>
          <li>4단계: transition으로 애니메이션 시간 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SlideInLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 시작 상태</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  initial={{ x: -100, opacity: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 최종 상태</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
