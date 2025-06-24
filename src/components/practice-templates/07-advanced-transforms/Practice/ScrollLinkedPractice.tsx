"use client";

import React from "react";

// 스크롤 링크드 Practice 컴포넌트
export default function ScrollLinkedPractice() {
  // TODO: useScroll 훅으로 scrollY 값을 가져오세요
  // const { scrollY } = useScroll();

  // TODO: useTransform으로 y, opacity, scale 값을 연결하세요
  // const y = useTransform(scrollY, [0, 300], [0, -150]);
  // const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  // const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
      <h4 className="text-md font-semibold mb-3 text-green-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-green-600 mb-4">TODO: 페이지 스크롤에 연동되는 연속적인 애니메이션을 만들어보세요</p>

      <div className="h-64 overflow-hidden border-2 border-gray-200 rounded p-4 relative">
        <div
          // TODO: motion.div로 변경하고 style={{ y, opacity, scale }} 추가
          className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded flex items-center justify-center text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">실습: 스크롤 링크드</h3>
            <p>TODO: 스크롤 연동 애니메이션 구현</p>
            <p className="text-sm mt-2 opacity-75">y, opacity, scale 변환 추가하기</p>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 스크롤 링크드 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useScroll</span>로 scrollY 값 가져오기
          </div>
          <div>
            2. <span className="text-green-300">useTransform</span>로 여러 속성 동시 변환
          </div>
          <div>
            3. <span className="text-purple-300">y, opacity, scale</span> 연속적 변화
          </div>
          <div>
            4. <span className="text-pink-300">motion.div</span>에 style 객체로 적용
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">style=&#123;&#123; y, opacity, scale &#125;&#125;</code>로
          복합 효과
        </div>
      </div>
    </div>
  );
}
