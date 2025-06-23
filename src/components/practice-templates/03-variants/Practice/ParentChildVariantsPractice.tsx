"use client";

import { useState } from "react";

export default function ParentChildVariantsPractice() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 부모-자식 variants를 정의하고 staggerChildren 효과를 적용해보세요
      </p>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          {isOpen ? "닫기" : "열기"}
        </button>

        {/* TODO: 부모-자식 variants 적용 */}
        {isOpen && (
          <div className="space-y-2">
            {["첫 번째", "두 번째", "세 번째", "네 번째"].map((item, index) => (
              <div key={index} className="px-4 py-2 bg-green-100 rounded-lg text-green-800 font-medium">
                {item} 아이템
                {/* 힌트: containerVariants, itemVariants, staggerChildren 사용 */}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 부모-자식 variants 정의
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
  hidden: { opacity: ?, y: ? },
  visible: { opacity: ?, y: ? }
};`}
        </code>
      </div>
    </div>
  );
}
