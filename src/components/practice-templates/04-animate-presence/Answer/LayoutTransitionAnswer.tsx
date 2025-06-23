"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * ✅ 정답: 레이아웃 전환 애니메이션
 */

export default function LayoutTransitionAnswer() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "홈", content: "홈 페이지 콘텐츠입니다. 여기에는 사이트의 주요 정보가 표시됩니다." },
    { id: 1, label: "소개", content: "소개 페이지 콘텐츠입니다. 우리 회사에 대한 자세한 정보를 확인할 수 있습니다." },
    { id: 2, label: "연락처", content: "연락처 페이지 콘텐츠입니다. 언제든지 문의하실 수 있습니다." },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <h3 className="text-lg font-semibold text-green-800 mb-2">✅ 정답: 레이아웃 전환 애니메이션</h3>
        <p className="text-green-700 text-sm">탭을 클릭했을 때 콘텐츠가 부드럽게 전환되는 애니메이션입니다.</p>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600">{tabs[activeTab].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🔧 구현 포인트</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>
            • <code>AnimatePresence</code>에 <code>mode="wait"</code>를 추가했습니다
          </li>
          <li>
            • <code>motion.div</code>에 <code>key={activeTab}</code>를 추가했습니다
          </li>
          <li>
            • <code>x</code> 좌표를 사용해서 좌우 슬라이드 효과를 만들었습니다
          </li>
          <li>
            • <code>opacity</code>와 함께 사용해서 부드러운 전환을 구현했습니다
          </li>
        </ul>
      </div>
    </div>
  );
}
