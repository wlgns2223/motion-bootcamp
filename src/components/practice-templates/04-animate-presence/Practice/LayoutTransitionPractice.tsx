"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

/**
 * 🔥 실습 2: 레이아웃 전환 애니메이션
 *
 * 목표: 탭을 클릭했을 때 콘텐츠가 부드럽게 전환되는 애니메이션을 만드세요.
 *
 * 요구사항:
 * 1. AnimatePresence를 사용해서 탭 전환 시 애니메이션 적용
 * 2. 새로운 콘텐츠가 나타날 때: x: 20 → 0, opacity: 0 → 1
 * 3. 이전 콘텐츠가 사라질 때: x: -20, opacity: 0
 * 4. mode="wait"를 사용해서 이전 콘텐츠가 사라진 후 새 콘텐츠가 나타나도록 하세요
 */

export default function LayoutTransitionPractice() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "홈", content: "홈 페이지 콘텐츠입니다. 여기에는 사이트의 주요 정보가 표시됩니다." },
    { id: 1, label: "소개", content: "소개 페이지 콘텐츠입니다. 우리 회사에 대한 자세한 정보를 확인할 수 있습니다." },
    { id: 2, label: "연락처", content: "연락처 페이지 콘텐츠입니다. 언제든지 문의하실 수 있습니다." },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">🎯 실습 2: 레이아웃 전환 애니메이션</h3>
        <p className="text-purple-700 text-sm">
          탭을 클릭했을 때 콘텐츠가 부드럽게 전환되는 애니메이션을 만들어보세요.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 탭 버튼들 */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 탭 콘텐츠 */}
        <div className="p-6 h-32">
          {/* 
          TODO: 여기에 AnimatePresence와 motion.div를 사용해서 탭 전환 애니메이션을 구현하세요
          
          힌트:
          1. AnimatePresence에 mode="wait" 추가
          2. motion.div에 key={activeTab} 추가
          3. initial: { x: 20, opacity: 0 }
          4. animate: { x: 0, opacity: 1 }
          5. exit: { x: -20, opacity: 0 }
          */}

          {/* 현재는 애니메이션 없이 바로 전환됩니다 */}
          <div>
            <p className="text-gray-600">{tabs[activeTab].content}</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 힌트</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• AnimatePresence에 mode="wait"를 추가해서 순차적으로 실행하세요</li>
          <li>• motion.div에 key={activeTab}를 추가해서 각 탭을 구분하세요</li>
          <li>• x 좌표를 사용해서 좌우로 슬라이드되는 효과를 만드세요</li>
          <li>• opacity를 함께 사용해서 부드러운 전환을 만드세요</li>
        </ul>
      </div>
    </div>
  );
}
