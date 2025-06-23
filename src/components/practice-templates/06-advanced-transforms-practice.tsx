"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * 실습 6: useScroll & Scroll-based Animations
 *
 * 목표: 스크롤 기반 애니메이션을 마스터해보세요
 *
 * 실습 과제:
 * 1. 스크롤 프로그레스 인디케이터 만들기
 * 2. 복합 스크롤 애니메이션 구현하기
 */

export default function AdvancedTransformsPractice() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 6: useScroll & Scroll-based Animations
        </h2>
        <p className="text-gray-600">스크롤 기반 애니메이션을 구현해보세요</p>
      </div>

      {/* 실습 1: 스크롤 프로그레스 인디케이터 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 스크롤 프로그레스 인디케이터
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 컨테이너 내부 스크롤 진행도에 따라 상단 바가 채워지는
          인디케이터를 만들어보세요
        </p>

        {/* TODO: 스크롤 프로그레스 구현 */}
        {/* 
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll({ container: containerRef });
        const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
        */}

        <div className="relative">
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
            // TODO: motion.div로 변경하고 scaleX 적용
            // style={{ scaleX }}
          />
          <div
            className="h-48 overflow-y-scroll bg-gray-50 rounded-lg p-4 space-y-4"
            // TODO: ref 추가
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="h-16 bg-white rounded shadow p-4">
                <h4 className="font-semibold">Content Block {i + 1}</h4>
                <p className="text-sm text-gray-600">
                  스크롤하면 상단의 프로그레스 바가 채워집니다.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 스크롤 프로그레스를 구현해보세요
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({ 
  container: ? 
});
const scaleX = useTransform(scrollYProgress, [?, ?], [?, ?]);

<motion.div 
  style={{ scaleX }} 
  className="progress-bar"
/>`}
          </code>
        </div>
      </div>

      {/* 실습 2: 복합 스크롤 애니메이션 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 복합 스크롤 애니메이션 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 스크롤 위치에 따라 여러 요소가 서로 다른 타이밍으로 나타나고
          사라지는 복합 애니메이션을 만들어보세요
        </p>

        {/* TODO: 복합 스크롤 애니메이션 구현 */}
        {/* 
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"]
        });
        
        const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
        const scale1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);
        const y1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
        
        const opacity2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0]);
        const scale2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0.3, 1.2, 1.2, 0.3]);
        const rotate2 = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [180, 0, 0, -180]);
        */}

        <div className="space-y-8">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">
              스크롤하여 아래 요소들이 나타나는 것을 확인하세요
            </p>
          </div>

          <div
            className="space-y-6"
            // TODO: ref 추가
          >
            <div
              className="h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              // TODO: motion.div로 변경하고 첫 번째 애니메이션 적용
              // style={{ opacity: opacity1, scale: scale1, y: y1 }}
            >
              First Element
            </div>

            <div
              className="h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              // TODO: motion.div로 변경하고 두 번째 애니메이션 적용
              // style={{ opacity: opacity2, scale: scale2, rotate: rotate2 }}
            >
              Second Element
            </div>
          </div>

          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">더 스크롤하면 요소들이 사라집니다</p>
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 복합 스크롤 애니메이션을 구현해보세요
const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ?,
  offset: ["start end", "end start"]
});

// 첫 번째 요소 - 부드럽게 나타나고 사라짐
const opacity1 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);
const scale1 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);
const y1 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);

// 두 번째 요소 - 다른 타이밍과 회전 효과
const opacity2 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);
const scale2 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);
const rotate2 = useTransform(scrollYProgress, [?, ?, ?, ?], [?, ?, ?, ?]);`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6">
        <h3 className="text-lg font-semibold text-indigo-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• 스크롤 방향에 따라 다른 애니메이션 적용하기</li>
          <li>• 페이지 전체 스크롤과 개별 요소 스크롤 조합하기</li>
          <li>• 여러 요소의 연쇄적인 스크롤 애니메이션</li>
          <li>• 스크롤 속도에 따라 애니메이션 강도 조절하기</li>
          <li>• 텍스트 애니메이션과 스크롤 효과 조합하기</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>useScroll:</strong> useScroll(&#123; container, target,
            offset &#125;)
          </p>
          <p>
            <strong>scrollYProgress:</strong> 0-1 범위의 스크롤 진행도
          </p>
          <p>
            <strong>offset:</strong> ["start end", "end start"] 등으로 트리거
            범위 설정
          </p>
          <p>
            <strong>scaleX:</strong> 프로그레스 바의 핵심 변환
          </p>
          <p>
            <strong>target:</strong> 특정 요소를 대상으로 한 스크롤 추적
          </p>
        </div>
      </div>
    </div>
  );
}
