"use client";

/**
 * 🎯 Rotation Transform 전용 라이브 코딩 컴포넌트
 * 강사가 useTransform으로 회전 및 투명도 변환 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function RotationTransformLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 Rotation Transform 라이브 코딩</h4>
        <p className="text-purple-600">강사가 직접 드래그 거리에 따라 회전과 투명도가 변하는 애니메이션을 구현합니다</p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-[400px] h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-400">
          {/* 강사가 여기에 rotation transform motion.div 코드 작성 */}
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-purple-500 font-bold border-2 border-dashed border-purple-400 shadow-sm">
            ⭐
          </div>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-purple-600">💡 힌트: rotate = useTransform(x, [-200, 200], [-360, 360]) + opacity</p>
      </div>
    </div>
  );
}
