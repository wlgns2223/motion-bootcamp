"use client";

/**
 * 🎯 Basic Variants 전용 라이브 코딩 컴포넌트
 * 강사가 variants 객체 정의와 상태 기반 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function BasicVariantsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 Basic Variants 라이브 코딩</h4>
        <p className="text-blue-600">강사가 직접 variants 객체를 정의하고 상태 기반 애니메이션을 구현합니다</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* 강사가 여기에 Basic Variants motion.div 코드 작성 */}
        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
          Variants Box 코딩
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border-2 border-dashed border-blue-400 shadow-sm text-blue-500 font-semibold">
          Toggle Button 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-blue-600">
          💡 힌트: variants={`{hidden: {...}, visible: {...}}`} + animate={`{상태 ? "visible" : "hidden"}`}
        </p>
      </div>
    </div>
  );
}
