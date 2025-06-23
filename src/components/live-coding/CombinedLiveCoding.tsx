"use client";

/**
 * 🎯 복합 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 복합 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function CombinedLiveCoding() {
  return (
    <div className="border-2 border-dashed border-rose-300 rounded-lg p-6 bg-rose-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-rose-800 mb-2">🚧 복합 애니메이션 라이브 코딩</h4>
        <p className="text-rose-600">강사가 직접 motion.div로 순차적 복합 애니메이션을 구현합니다</p>
      </div>

      <div className="flex justify-center space-x-4">
        {/* 강사가 여기에 복합 애니메이션 motion.div 코드 작성 */}
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-rose-500 text-sm font-bold border-2 border-dashed border-rose-400 shadow-sm">
          Box 1 코딩
        </div>
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-rose-500 text-sm font-bold border-2 border-dashed border-rose-400 shadow-sm">
          Box 2 코딩
        </div>
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-rose-500 text-sm font-bold border-2 border-dashed border-rose-400 shadow-sm">
          Box 3 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-rose-600">
          💡 힌트: initial={`{{ opacity: 0, x: -50, scale: 0.8 }}`} + delay: 0/0.2/0.4
        </p>
      </div>
    </div>
  );
}
