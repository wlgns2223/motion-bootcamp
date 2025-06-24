"use client";

import React from "react";

export default function ParallaxPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 배경과 텍스트가 다른 속도로 움직이는 패럴랙스 효과를 만들어보세요
      </p>

      <div className="h-64 overflow-y-scroll relative rounded-lg bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
          {/* TODO: motion.div로 변경하고 패럴랙스 적용 */}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">
            패럴랙스 효과! ✨{/* TODO: motion.div로 변경하고 다른 속도 적용 */}
          </h2>
        </div>

        <div className="h-[300px] bg-gray-800 relative z-20 p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">추가 콘텐츠</h3>
          <p>배경과 텍스트가 다른 속도로 움직여야 합니다.</p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 패럴랙스 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useScroll</span>로 스크롤 진행률 가져오기
          </div>
          <div>
            2. <span className="text-green-300">useTransform</span>로 다른 속도 변환
          </div>
          <div>
            3. <span className="text-purple-300">배경</span>: 느린 속도 (0% → 50%)
          </div>
          <div>
            4. <span className="text-pink-300">텍스트</span>: 빠른 속도 (0% → 200%)
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">style=&#123;&#123; y: transformedValue &#125;&#125;</code>로
          적용
        </div>
      </div>
    </div>
  );
}
