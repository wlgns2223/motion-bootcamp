"use client";

import { motion } from "motion/react";
import { useState } from "react";
import StaggerAnimationLiveCoding from "../../live-coding/StaggerAnimationLiveCoding";

// 강의 3: Stagger 애니메이션
export default function Lesson3_StaggerAnimation() {
  const [cardsVisible, setCardsVisible] = useState(false);

  // 카드 컨테이너 variants
  const cardContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  // 개별 카드 variants
  const cardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.5,
      rotateX: -45,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 120,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Stagger 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            key={cardsVisible ? "visible" : "hidden"}
            variants={cardContainerVariants}
            initial="hidden"
            animate={cardsVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl relative z-10 min-h-[200px]"
          >
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg border-2 border-purple-300"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2 text-purple-800">Fast Performance</h4>
              <p className="text-purple-600 text-sm">Lightning fast animations</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg border-2 border-blue-300"
            >
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold mb-2 text-blue-800">Beautiful Design</h4>
              <p className="text-blue-600 text-sm">Stunning visual effects</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg border-2 border-green-300"
            >
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2 text-green-800">Easy to Use</h4>
              <p className="text-green-600 text-sm">Simple and intuitive API</p>
            </motion.div>
          </motion.div>
          <button
            onClick={() => {
              console.log("Button clicked! Current state:", cardsVisible);
              setCardsVisible(!cardsVisible);
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold shadow-lg"
          >
            {cardsVisible ? "🫥 Hide Cards" : "✨ Show Cards"} (Current: {cardsVisible ? "Visible" : "Hidden"})
          </button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const cardContainerVariants = {
  visible: {
    transition: { 
      delayChildren: 0.3, 
      staggerChildren: 0.15 
    }
  }
};

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: { y: 0, opacity: 1, scale: 1 }
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: 카드 컨테이너 variants 정의 (staggerChildren으로 지연 설정)</li>
          <li>2단계: 개별 카드 variants 정의 (spring transition 포함)</li>
          <li>3단계: Grid 레이아웃으로 카드 배치</li>
          <li>4단계: 각 카드에 variants 적용하여 순차적 애니메이션 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <StaggerAnimationLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Stagger 설정</h5>
          <code className="text-sm text-gray-600">
            {`const cardContainerVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
};`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 카드 variants</h5>
          <code className="text-sm text-gray-600">
            {`const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: { 
    y: 0, opacity: 1, scale: 1,
    transition: { type: "spring" }
  }
};`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ 기본 variants 정의 및 사용</li>
          <li>□ 부모-자식 variants 전파</li>
          <li>□ delayChildren으로 시작 지연</li>
          <li>□ staggerChildren으로 순차 애니메이션</li>
          <li>□ spring transition으로 자연스러운 움직임</li>
        </ul>
      </div>
    </div>
  );
}
