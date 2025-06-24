"use client";

import React from "react";

// 스크롤 트리거드 Practice 컴포넌트 (컨테이너 내부 스크롤 기준)
export default function ScrollTriggeredPractice() {
  // TODO: useRef와 useState를 사용하여 컨테이너와 표시 상태 관리
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // TODO: useEffect로 Intersection Observer를 설정하여 컨테이너 내부 스크롤 감지
  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;
  //
  //   // Intersection Observer를 컨테이너 기준으로 설정
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
  //         if (entry.isIntersecting) {
  //           setVisibleItems(prev => new Set([...prev, cardIndex]));
  //         }
  //       });
  //     },
  //     {
  //       root: container, // 컨테이너를 root로 설정
  //       rootMargin: '0px',
  //       threshold: 0.3 // 30% 이상 보이면 트리거
  //     }
  //   );
  //
  //   // 모든 카드 요소를 관찰 대상으로 추가
  //   const cards = container.querySelectorAll('[data-card]');
  //   cards.forEach(card => observer.observe(card));
  //
  //   return () => {
  //     cards.forEach(card => observer.unobserve(card));
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 컨테이너 내부 스크롤로 트리거되는 카드들을 만들어보세요</p>

      <div
        // TODO: ref={containerRef} 추가
        className="h-96 overflow-y-auto bg-white rounded-lg p-4"
      >
        <div className="space-y-8">
          {/* TODO: 충분한 스크롤 공간을 위한 추가 여백 */}
          {/* <div className="h-32"></div> */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              // TODO: motion.div로 변경하고 다음 속성들 추가:
              // data-card
              // data-index={i}
              // initial={{ opacity: 0, x: -50, scale: 0.8 }}
              // animate={
              //   visibleItems.has(i)
              //     ? { opacity: 1, x: 0, scale: 1 }
              //     : { opacity: 0, x: -50, scale: 0.8 }
              // }
              // transition={{
              //   duration: 0.6,
              //   delay: visibleItems.has(i) ? Array.from(visibleItems).indexOf(i) * 0.1 : 0,
              //   ease: "easeOut"
              // }}
              className="bg-gradient-to-r from-blue-400 to-green-400 p-6 rounded-lg text-white shadow-lg"
            >
              <h3 className="font-bold">카드 {i}</h3>
              <p>TODO: 컨테이너 내부 스크롤 트리거드 애니메이션 구현하기</p>
              {/* TODO: 상태 표시 추가 */}
              {/* <p className="text-sm opacity-80">
                {visibleItems.has(i) ? '✅ 애니메이션 실행됨' : '⏳ 대기 중...'}
              </p> */}
            </div>
          ))}
          {/* TODO: 충분한 스크롤 공간을 위한 추가 여백 */}
          {/* <div className="h-32"></div> */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <div className="mb-2 text-yellow-400 font-semibold">💡 구현 힌트:</div>
        <div className="space-y-1 text-sm">
          <div>
            1. <span className="text-blue-300">useRef</span>로 컨테이너 참조
          </div>
          <div>
            2. <span className="text-green-300">useState</span>로 보이는 카드들 관리
          </div>
          <div>
            3. <span className="text-purple-300">IntersectionObserver</span>로 스크롤 감지
          </div>
          <div>
            4. <span className="text-pink-300">motion.div</span>로 애니메이션 적용
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          핵심: <code className="bg-gray-700 px-1 rounded">root: container</code>로 컨테이너 내부 스크롤 기준 설정
        </div>
      </div>
    </div>
  );
}
