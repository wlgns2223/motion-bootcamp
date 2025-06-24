"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollProgressAnswer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div className="relative">
        <motion.div style={{ scaleX }} className="absolute top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-10" />
        <div ref={containerRef} className="h-48 overflow-y-scroll bg-white rounded-lg p-4 space-y-4">
          <p className="text-sm text-gray-600">스크롤해보세요! 위의 파란 바가 진행도를 보여줍니다.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg">
              스크롤 콘텐츠 {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
