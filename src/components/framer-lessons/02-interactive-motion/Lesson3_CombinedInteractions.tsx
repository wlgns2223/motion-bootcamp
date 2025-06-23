"use client";

import { motion } from "motion/react";
import { useState } from "react";
import CombinedInteractionsLiveCoding from "../../live-coding/CombinedInteractionsLiveCoding";

// 강의 3: 복합 인터랙션
export default function Lesson3_CombinedInteractions() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 복합 인터랙션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white rounded-xl shadow-lg cursor-pointer max-w-xs"
          >
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Interactive Card</h4>
            <p className="text-gray-600 text-sm">Hover and click to see the magic!</p>
          </motion.div>

          <motion.button
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isLiked ? 0 : 0 }}
            className={`text-3xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
          >
            ❤️
          </motion.button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`whileHover={{ scale: 1.05, rotate: 2 }}
whileTap={{ scale: 0.95 }}
onClick={() => setIsLiked(!isLiked)}`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: 카드형 motion.div 구조 생성</li>
          <li>2단계: whileHover로 호버 시 상호작용 추가</li>
          <li>3단계: whileTap으로 클릭 피드백 추가</li>
          <li>4단계: 상태 변경과 애니메이션 조합</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <CombinedInteractionsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 카드 기본</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div
  whileHover={{ 
    scale: 1.05, 
    rotate: 2 
  }}
  className="p-6 bg-white rounded-xl">`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 연동</h5>
          <code className="text-sm text-gray-600">
            {`whileTap={{ scale: 0.95 }}
onClick={() => setIsLiked(!isLiked)}
animate={{ ... }}`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ Hover 애니메이션 구현</li>
          <li>□ Tap/Click 애니메이션 구현</li>
          <li>□ 버튼 피드백 효과</li>
          <li>□ 카드 상호작용</li>
          <li>□ 상태와 애니메이션 조합</li>
        </ul>
      </div>
    </div>
  );
}
