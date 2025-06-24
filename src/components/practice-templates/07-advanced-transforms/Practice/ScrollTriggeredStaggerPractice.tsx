"use client";

import React from "react";

// 스크롤 트리거드 스테거 Practice 컴포넌트
export default function ScrollTriggeredStaggerPractice() {
  // TODO: useScroll 훅과 target을 사용하세요
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"]
  // });

  const items = [
    { title: "HTML", icon: "🌐", color: "from-red-400 to-red-600" },
    { title: "CSS", icon: "🎨", color: "from-blue-400 to-blue-600" },
    { title: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
    { title: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { title: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { title: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-700" },
  ];

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 스크롤 위치에 따라 카드들이 순차적으로 나타나는 스테거 애니메이션을 만들어보세요
      </p>

      <div className="h-96 overflow-y-scroll bg-white rounded-lg p-4">
        <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-8">
          <p className="text-gray-600">스크롤하면서 아래 카드들을 관찰해보세요</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              // TODO: motion.div로 변경하고 useTransform을 사용하여 opacity, y, scale 적용
              className={`bg-gradient-to-br ${item.color} p-4 rounded-lg text-white text-center`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-sm">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg flex items-center justify-center mt-8">
          <p className="text-gray-600">TODO: 스테거 애니메이션 구현하기</p>
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 스테거 애니메이션 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useScroll</span>로 target과 offset 설정
          </div>
          <div>
            2. <span className="text-green-300">useTransform</span>로 각 요소마다 다른 타이밍
          </div>
          <div>
            3. <span className="text-purple-300">i * 0.15</span>로 순차적 지연 효과
          </div>
          <div>
            4. <span className="text-pink-300">opacity, y, scale</span> 동시 변화
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">[i * 0.15, (i + 1) * 0.15]</code>로 순차 트리거
        </div>
      </div>
    </div>
  );
}
