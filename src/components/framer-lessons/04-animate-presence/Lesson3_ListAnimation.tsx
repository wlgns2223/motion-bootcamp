"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ListAnimationLiveCoding from "../../live-coding/ListAnimationLiveCoding";

export default function Lesson3_ListAnimation() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [nextId, setNextId] = useState(4);

  const addItem = () => {
    setItems([...items, nextId]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item !== id));
  };

  const steps = [
    {
      name: "리스트 상태 관리",
      description: "동적으로 추가/제거되는 리스트를 관리할 상태와 함수들을 설정합니다.",
      code: `import { useState } from 'react';

// 리스트 아이템들과 다음 ID 관리
const [items, setItems] = useState([1, 2, 3]);
const [nextId, setNextId] = useState(4);

// 아이템 추가 함수
const addItem = () => {
  setItems([...items, nextId]);
  setNextId(nextId + 1);
};

// 아이템 제거 함수
const removeItem = (id) => {
  setItems(items.filter(item => item !== id));
};`,
    },
    {
      name: "AnimatePresence 설정",
      description: "리스트 아이템들의 등장/퇴장 애니메이션을 위해 AnimatePresence로 감쌉니다.",
      code: `import { AnimatePresence } from 'motion/react';

<AnimatePresence>
  {items.map((item) => (
    <motion.div key={item}>
      {/* 각 리스트 아이템 */}
    </motion.div>
  ))}
</AnimatePresence>

// AnimatePresence가 각 아이템의 mount/unmount를 감지하여
// 자동으로 exit 애니메이션을 실행합니다`,
    },
    {
      name: "고유한 key 설정",
      description: "React가 각 아이템을 올바르게 추적할 수 있도록 고유한 key를 설정합니다.",
      code: `{items.map((item) => (
  <motion.div
    key={item}  // 각 아이템의 고유 식별자
    // ... 애니메이션 속성들
  >
    Item {item}
  </motion.div>
))}

// key는 React가 어떤 아이템이 추가/제거/변경되었는지
// 효율적으로 판단하는 데 필요합니다`,
    },
    {
      name: "Scale 애니메이션 적용",
      description: "아이템이 나타날 때와 사라질 때 크기 변화 애니메이션을 적용합니다.",
      code: `<motion.div
  key={item}
  initial={{ opacity: 0, scale: 0 }}  // 투명하고 크기 0에서 시작
  animate={{ opacity: 1, scale: 1 }}  // 불투명하고 원래 크기로
  exit={{ opacity: 0, scale: 0 }}     // 다시 투명하고 크기 0으로
  transition={{ duration: 0.2 }}      // 빠른 애니메이션
>
  {/* 부드러운 크기 변화로 자연스러운 등장/퇴장 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: 리스트 애니메이션</h3>

      {/* 단계별 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentStep === index ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}. {step.name}
          </button>
        ))}
      </div>

      {/* 현재 단계 설명 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-purple-800">
          단계 {currentStep + 1}: {steps[currentStep].name}
        </h4>
        <p className="text-purple-700 mb-4">{steps[currentStep].description}</p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
          <pre className="text-sm overflow-x-auto">
            <code>{steps[currentStep].code}</code>
          </pre>
        </div>
      </div>

      {/* 완성된 예제 */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">✨ 완성된 예제</h4>
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
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <ListAnimationLiveCoding />
      </div>
    </div>
  );
}
