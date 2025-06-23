"use client";

/**
 * 🎯 Tap Effects 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 whileTap 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function TapEffectsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 Tap Effects 라이브 코딩</h4>
        <p className="text-green-600">강사가 직접 motion.button/motion.div로 whileTap 효과를 구현합니다</p>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        {/* 강사가 여기에 Tap Effects motion 코드 작성 */}
        <div className="px-6 py-3 bg-white rounded-lg font-semibold border-2 border-dashed border-green-400 shadow-sm text-green-500">
          Button 코딩
        </div>
        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-green-500 font-bold border-2 border-dashed border-green-400 shadow-sm">
          Tap 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-green-600">
          💡 힌트: whileTap={`{{ scale: 0.9 }}`} + whileHover={`{{ scale: 1.05 }}`}
        </p>
      </div>
    </div>
  );
}
