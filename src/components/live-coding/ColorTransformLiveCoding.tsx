"use client";

/**
 * 🎯 Color Transform 전용 라이브 코딩 컴포넌트
 * 강사가 useTransform으로 색상 변환 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ColorTransformLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 Color Transform 라이브 코딩</h4>
        <p className="text-green-600">강사가 직접 드래그 위치에 따라 색상이 변하는 애니메이션을 구현합니다</p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-400">
          {/* 강사가 여기에 color transform motion.div 코드 작성 */}
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-green-500 font-bold border-2 border-dashed border-green-400 shadow-sm">
            색상 코딩
          </div>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-green-600">
          💡 힌트: useTransform(x, [-200, 0, 200], ["#ef4444", "#3b82f6", "#10b981"])
        </p>
      </div>
    </div>
  );
}
