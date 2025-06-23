"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";

const lessons = [
  {
    id: "basic",
    title: "1. Basic Motion",
    description: "motion 컴포넌트의 기본 사용법",
    demoPath: "/basic-demo",
    practicePath: "/basic-practice",
    category: "기초",
  },
  {
    id: "interactive",
    title: "2. Interactive Motion",
    description: "사용자 상호작용과 애니메이션",
    demoPath: "/interactive-demo",
    practicePath: "/interactive-practice",
    category: "기초",
  },
  {
    id: "variants",
    title: "3. Variants",
    description: "복잡한 애니메이션 관리",
    demoPath: "/variants-demo",
    practicePath: "/variants-practice",
    category: "기초",
  },
  {
    id: "animate-presence",
    title: "4. AnimatePresence",
    description: "요소의 등장과 퇴장 애니메이션",
    demoPath: "/animate-presence-demo",
    practicePath: "/animate-presence-practice",
    category: "기초",
  },
  {
    id: "motion-values",
    title: "5. Motion Values",
    description: "useMotionValue & useTransform",
    demoPath: "/motion-values-demo",
    practicePath: "/motion-values-practice",
    category: "고급",
  },
  {
    id: "springs",
    title: "6. Spring Animations",
    description: "useSpring으로 자연스러운 애니메이션",
    demoPath: "/springs-demo",
    practicePath: "/springs-practice",
    category: "고급",
  },
  {
    id: "advanced",
    title: "7. Advanced Transforms",
    description: "스크롤 & 3D 변환",
    demoPath: "/advanced-demo",
    practicePath: "/advanced-practice",
    category: "고급",
  },
];

export default function Home() {
  const router = useRouter();

  const handleLessonClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* 상단 네비게이션 */}
      <Navigation title="강의 데모" />

      {/* 헤더 */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Framer Motion 실습 강의</h1>
            <p className="text-gray-600 text-lg">
              CSS Module에서 Framer Motion로 변환하는 실전 강의와 실습을 통해 현대적인 웹 애니메이션을 마스터하세요
            </p>
          </div>
        </div>
      </motion.header>

      {/* 카드 그리드 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* 카드 헤더 - 카테고리별 색상 */}
              <div
                className={`h-32 flex items-center justify-center text-6xl ${
                  lesson.category === "기초"
                    ? "bg-gradient-to-br from-blue-400 to-blue-600"
                    : "bg-gradient-to-br from-purple-400 to-purple-600"
                }`}
              >
                {lesson.category === "기초" ? "📚" : "🚀"}
              </div>

              {/* 카드 내용 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{lesson.description}</p>

                {/* 카테고리 뱃지 */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      lesson.category === "기초" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {lesson.category}
                  </span>
                </div>

                {/* 버튼 그룹 */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLessonClick(lesson.demoPath)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    강의 보기
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLessonClick(lesson.practicePath)}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    실습하기
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
