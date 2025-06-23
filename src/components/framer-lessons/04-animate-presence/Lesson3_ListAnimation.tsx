"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ListAnimationLiveCoding from "../../live-coding/ListAnimationLiveCoding";

// 강의 3: 리스트 애니메이션
export default function Lesson3_ListAnimation() {
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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 리스트 애니메이션</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <div className="flex flex-col items-center mb-4">
          <button
            onClick={addItem}
            className="mb-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Add Item
          </button>
          <div className="flex flex-wrap gap-2 justify-center min-h-[60px] items-center">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-400 text-white rounded-lg cursor-pointer hover:bg-purple-500"
                  onClick={() => removeItem(item)}
                >
                  <span>Item {item}</span>
                  <span className="text-xs">×</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <p className="text-sm text-gray-600 mt-2">클릭하여 아이템을 제거하세요</p>
        </div>
        <div className="bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`<AnimatePresence>
  {items.map(item => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    />
  ))}
</AnimatePresence>`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: 리스트 상태와 추가/제거 함수 구현</li>
          <li>2단계: map 함수로 리스트 렌더링</li>
          <li>3단계: 각 아이템에 고유한 key 설정</li>
          <li>4단계: scale 기반 나타남/사라짐 애니메이션</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ListAnimationLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 리스트 관리</h5>
          <code className="text-sm text-gray-600">
            {`const [items, setItems] = useState([1,2,3]);
{items.map(item => (
  <motion.div key={item} />
))}`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: Scale 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`initial={{ scale: 0 }}
animate={{ scale: 1 }}
exit={{ scale: 0 }}`}
          </code>
        </div>
      </div>
    </div>
  );
}
