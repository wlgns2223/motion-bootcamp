"use client";

/**
 * 🎯 Elastic Button 전용 라이브 코딩 컴포넌트
 * 강사가 탄성있는 버튼 효과 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ElasticButtonLiveCoding() {
  return (
    <div className="border-2 border-dashed border-cyan-300 rounded-lg p-6 bg-cyan-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-cyan-800 mb-2">🚧 Elastic Button 라이브 코딩</h4>
        <p className="text-cyan-600">강사가 직접 클릭 시 탄성있게 반응하는 버튼 애니메이션을 구현합니다</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        {/* 강사가 여기에 elastic button motion.button 코드 작성 */}
        <div className="px-8 py-4 bg-white text-cyan-500 font-bold rounded-xl shadow-lg border-2 border-dashed border-cyan-400 cursor-pointer">
          Elastic Button 코딩
        </div>
        <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded border border-cyan-300">클릭 횟수: 0</div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-cyan-600">
          💡 힌트: useSpring(1, {`{ stiffness: 300, damping: 10 }`}) + scale.set(0.8 → 1.1 → 1)
        </p>
      </div>
    </div>
  );
}
