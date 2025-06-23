"use client";

import { motion } from "motion/react";
import { useState } from "react";
import ParentChildVariantsLiveCoding from "../../live-coding/ParentChildVariantsLiveCoding";

// 강의 2: 부모-자식 Variants
export default function Lesson2_ParentChildVariants() {
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
