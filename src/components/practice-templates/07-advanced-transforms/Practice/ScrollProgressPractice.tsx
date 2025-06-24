"use client";

import React from "react";

export default function ScrollProgressPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 스크롤 진행도에 따라 상단 바가 채워지는 인디케이터를 만들어보세요
      </p>

      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300">
          {/* TODO: motion.div로 변경하고 scaleX 적용 */}
        </div>
        <div className="h-48 overflow-y-scroll bg-white rounded-lg p-4 space-y-4">
          <p className="text-sm text-gray-600">스크롤해보세요!</p>
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              스크롤 콘텐츠 {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 스크롤 프로그레스 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useRef</span>로 컨테이너 참조
          </div>
          <div>
            2. <span className="text-green-300">useScroll</span>로 스크롤 진행률 가져오기
          </div>
          <div>
            3. <span className="text-purple-300">useTransform</span>로 scaleX 변환
          </div>
          <div>
            4. <span className="text-pink-300">motion.div</span>에 style 적용
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">scaleX: [0, 1]</code>로 프로그레스 바 구현
        </div>
      </div>
    </div>
  );
}
