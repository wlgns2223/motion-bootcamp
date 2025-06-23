"use client";

/**
 * 🎯 Mouse Following Spring 전용 라이브 코딩 컴포넌트
 * 강사가 마우스를 따라가는 스프링 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function MouseFollowingLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 Mouse Following Spring 라이브 코딩</h4>
        <p className="text-purple-600">
          강사가 직접 마우스 움직임에 따라 부드럽게 따라오는 스프링 애니메이션을 구현합니다
        </p>
      </div>

      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-dashed border-purple-400 overflow-hidden">
        {/* 강사가 여기에 mouse following motion.div 코드 작성 */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-500 font-bold border-2 border-dashed border-purple-400 shadow-sm">
          🖱️
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">마우스 추적 코딩 영역</div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-purple-600">
          💡 힌트: onMouseMove + springX.set(e.clientX) + springY.set(e.clientY)
        </p>
      </div>
    </div>
  );
}
