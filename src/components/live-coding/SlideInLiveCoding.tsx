"use client";

/**
 * 🎯 Slide In 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 Slide In 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function SlideInLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 Slide In 애니메이션 라이브 코딩</h4>
        <p className="text-green-600">강사가 직접 motion.div로 Slide In 효과를 구현합니다</p>
      </div>

      <div className="flex justify-center">
        {/* 강사가 여기에 Slide In motion.div 코드 작성 */}
        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-green-500 font-bold border-2 border-dashed border-green-400 shadow-sm">
          Slide In 코딩 영역
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-green-600">
          💡 힌트: initial={`{{ x: -100, opacity: 0 }}`} → animate={`{{ x: 0, opacity: 1 }}`}
        </p>
      </div>
    </div>
  );
}
