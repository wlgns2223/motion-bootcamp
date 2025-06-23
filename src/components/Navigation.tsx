"use client";

import { motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationProps {
  title?: string;
  showModeToggle?: boolean;
  currentMode?: "demo" | "practice";
  onModeToggle?: () => void;
}

const lessons = [
  { id: "basic", title: "1. Basic Motion", demoPath: "/basic-demo", practicePath: "/basic-practice" },
  {
    id: "interactive",
    title: "2. Interactive Motion",
    demoPath: "/interactive-demo",
    practicePath: "/interactive-practice",
  },
  { id: "variants", title: "3. Variants", demoPath: "/variants-demo", practicePath: "/variants-practice" },
  {
    id: "motion-values",
    title: "4. Motion Values",
    demoPath: "/motion-values-demo",
    practicePath: "/motion-values-practice",
  },
  { id: "springs", title: "5. Spring Animations", demoPath: "/springs-demo", practicePath: "/springs-practice" },
  { id: "advanced", title: "6. Advanced Transforms", demoPath: "/advanced-demo", practicePath: "/advanced-practice" },
];

export default function Navigation({
  title = "메인",
  showModeToggle = false,
  currentMode = "demo",
  onModeToggle,
}: NavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

  const handleBackToMain = () => {
    router.push("/");
  };

  const handlePageNavigation = (path: string) => {
    router.push(path);
    setIsDropdownOpen(null);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 왼쪽: Framer Motion 로고 */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToMain}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="text-2xl">⚡</span>
              <span className="text-lg font-bold">Framer Motion</span>
            </motion.button>
          </div>

          {/* 가운데: 현재 페이지 */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBackToMain}
              className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-colors ${
                pathname === "/" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>🏠</span>
              <span>메인</span>
            </motion.button>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700 font-medium">{title}</span>
          </div>

          {/* 오른쪽: 드롭다운 메뉴들 */}
          <div className="flex items-center space-x-4">
            {showModeToggle && onModeToggle && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{currentMode === "demo" ? "강의 모드" : "실습 모드"}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onModeToggle}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    currentMode === "practice"
                      ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {currentMode === "demo" ? "✏️ 실습으로 전환" : "📚 강의로 전환"}
                </motion.button>
              </div>
            )}

            {/* 강의 드롭다운 */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDropdownOpen(isDropdownOpen === "demo" ? null : "demo")}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg text-sm font-medium transition-colors text-blue-700"
              >
                <span>�</span>
                <span>강의</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen === "demo" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* 강의 드롭다운 메뉴 */}
              {isDropdownOpen === "demo" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                >
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 px-3 py-2">기초 과정 강의</div>
                    {lessons.slice(0, 3).map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handlePageNavigation(lesson.demoPath)}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-blue-50 rounded transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">강의</span>
                      </button>
                    ))}

                    <div className="text-xs font-semibold text-gray-500 px-3 py-2 mt-2">고급 과정 강의</div>
                    {lessons.slice(3).map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handlePageNavigation(lesson.demoPath)}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-purple-50 rounded transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">강의</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* 실습 드롭다운 */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDropdownOpen(isDropdownOpen === "practice" ? null : "practice")}
                className="flex items-center space-x-2 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg text-sm font-medium transition-colors text-green-700"
              >
                <span>✏️</span>
                <span>실습</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen === "practice" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>

              {/* 실습 드롭다운 메뉴 */}
              {isDropdownOpen === "practice" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                >
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-500 px-3 py-2">기초 과정 실습</div>
                    {lessons.slice(0, 3).map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handlePageNavigation(lesson.practicePath)}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-green-50 rounded transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">실습</span>
                      </button>
                    ))}

                    <div className="text-xs font-semibold text-gray-500 px-3 py-2 mt-2">고급 과정 실습</div>
                    {lessons.slice(3).map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handlePageNavigation(lesson.practicePath)}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-orange-50 rounded transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700">{lesson.title}</span>
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">실습</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 드롭다운 외부 클릭 시 닫기 */}
      {isDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(null)} />}
    </motion.nav>
  );
}
