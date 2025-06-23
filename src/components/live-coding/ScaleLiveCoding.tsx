"use client";

/**
 * 🎯 Scale 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 Scale 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ScaleLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 Scale 애니메이션 라이브 코딩</h4>
        <p className="text-purple-600">강사가 직접 motion.div로 Scale 효과를 구현합니다</p>
      </div>

      <div className="flex justify-center">
        {/* 강사가 여기에 Scale motion.div 코드 작성 */}
        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-purple-500 font-bold border-2 border-dashed border-purple-400 shadow-sm">
          Scale 코딩 영역
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-purple-600">
          💡 힌트: initial={`{{ scale: 0 }}`} → animate={`{{ scale: 1 }}`} + spring transition
        </p>
      </div>
    </div>
  );
}
