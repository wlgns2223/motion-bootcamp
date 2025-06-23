"use client";

/**
 * 🎯 Spring Comparison 전용 라이브 코딩 컴포넌트
 * 강사가 다양한 스프링 설정값 비교 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function SpringComparisonLiveCoding() {
  return (
    <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6 bg-indigo-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-indigo-800 mb-2">🚧 Spring Comparison 라이브 코딩</h4>
        <p className="text-indigo-600">강사가 직접 stiffness, damping 값을 다르게 설정한 3개 스프링을 비교합니다</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <span className="w-16 text-sm text-indigo-700">Soft:</span>
            <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center border-2 border-dashed border-indigo-400">
              <div className="w-6 h-6 bg-white rounded-full ml-1 flex items-center justify-center text-xs font-bold text-indigo-500 border border-indigo-300">
                S
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-16 text-sm text-indigo-700">Normal:</span>
            <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center border-2 border-dashed border-indigo-400">
              <div className="w-6 h-6 bg-white rounded-full ml-1 flex items-center justify-center text-xs font-bold text-indigo-500 border border-indigo-300">
                N
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-16 text-sm text-indigo-700">Stiff:</span>
            <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center border-2 border-dashed border-indigo-400">
              <div className="w-6 h-6 bg-white rounded-full ml-1 flex items-center justify-center text-xs font-bold text-indigo-500 border border-indigo-300">
                T
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="px-6 py-2 bg-white rounded-lg border-2 border-dashed border-indigo-400 shadow-sm text-indigo-500 font-semibold inline-block">
            Compare Springs 버튼 코딩
          </div>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-indigo-600">💡 힌트: stiffness(50, 100, 200) + damping(20, 10, 15) 조합</p>
      </div>
    </div>
  );
}
