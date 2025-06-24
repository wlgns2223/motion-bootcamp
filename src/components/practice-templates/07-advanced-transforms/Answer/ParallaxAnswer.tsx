"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ParallaxAnswer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
      <div ref={containerRef} className="h-64 overflow-y-scroll relative rounded-lg">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"
        />

        <motion.div style={{ y: textY }} className="relative z-10 h-full flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center">패럴랙스 효과! ✨</h2>
        </motion.div>

        <div className="h-[400px] bg-gray-800 relative z-20">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">추가 콘텐츠</h3>
            <p>배경과 텍스트가 다른 속도로 움직이는 패럴랙스 효과를 확인해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
