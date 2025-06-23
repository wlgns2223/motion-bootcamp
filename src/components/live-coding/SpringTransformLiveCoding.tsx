"use client";

/**
 * 🎯 Spring Transform 전용 라이브 코딩 컴포넌트
 * 강사가 스프링과 useTransform을 조합한 복합 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function SpringTransformLiveCoding() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 bg-orange-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-orange-800 mb-2">🚧 Spring + Transform 라이브 코딩</h4>
        <p className="text-orange-600">
          강사가 직접 스프링과 useTransform을 조합해 scale, rotate, opacity를 동시에 제어합니다
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {/* 강사가 여기에 spring + transform motion.div 코드 작성 */}
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-orange-500 font-bold border-2 border-dashed border-orange-400 shadow-sm cursor-pointer">
          변환
        </div>
        <div className="px-6 py-2 bg-white rounded-lg border-2 border-dashed border-orange-400 shadow-sm text-orange-500 font-semibold">
          Expand 버튼 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-orange-600">
          💡 힌트: useSpring(0) + useTransform(progress, [0, 1], [scale, rotate, opacity])
        </p>
      </div>
    </div>
  );
}
