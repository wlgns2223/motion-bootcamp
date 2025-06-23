"use client";

import { motion } from "motion/react";
import { useState } from "react";
import BasicVariantsLiveCoding from "../live-coding/BasicVariantsLiveCoding";
import ParentChildVariantsLiveCoding from "../live-coding/ParentChildVariantsLiveCoding";
import StaggerAnimationLiveCoding from "../live-coding/StaggerAnimationLiveCoding";

/**
 * 🎥 Lesson 3: Variants (통합 강의)
 *
 * 핵심 개념:
 * 1. variants - 애니메이션 상태를 객체로 정의
 * 2. 부모-자식 간 variants 전파
 * 3. staggerChildren - 자식 요소들의 지연 애니메이션
 * 4. delayChildren - 자식 애니메이션의 전체 지연
 */

export default function VariantsMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 3: Variants</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Variants를 사용해 복잡한 애니메이션을 체계적으로 관리하는 방법을 배워보세요. 강사와 함께 부모-자식 전파와
          stagger 애니메이션을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: 기본 Variants */}
      <Lesson1_BasicVariants />

      {/* 강의 2: 부모-자식 Variants */}
      <Lesson2_ParentChildVariants />

      {/* 강의 3: Stagger 애니메이션 */}
      <Lesson3_StaggerAnimation />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>variants</strong>: 애니메이션 상태를 객체로 정의하여 재사용 가능
          </li>
          <li>
            • <strong>부모-자식 전파</strong>: 부모의 variants가 자식에게 자동으로 전달
          </li>
          <li>
            • <strong>staggerChildren</strong>: 자식 요소들의 애니메이션을 순차적으로 실행
          </li>
          <li>
            • <strong>delayChildren</strong>: 모든 자식 애니메이션의 시작을 지연
          </li>
          <li>• animate 속성에 문자열로 상태 이름을 전달하여 variants 활용</li>
        </ul>
      </div>
    </div>
  );
}

// 강의 1: 기본 Variants
function Lesson1_BasicVariants() {
  const [isVisible, setIsVisible] = useState(true);

  // 기본 variants 정의
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: 기본 Variants</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
          >
            Variants Box
          </motion.div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Toggle Visibility
          </button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const boxVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

<motion.div 
  variants={boxVariants}
  animate={isVisible ? "visible" : "hidden"}
/>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: variants 객체 정의 (hidden, visible 상태)</li>
          <li>2단계: motion.div에 variants 속성 추가</li>
          <li>3단계: animate 속성에 상태 이름 문자열 전달</li>
          <li>4단계: useState로 상태 토글 버튼 구현</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <BasicVariantsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Variants 정의</h5>
          <code className="text-sm text-gray-600">
            {`const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 연결</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div 
  variants={boxVariants}
  animate={isVisible ? "visible" : "hidden"}
/>`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: 부모-자식 Variants
function Lesson2_ParentChildVariants() {
  const [listVisible, setListVisible] = useState(false);

  // 컨테이너 variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  // 자식 아이템 variants
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: 부모-자식 Variants</h3>

      {/* 예제 시연 */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-green-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center gap-4 mb-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={listVisible ? "visible" : "hidden"}
            className="w-full max-w-md"
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Menu Items</h4>
            <motion.div variants={itemVariants} className="p-3 bg-green-100 rounded-lg mb-2">
              📱 모바일 앱
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-200 rounded-lg mb-2">
              💻 웹 개발
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-300 rounded-lg mb-2">
              🎨 UI/UX 디자인
            </motion.div>
            <motion.div variants={itemVariants} className="p-3 bg-green-400 rounded-lg">
              📊 데이터 분석
            </motion.div>
          </motion.div>
          <button
            onClick={() => setListVisible(!listVisible)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Toggle Menu
          </button>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const containerVariants = {
  visible: {
    transition: { delayChildren: 0.2, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <h4 className="font-semibold text-green-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-green-700 space-y-1 text-sm">
          <li>1단계: 부모 컨테이너 variants 정의 (delayChildren, staggerChildren 포함)</li>
          <li>2단계: 자식 아이템 variants 정의</li>
          <li>3단계: 부모에 variants와 animate 설정</li>
          <li>4단계: 자식들에게 variants 설정 (animate는 자동으로 전파됨)</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ParentChildVariantsLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: Variants 정의</h5>
          <code className="text-sm text-gray-600">
            {`const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 부모-자식 연결</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div variants={containerVariants} animate="visible">
  <motion.div variants={itemVariants}>
    Item 1
  </motion.div>
</motion.div>`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: Stagger 애니메이션
function Lesson3_StaggerAnimation() {
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
