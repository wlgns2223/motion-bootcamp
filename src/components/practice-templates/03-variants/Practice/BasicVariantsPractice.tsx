"use client";

import { useState } from "react";

export default function BasicVariantsPractice() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: hidden과 visible 상태를 가진 variants를 정의하고 적용해보세요</p>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isVisible ? "숨기기" : "보이기"}
        </button>

        {/* TODO: motion.div에 variants 적용 */}
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
          Variants!
          {/* 힌트: variants 객체 정의하고 animate 속성 사용 */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: variants 정의하고 적용
const boxVariants = {
  hidden: { opacity: ?, x: ?, scale: ? },
  visible: { opacity: ?, x: ?, scale: ? }
};

<motion.div
  variants={boxVariants}
  animate={isVisible ? "?" : "?"}
>`}
        </code>
      </div>
    </div>
  );
}
