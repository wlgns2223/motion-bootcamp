"use client";

import { motion, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import RotationTransformLiveCoding from "../../live-coding/RotationTransformLiveCoding";

// RotationTransformExample 컴포넌트
function RotationTransformExample() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-360, 360]);
  const opacity = useTransform(x, [-200, 0, 200], [0.3, 1, 0.3]);

  return (
    <div className="flex justify-center">
      <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center">
        <motion.div
          drag="x"
          style={{ x, rotate, opacity }}
          dragConstraints={{ left: -200, right: 200 }}
          className="w-12 h-12 bg-purple-500 cursor-grab active:cursor-grabbing"
        >
          <div className="w-full h-full bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
            ⭐
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Lesson3_RotationTransform() {
  // 단계별 진행을 위한 상태
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "기본 Motion Value 설정",
      description: "드래그 위치를 추적할 x 값을 생성하고 회전 변환의 기초를 마련합니다.",
      code: `import { useMotionValue, useTransform } from 'motion/react';

// 드래그 위치 추적
const x = useMotionValue(0);

// 이 값은 드래그할 때마다 실시간으로 변경되며
// 다른 변환들의 입력값으로 사용됩니다`,
    },
    {
      name: "회전 변환 매핑",
      description: "x축 이동 거리를 회전 각도로 변환합니다. -200~200px 이동을 -360~360도 회전으로 매핑합니다.",
      code: `const rotate = useTransform(
  x,                    // 입력 값 (위치)
  [-200, 200],         // 입력 범위 (픽셀)
  [-360, 360]          // 출력 범위 (각도)
);

// 왼쪽 끝(-200px) → -360도 (반시계 방향 한 바퀴)
// 중앙(0px) → 0도 (회전 없음)
// 오른쪽 끝(200px) → 360도 (시계 방향 한 바퀴)`,
    },
    {
      name: "투명도 변환 추가",
      description: "중앙에서는 불투명하고 양 끝으로 갈수록 투명해지는 효과를 만듭니다.",
      code: `const opacity = useTransform(
  x,                      // 입력 값 (위치)
  [-200, 0, 200],        // 입력 범위 (3개 포인트)
  [0.3, 1, 0.3]          // 출력 범위 (투명도)
);

// 왼쪽 끝(-200px) → 30% 투명도
// 중앙(0px) → 100% 불투명
// 오른쪽 끝(200px) → 30% 투명도`,
    },
    {
      name: "다중 변환 동시 적용",
      description: "여러 개의 변환을 동시에 적용하여 복합적인 애니메이션 효과를 만듭니다.",
      code: `<motion.div
  drag="x"
  style={{ 
    x,          // 위치 이동
    rotate,     // 회전 변환
    opacity     // 투명도 변환
  }}
  dragConstraints={{ left: -200, right: 200 }}
  className="cursor-grab active:cursor-grabbing"
>
  {/* 드래그 시 위치, 회전, 투명도가 모두 변함 */}
</motion.div>`,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Rotation Transform</h3>

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
        <p className="text-sm text-gray-600 mb-4">드래그 거리에 따라 회전각도와 투명도가 동시에 변합니다</p>
        <RotationTransformExample />
      </div>

      {/* 라이브 코딩 영역 */}
      <div>
        <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
          👨‍💻 강사 실시간 코딩 영역
          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            강사가 직접 코드를 작성합니다
          </span>
        </h4>
        <RotationTransformLiveCoding />
      </div>
    </div>
  );
}
