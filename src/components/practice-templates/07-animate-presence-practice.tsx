"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "@/components/Navigation";
import ConditionalRenderingPractice from "./04-animate-presence/Practice/ConditionalRenderingPractice";
import ConditionalRenderingAnswer from "./04-animate-presence/Answer/ConditionalRenderingAnswer";
import LayoutTransitionPractice from "./04-animate-presence/Practice/LayoutTransitionPractice";
import LayoutTransitionAnswer from "./04-animate-presence/Answer/LayoutTransitionAnswer";
import ListAnimationPractice from "./04-animate-presence/Practice/ListAnimationPractice";
import ListAnimationAnswer from "./04-animate-presence/Answer/ListAnimationAnswer";
import ModalAnimationPractice from "./04-animate-presence/Practice/ModalAnimationPractice";
import ModalAnimationAnswer from "./04-animate-presence/Answer/ModalAnimationAnswer";

export default function AnimatePresencePractice() {
  const [activeSection, setActiveSection] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const sections = [
    {
      id: 0,
      title: "조건부 렌더링",
      practice: ConditionalRenderingPractice,
      answer: ConditionalRenderingAnswer,
    },
    {
      id: 1,
      title: "레이아웃 전환",
      practice: LayoutTransitionPractice,
      answer: LayoutTransitionAnswer,
    },
    {
      id: 2,
      title: "리스트 애니메이션",
      practice: ListAnimationPractice,
      answer: ListAnimationAnswer,
    },
    {
      id: 3,
      title: "모달 애니메이션",
      practice: ModalAnimationPractice,
      answer: ModalAnimationAnswer,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navigation title="7. AnimatePresence 실습" />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 실습 헤더 */}
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"
          >
            <span className="text-4xl">🔥</span>
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">AnimatePresence 실습</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            요소의 등장과 퇴장 애니메이션을 직접 구현해보세요. 각 실습을 완료한 후 정답을 확인할 수 있습니다.
          </p>
        </motion.header>

        {/* 탭 네비게이션 */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* 정답 보기 토글 */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => setShowAnswers(!showAnswers)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                showAnswers ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAnswers ? "✅ 정답 보는 중" : "💡 정답 보기"}
            </motion.button>
          </div>
        </motion.nav>

        {/* 콘텐츠 섹션 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSection}-${showAnswers}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(showAnswers ? sections[activeSection].answer : sections[activeSection].practice)}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 실습 가이드 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 실습 가이드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">코드 작성</h3>
                  <p className="text-gray-600 text-sm">TODO 주석을 참고해서 AnimatePresence 코드를 작성하세요</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">테스트</h3>
                  <p className="text-gray-600 text-sm">버튼을 클릭해서 애니메이션이 잘 작동하는지 확인하세요</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">정답 확인</h3>
                  <p className="text-gray-600 text-sm">완료 후 정답 보기 버튼을 클릭해서 비교해보세요</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">다음 실습</h3>
                  <p className="text-gray-600 text-sm">각 탭을 클릭해서 다른 실습도 진행해보세요</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
