"use client";

import { motion } from "motion/react";
import FadeInLiveCoding from "../live-coding/FadeInLiveCoding";
import SlideInLiveCoding from "../live-coding/SlideInLiveCoding";
import ScaleLiveCoding from "../live-coding/ScaleLiveCoding";
import CombinedLiveCoding from "../live-coding/CombinedLiveCoding";
import Lesson1_FadeIn from "./01-basic-motion/Lesson1_FadeIn";
import Lesson2_SlideIn from "./01-basic-motion/Lesson2_SlideIn";
import Lesson3_Scale from "./01-basic-motion/Lesson3_Scale";
import Lesson4_Combined from "./01-basic-motion/Lesson4_Combined";

/**
 * 🎥 Lesson 1: Basic Motion Component (통합 강의)
 *
 * 핵심 개념:
 * 1. motion.div - 일반 HTML 요소를 애니메이션 가능한 요소로 변환
 * 2. initial - 컴포넌트의 초기 상태 설정
 * 3. animate - 애니메이션될 최종 상태 설정
 * 4. transition - 애니메이션의 지속시간, 지연시간, 이징 등 설정
 */

export default function BasicMotion() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 1: Basic Motion Component</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          motion 컴포넌트의 기본 사용법을 배워보세요. 강사와 함께 initial, animate, transition 속성을 이용해 기본
          애니메이션을 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Fade In 애니메이션 */}
      <Lesson1_FadeIn />

      {/* 강의 2: Slide In 애니메이션 */}
      <Lesson2_SlideIn />

      {/* 강의 3: Scale 애니메이션 */}
      <Lesson3_Scale />

      {/* 강의 4: 복합 애니메이션 */}
      <Lesson4_Combined />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>motion.div</strong>: 일반 HTML 요소를 애니메이션 가능하게 만듭니다
          </li>
          <li>
            • <strong>initial</strong>: 컴포넌트가 처음 렌더링될 때의 상태를 정의합니다
          </li>
          <li>
            • <strong>animate</strong>: 애니메이션이 완료되었을 때의 최종 상태를 정의합니다
          </li>
          <li>
            • <strong>transition</strong>: 애니메이션의 duration, delay, ease 등을 설정합니다
          </li>
          <li>• 여러 속성을 동시에 애니메이션할 수 있습니다 (opacity, x, y, scale, rotate 등)</li>
        </ul>
      </div>
    </div>
  );
}
