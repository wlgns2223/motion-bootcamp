"use client";

import { motion } from "motion/react";
import { useState } from "react";

/**
 * 실습 3: Variants
 *
 * 목표: variants를 사용하여 복잡한 애니메이션을 체계적으로 관리해보세요
 *
 * 실습 과제:
 * 1. 기본 variants 정의하기
 * 2. 부모-자식 variants 전파
 * 3. staggerChildren으로 순차 애니메이션
 * 4. 조건부 애니메이션 상태 관리
 * 5. 복잡한 variants 시스템 구축
 */

export default function VariantsPractice() {
  const [isVisible, setIsVisible] = useState(true);
  const [listVisible, setListVisible] = useState(false);
  const [cardState, setCardState] = useState("closed");

  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          실습 3: Variants
        </h2>
        <p className="text-gray-600">
          variants를 활용하여 체계적인 애니메이션 시스템을 구축해보세요
        </p>
      </div>

      {/* 실습 1: 기본 Variants */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 1: 기본 Variants 정의
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: hidden과 visible 상태를 가진 variants를 정의하고 버튼으로
          토글해보세요
        </p>

        {/* TODO: variants 정의하고 적용 */}
        {/* 
        const boxVariants = {
          hidden: { opacity: ?, x: ?, scale: ? },
          visible: { opacity: ?, x: ?, scale: ? }
        };
        */}

        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-32 h-32 bg-blue-500 rounded-lg"
            // TODO: motion.div로 변경하고 variants 적용
            // variants={boxVariants}
            // animate={isVisible ? "visible" : "hidden"}
          />

          <button
            onClick={() => setIsVisible(!isVisible)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: variants를 정의하고 사용해보세요
const boxVariants = {
  hidden: { 
    opacity: ?, 
    x: ?, 
    scale: ? 
  },
  visible: { 
    opacity: ?, 
    x: ?, 
    scale: ?,
    transition: { duration: ? }
  }
};

<motion.div
  variants={boxVariants}
  animate={isVisible ? "visible" : "hidden"}
/>`}
          </code>
        </div>
      </div>

      {/* 실습 2: 부모-자식 Variants 전파 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 2: 부모-자식 Variants 전파
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 부모 컨테이너와 자식 아이템들에 대한 variants를 만들고
          연동해보세요
        </p>

        {/* TODO: 컨테이너와 아이템 variants 정의 */}
        {/* 
        const containerVariants = {
          hidden: { opacity: ? },
          visible: { 
            opacity: ?,
            transition: { staggerChildren: ? }
          }
        };
        
        const itemVariants = {
          hidden: { y: ?, opacity: ? },
          visible: { y: ?, opacity: ? }
        };
        */}

        <div className="flex flex-col items-center space-y-4">
          <div
            className="flex space-x-4"
            // TODO: motion.div로 변경하고 containerVariants 적용
          >
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold"
                // TODO: motion.div로 변경하고 itemVariants 적용
              >
                {num}
              </div>
            ))}
          </div>

          <button
            onClick={() => setListVisible(!listVisible)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            {listVisible ? "Hide List" : "Show List"}
          </button>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 부모-자식 variants를 구현해보세요
const containerVariants = {
  hidden: { opacity: ? },
  visible: { 
    opacity: ?,
    transition: { 
      staggerChildren: ?,
      delayChildren: ?
    }
  }
};

const itemVariants = {
  hidden: { y: ?, opacity: ? },
  visible: { 
    y: ?, 
    opacity: ?,
    transition: { type: "spring" }
  }
};`}
          </code>
        </div>
      </div>

      {/* 실습 3: 복잡한 상태 관리 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 3: 복잡한 상태 관리
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: closed, open, expanded 3가지 상태를 가진 카드 컴포넌트를
          만들어보세요
        </p>

        {/* TODO: 3가지 상태를 가진 variants 정의 */}
        {/* 
        const cardVariants = {
          closed: { scale: ?, height: ?, opacity: ? },
          open: { scale: ?, height: ?, opacity: ? },
          expanded: { scale: ?, height: ?, opacity: ? }
        };
        */}

        <div className="flex flex-col items-center space-y-4">
          <div
            className="w-64 bg-purple-500 rounded-lg p-6 text-white"
            // TODO: motion.div로 변경하고 cardVariants 적용
            // animate={cardState}
          >
            <h4 className="text-xl font-bold mb-2">상태 카드</h4>
            <p className="text-purple-100">
              {cardState === "closed" && "카드가 닫혀있습니다"}
              {cardState === "open" && "카드가 열려있습니다"}
              {cardState === "expanded" && "카드가 확장되었습니다!"}
            </p>
            {cardState === "expanded" && (
              <div className="mt-4 p-4 bg-purple-400 rounded">
                <p>추가 컨텐츠가 표시됩니다!</p>
              </div>
            )}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCardState("closed")}
              className={`px-4 py-2 rounded ${
                cardState === "closed"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Closed
            </button>
            <button
              onClick={() => setCardState("open")}
              className={`px-4 py-2 rounded ${
                cardState === "open"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setCardState("expanded")}
              className={`px-4 py-2 rounded ${
                cardState === "expanded"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Expanded
            </button>
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 3가지 상태 variants를 구현해보세요
const cardVariants = {
  closed: { 
    scale: ?, 
    height: ?, 
    opacity: ?,
    transition: { duration: ? }
  },
  open: { 
    scale: ?, 
    height: ?, 
    opacity: ?,
    transition: { duration: ? }
  },
  expanded: { 
    scale: ?, 
    height: ?, 
    opacity: ?,
    transition: { duration: ? }
  }
};`}
          </code>
        </div>
      </div>

      {/* 실습 4: 순차 애니메이션 리스트 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 4: 순차 애니메이션 리스트
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 여러 개의 리스트 아이템이 순차적으로 나타나는 애니메이션을
          만들어보세요
        </p>

        <div className="space-y-4">
          {/* TODO: 리스트 컨테이너와 아이템 variants 구현 */}
          <div
            className="space-y-3"
            // TODO: motion.div로 변경하고 listVariants 적용
          >
            {[
              "첫 번째 아이템",
              "두 번째 아이템",
              "세 번째 아이템",
              "네 번째 아이템",
              "다섯 번째 아이템",
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-orange-100 border-l-4 border-orange-500 rounded-lg"
                // TODO: motion.div로 변경하고 listItemVariants 적용
              >
                <h4 className="font-semibold text-orange-800">{item}</h4>
                <p className="text-orange-600 text-sm">
                  순차적으로 나타나는 리스트
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 순차 애니메이션을 구현해보세요
const listVariants = {
  hidden: { opacity: ? },
  visible: {
    opacity: ?,
    transition: {
      staggerChildren: ?,
      delayChildren: ?
    }
  }
};

const listItemVariants = {
  hidden: { 
    x: ?, 
    opacity: ? 
  },
  visible: { 
    x: ?, 
    opacity: ?,
    transition: {
      type: "spring",
      stiffness: ?
    }
  }
};`}
          </code>
        </div>
      </div>

      {/* 실습 5: 복합 Variants 시스템 */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          실습 5: 복합 Variants 시스템 챌린지
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          TODO: 여러 계층의 컴포넌트가 연동되는 복잡한 variants 시스템을
          만들어보세요
        </p>

        {/* TODO: 복잡한 variants 시스템 구현 */}
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl">
          <div
            className="text-center space-y-6"
            // TODO: 최상위 컨테이너 variants
          >
            <div
              className="text-3xl font-bold text-indigo-800"
              // TODO: 제목 variants
            >
              🎨 복합 애니메이션
            </div>

            <div
              className="grid grid-cols-2 gap-4"
              // TODO: 그리드 컨테이너 variants
            >
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="h-20 bg-white rounded-lg shadow-md flex items-center justify-center font-bold text-2xl text-indigo-600"
                  // TODO: 그리드 아이템 variants
                >
                  {num}
                </div>
              ))}
            </div>

            <div
              className="w-16 h-16 bg-indigo-500 rounded-full mx-auto"
              // TODO: 원형 요소 variants (다른 타이밍)
            />
          </div>
        </div>

        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// TODO: 복합 variants 시스템을 구현해보세요
// 여러 계층의 컴포넌트가 서로 다른 타이밍으로 애니메이션
// 창의적인 조합을 시도해보세요!`}
          </code>
        </div>
      </div>

      {/* 추가 챌린지 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">
          🎯 추가 챌린지
        </h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• variants에 조건부 로직 추가하기</li>
          <li>• when 옵션을 활용한 타이밍 제어</li>
          <li>• 동적으로 variants 상태 변경하기</li>
          <li>• 무한 루프 애니메이션 만들기</li>
          <li>• 복잡한 키프레임과 variants 조합</li>
        </ul>
      </div>

      {/* 참고 자료 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          📚 참고 자료
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>
            <strong>Variants 구조:</strong> variants=&#123;&#123; state1:
            &#123;...&#125;, state2: &#123;...&#125; &#125;&#125;
          </p>
          <p>
            <strong>부모-자식 전파:</strong> 자동으로 같은 키의 variants가
            전파됨
          </p>
          <p>
            <strong>순차 애니메이션:</strong> staggerChildren, delayChildren
          </p>
          <p>
            <strong>상태 관리:</strong> animate 속성으로 variants 키 전달
          </p>
        </div>
      </div>
    </div>
  );
}
