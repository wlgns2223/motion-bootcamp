"use client";

/**
 * 🎯 Scroll Triggered 전용 라이브 코딩 컴포넌트
 * 강사가 스크롤에 따라 나타났다 사라지는 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ScrollTriggeredLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 Scroll Triggered 라이브 코딩</h4>
        <p className="text-green-600">강사가 직접 스크롤에 따라 나타났다 사라지는 애니메이션을 구현합니다</p>
      </div>

      <div className="space-y-8">
        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-400">
          <p className="text-green-600">상단 컨텐츠 (스크롤 가이드)</p>
        </div>

        {/* 강사가 여기에 scroll-triggered motion.div 코드 작성 */}
        <div className="h-32 bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-green-400 text-green-500 font-bold">
          Scroll Triggered 요소 코딩 영역
        </div>

        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-green-400">
          <p className="text-green-600">하단 컨텐츠 (스크롤 가이드)</p>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-green-600">
          💡 힌트: useScroll({`{ target: ref, offset: ["start end", "end start"] }`}) + opacity, scale, y
        </p>
      </div>
    </div>
  );
}
