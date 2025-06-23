"use client";

/**
 * 🎯 Multiple Transforms 전용 라이브 코딩 컴포넌트
 * 강사가 하나의 값으로 여러 속성을 동시에 제어하는 복합 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function MultipleTransformsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-pink-300 rounded-lg p-6 bg-pink-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-pink-800 mb-2">🚧 Multiple Transforms 라이브 코딩</h4>
        <p className="text-pink-600">
          강사가 직접 하나의 progress 값으로 scale, rotate, borderRadius를 동시에 제어하는 애니메이션을 구현합니다
        </p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {/* 강사가 여기에 multiple transforms motion.div 코드 작성 */}
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-pink-500 font-bold border-2 border-dashed border-pink-400 shadow-sm cursor-pointer">
          복합 코딩
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border-2 border-dashed border-pink-400 shadow-sm text-pink-500 font-semibold">
          Click 버튼 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-pink-600">💡 힌트: progress.set() + scale, rotate, borderRadius 동시 변환</p>
      </div>
    </div>
  );
}
