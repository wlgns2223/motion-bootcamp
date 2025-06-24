"use client";

import { useState } from "react";

/**
 * 🎯 리스트 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 리스트 아이템의 추가/제거 애니메이션에만 집중할 수 있도록 최적화된 환경
 */
export default function ListAnimationLiveCoding() {
  const [items, setItems] = useState([1, 2, 3]);
  const [nextId, setNextId] = useState(4);

  const addItem = () => {
    setItems([...items, nextId]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-purple-600 text-sm">여기서 리스트 애니메이션을 직접 구현해보세요</p>
      </div>

      {/* 실습 영역 */}
      <div className="flex flex-col items-center space-y-4">
        {/* 아이템 추가 버튼 */}
        <button
          onClick={addItem}
          className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Add Item
        </button>

        {/* TODO: AnimatePresence와 리스트 애니메이션 구현 */}
        <div className="flex flex-wrap gap-2 justify-center min-h-[60px] items-center border-2 border-dashed border-purple-200 rounded-lg p-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 px-3 py-2 bg-purple-400 text-white rounded-lg cursor-pointer hover:bg-purple-500"
              onClick={() => removeItem(item)}
            >
              <span>Item {item}</span>
              <span className="text-xs">×</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-purple-600">클릭하여 아이템을 제거하세요</p>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-6 bg-purple-100 border border-purple-200 rounded p-4">
        <h5 className="font-semibold text-purple-800 mb-3">💡 구현해야 할 내용</h5>
        <div className="space-y-3 text-purple-700 text-sm">
          <div>
            <strong>1단계:</strong> AnimatePresence import 및 설정
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {items.map((item) => (
    <motion.div key={item}>
      {/* 각 리스트 아이템 */}
    </motion.div>
  ))}
</AnimatePresence>`}
            </code>
          </div>

          <div>
            <strong>2단계:</strong> 각 아이템에 motion.div와 고유한 key 적용
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`{items.map((item) => (
  <motion.div
    key={item}  // 고유한 식별자
    onClick={() => removeItem(item)}
  >
    Item {item}
  </motion.div>
))}`}
            </code>
          </div>

          <div>
            <strong>3단계:</strong> Scale 기반 등장/퇴장 애니메이션 추가
            <code className="block mt-1 bg-gray-800 text-gray-100 p-2 rounded text-xs">
              {`initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0 }}
transition={{ duration: 0.2 }}`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
