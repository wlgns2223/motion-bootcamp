"use client";

/**
 * 🎯 Combined Interactions 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 복합 상호작용 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function CombinedInteractionsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 복합 상호작용 라이브 코딩</h4>
        <p className="text-purple-600">강사가 직접 여러 상호작용을 조합한 카드와 버튼을 구현합니다</p>
      </div>

      <div className="flex gap-4 justify-center flex-wrap">
        {/* 강사가 여기에 Combined Interactions motion 코드 작성 */}
        <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-dashed border-purple-400 max-w-xs">
          <div className="text-2xl mb-2">🚧</div>
          <h4 className="font-semibold mb-2 text-purple-500">Interactive Card 코딩</h4>
          <p className="text-gray-600 text-sm">whileHover + whileTap을 조합해보세요</p>
        </div>
        <div className="text-3xl text-purple-500 border-2 border-dashed border-purple-400 px-4 py-2 rounded bg-white shadow-sm">
          ❤️ 좋아요 버튼 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-purple-600">💡 힌트: whileHover + whileTap + useState + onClick 조합</p>
      </div>
    </div>
  );
}
