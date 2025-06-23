"use client";

/**
 * 🎯 Fade In 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 Fade In 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function FadeInLiveCoding() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 bg-orange-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-orange-800 mb-2">🚧 Fade In 애니메이션 라이브 코딩</h4>
        <p className="text-orange-600">강사가 직접 motion.div로 Fade In 효과를 구현합니다</p>
      </div>

      <div className="flex justify-center">
        {/* 강사가 여기에 Fade In motion.div 코드 작성 */}
        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-orange-500 font-bold border-2 border-dashed border-orange-400 shadow-sm">
          Fade In 코딩 영역
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-orange-600">
          💡 힌트: initial={`{{ opacity: 0 }}`} → animate={`{{ opacity: 1 }}`}
        </p>
      </div>
    </div>
  );
}
