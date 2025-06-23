"use client";

/**
 * 🎯 Hover Effects 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 whileHover 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function HoverEffectsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 Hover Effects 라이브 코딩</h4>
        <p className="text-blue-600">강사가 직접 motion.div로 whileHover 효과를 구현합니다</p>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        {/* 강사가 여기에 Hover Effects motion.div 코드 작성 */}
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
          Scale 코딩
        </div>
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
          Rotate 코딩
        </div>
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
          Lift 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-blue-600">
          💡 힌트: whileHover={`{{ scale: 1.1 }}`} | whileHover={`{{ rotate: 15 }}`} | whileHover={`{{ y: -10 }}`}
        </p>
      </div>
    </div>
  );
}
