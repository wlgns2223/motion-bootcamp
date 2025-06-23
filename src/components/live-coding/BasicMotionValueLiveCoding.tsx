"use client";

/**
 * 🎯 Basic Motion Value 전용 라이브 코딩 컴포넌트
 * 강사가 useMotionValue와 useTransform을 활용한 드래그 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function BasicMotionValueLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 Basic Motion Value 라이브 코딩</h4>
        <p className="text-blue-600">강사가 직접 useMotionValue와 useTransform으로 드래그 스케일 효과를 구현합니다</p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-400">
          {/* 강사가 여기에 motion.div와 useMotionValue 코드 작성 */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
            드래그 코딩
          </div>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-blue-600">
          💡 힌트: const x = useMotionValue(0) + const scale = useTransform(x, [-200, 200], [0.5, 1.5])
        </p>
      </div>
    </div>
  );
}
