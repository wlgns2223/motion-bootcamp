"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ✅ 정답: 리스트 애니메이션
 */

export default function ListAnimationAnswer() {
  const [items, setItems] = useState([
    { id: 1, text: "React 공부하기", color: "bg-blue-500" },
    { id: 2, text: "Framer Motion 익히기", color: "bg-purple-500" },
    { id: 3, text: "실습 프로젝트 만들기", color: "bg-green-500" },
  ]);
  const [nextId, setNextId] = useState(4);

  const addItem = () => {
    const newItem = {
      id: nextId,
      text: `새로운 할 일 ${nextId}`,
      color: `bg-${["red", "yellow", "pink", "indigo", "cyan"][Math.floor(Math.random() * 5)]}-500`,
    };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">✅ 정답: 리스트 애니메이션</h3>
        <p className="text-green-700 text-sm">
          리스트에서 아이템을 추가하거나 삭제할 때 부드러운 애니메이션이 적용됩니다.
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={addItem}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          할 일 추가
        </button>

        <div className="space-y-2">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`${item.color} text-white p-4 rounded-lg flex items-center justify-between shadow-lg`}
              >
                <span className="font-medium">{item.text}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 px-3 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors"
                >
                  삭제
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🔧 구현 포인트</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>
            • <code>AnimatePresence</code>로 전체 리스트를 감쌌습니다
          </li>
          <li>
            • <code>layout</code> 속성을 추가해서 자동 재배열을 활성화했습니다
          </li>
          <li>
            • <code>exit</code>에 <code>height: 0</code>을 추가해서 공간도 사라지게 했습니다
          </li>
          <li>
            • <code>scale</code>과 <code>opacity</code>를 함께 사용해서 부드러운 효과를 만들었습니다
          </li>
        </ul>
      </div>
    </div>
  );
}
