"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * 🔥 실습 3: 리스트 애니메이션
 *
 * 목표: 리스트에서 아이템을 추가하거나 삭제할 때 부드러운 애니메이션을 만드세요.
 *
 * 요구사항:
 * 1. AnimatePresence를 사용해서 리스트 아이템 삭제 시 애니메이션 적용
 * 2. 아이템이 추가될 때: scale: 0 → 1, opacity: 0 → 1
 * 3. 아이템이 삭제될 때: scale: 0, opacity: 0, height: 0
 * 4. layout 애니메이션을 사용해서 다른 아이템들이 부드럽게 재배열되도록 하세요
 */

export default function ListAnimationPractice() {
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
        <h3 className="text-lg font-semibold text-green-800 mb-2">🎯 실습 3: 리스트 애니메이션</h3>
        <p className="text-green-700 text-sm">
          리스트에서 아이템을 추가하거나 삭제할 때 부드러운 애니메이션을 만들어보세요.
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
          {/* 
          TODO: 여기에 AnimatePresence와 motion.div를 사용해서 리스트 애니메이션을 구현하세요
          
          힌트:
          1. AnimatePresence로 map을 감싸기
          2. 각 motion.div에 key={item.id} 추가
          3. layout 속성 추가해서 다른 아이템들이 부드럽게 재배열되도록 하기
          4. initial, animate, exit 애니메이션 설정
          5. height를 0으로 만들어서 공간도 사라지게 하기
          */}

          {/* 현재는 애니메이션 없이 바로 추가/삭제됩니다 */}
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.color} text-white p-4 rounded-lg flex items-center justify-between shadow-lg`}
            >
              <span className="font-medium">{item.text}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 px-3 py-1 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 힌트</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• AnimatePresence로 전체 리스트를 감싸세요</li>
          <li>• 각 아이템에 layout 속성을 추가해서 자동 재배열을 활성화하세요</li>
          <li>• exit 애니메이션에서 height: 0를 추가해서 공간도 사라지게 하세요</li>
          <li>• scale과 opacity를 함께 사용해서 부드러운 효과를 만드세요</li>
        </ul>
      </div>
    </div>
  );
}
