"use client";

import { motion } from "motion/react";
import FadeInLiveCoding from "../../live-coding/FadeInLiveCoding";

export default function Lesson1_FadeIn() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Fade In 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Fade In
          </motion.div>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: 일반 div를 motion.div로 변경</li>
          <li>2단계: initial 속성으로 시작 상태 설정</li>
          <li>3단계: animate 속성으로 최종 상태 정의</li>
          <li>4단계: transition으로 애니메이션 시간 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <FadeInLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 기본 구조</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  initial={{ opacity: 0 }}
  className="...">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`animate={{ opacity: 1 }}
transition={{ duration: 1 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
