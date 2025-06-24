"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// 스크롤 링크드 Answer 컴포넌트 (컨테이너 내부 스크롤 기준)
export default function ScrollLinkedAnswer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: containerRef, // 컨테이너 내부 스크롤 기준
  });

  // 스크롤 진행률(0-1)을 다양한 값으로 변환
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <h4 className="text-md font-semibold mb-3 text-green-700">✅ 완성된 예시:</h4>
      <p className="text-sm text-green-600 mb-4">컨테이너 내부 스크롤에 연동되어 연속적으로 변화하는 애니메이션</p>

      <div ref={containerRef} className="h-64 overflow-y-scroll border-2 border-gray-200 rounded p-4 relative bg-white">
        {/* 스크롤할 수 있는 충분한 콘텐츠 */}
        <div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 rounded mb-4 flex items-center justify-center">
          <p className="text-gray-600 text-sm">스크롤하면서 아래 박스 변화를 관찰해보세요</p>
        </div>

        <motion.div
          style={{ y, opacity, scale, rotate }}
          className="bg-gradient-to-br from-orange-400 to-red-400 rounded-lg p-6 text-white text-center shadow-lg"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">스크롤 링크드</h3>
            <p className="text-sm">연속적으로 변화합니다</p>
            <div className="text-xs mt-3 space-y-1 opacity-75">
              <div>Y: {y.get()?.toFixed(1)}px</div>
              <div>Opacity: {opacity.get()?.toFixed(2)}</div>
              <div>Scale: {scale.get()?.toFixed(2)}</div>
              <div>Rotate: {rotate.get()?.toFixed(0)}°</div>
            </div>
          </div>
        </motion.div>

        {/* 더 많은 스크롤 공간 */}
        <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-100 rounded mt-4 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-2">계속 스크롤해보세요</p>
            <p className="text-xs text-gray-500">모든 변화를 관찰할 수 있습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}
