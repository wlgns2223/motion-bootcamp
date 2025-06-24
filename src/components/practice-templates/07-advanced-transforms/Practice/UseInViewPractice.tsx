"use client";

import React from "react";

// useInView 훅을 활용한 스크롤 트리거드 Practice 컴포넌트
export default function UseInViewPractice() {
  // TODO: useRef를 사용하여 컨테이너와 각 카드들의 ref 생성
  // const containerRef = useRef<HTMLDivElement>(null);
  // const cardRefs = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  // ];

  // TODO: useInView 훅을 사용하여 각 카드의 visibility 감지
  // const cardInViews = cardRefs.map((ref) =>
  //   useInView(ref, {
  //     root: containerRef, // 컨테이너를 root로 설정
  //     once: true, // 한번만 트리거
  //     margin: "0px 0px -30% 0px", // 70% 보이면 트리거
  //   })
  // );

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: useInView 훅으로 스크롤 트리거드 애니메이션을 만들어보세요</p>

      <div
        // TODO: ref={containerRef} 추가
        className="h-96 overflow-y-auto bg-white rounded-lg p-4"
      >
        <div className="space-y-8">
          {/* TODO: 충분한 스크롤 공간을 위한 추가 여백 */}
          {/* <div className="h-32"></div> */}

          {[1, 2, 3, 4, 5].map((i, index) => (
            <div
              key={i}
              // TODO: motion.div로 변경하고 다음 속성들 추가:
              // ref={cardRefs[index]}
              // initial={{ opacity: 0, y: 50, rotateX: -30 }}
              // animate={
              //   cardInViews[index]
              //     ? { opacity: 1, y: 0, rotateX: 0 }
              //     : { opacity: 0, y: 50, rotateX: -30 }
              // }
              // transition={{
              //   duration: 0.8,
              //   delay: index * 0.15,
              //   ease: [0.25, 0.46, 0.45, 0.94]
              // }}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 p-6 rounded-lg text-white shadow-xl"
            >
              <h3 className="font-bold">카드 {i}</h3>
              <p>TODO: useInView 훅으로 트리거되는 애니메이션 구현하기</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400" />
                <span className="text-sm opacity-80">⏳ Waiting...</span>
                {/* TODO: 상태 표시 추가 */}
                {/* <div
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    cardInViews[index] ? "bg-green-300" : "bg-gray-400"
                  }`}
                />
                <span className="text-sm opacity-80">
                  {cardInViews[index] ? "✅ In View" : "⏳ Waiting..."}
                </span> */}
              </div>
            </div>
          ))}

          {/* TODO: 충분한 스크롤 공간을 위한 추가 여백 */}
          {/* <div className="h-32"></div> */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 useInView 훅 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useRef</span>로 컨테이너 + 각 카드 참조
          </div>
          <div>
            2. <span className="text-green-300">useInView</span>로 각 카드의 visibility 감지
          </div>
          <div>
            3. <span className="text-purple-300">root</span> 옵션으로 컨테이너 기준 설정
          </div>
          <div>
            4. <span className="text-pink-300">once</span> 옵션으로 한번만 트리거
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">useInView(ref, &#123;root, once, margin&#125;)</code>
        </div>
      </div>
    </div>
  );
}
