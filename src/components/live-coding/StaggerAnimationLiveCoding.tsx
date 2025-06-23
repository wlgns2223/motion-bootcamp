"use client";

/**
 * 🎯 Stagger Animation 전용 라이브 코딩 컴포넌트
 * 강사가 stagger 효과를 활용한 카드 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function StaggerAnimationLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 Stagger Animation 라이브 코딩</h4>
        <p className="text-purple-600">강사가 직접 카드들이 순차적으로 나타나는 stagger 애니메이션을 구현합니다</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* 강사가 여기에 Stagger Animation motion 코드 작성 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-dashed border-purple-400">
            <div className="text-3xl mb-3">🚧</div>
            <h4 className="font-semibold mb-2 text-purple-500">Card 1 코딩</h4>
            <p className="text-gray-600 text-sm">첫 번째 카드를 만들어보세요</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-dashed border-purple-400">
            <div className="text-3xl mb-3">🚧</div>
            <h4 className="font-semibold mb-2 text-purple-500">Card 2 코딩</h4>
            <p className="text-gray-600 text-sm">두 번째 카드를 만들어보세요</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-dashed border-purple-400">
            <div className="text-3xl mb-3">🚧</div>
            <h4 className="font-semibold mb-2 text-purple-500">Card 3 코딩</h4>
            <p className="text-gray-600 text-sm">세 번째 카드를 만들어보세요</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border-2 border-dashed border-purple-400 shadow-sm text-purple-500 font-semibold">
          Toggle Cards 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-purple-600">💡 힌트: Grid Container + staggerChildren + spring transition</p>
      </div>
    </div>
  );
}
