"use client";

/**
 * 🎯 Intersection Observer 전용 라이브 코딩 컴포넌트
 * 강사가 Intersection Observer API를 사용한 스크롤 트리거 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function IntersectionObserverLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 Intersection Observer 라이브 코딩</h4>
        <p className="text-purple-600">강사가 직접 Intersection Observer API로 스크롤 트리거 애니메이션을 구현합니다</p>
      </div>

      <div className="space-y-6">
        {/* 컨테이너 영역 */}
        <div className="h-48 bg-white rounded-lg border-2 border-dashed border-purple-400 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-purple-600">상단 컨텐츠 (스크롤 공간)</p>
            </div>

            {/* 강사가 여기에 관찰할 요소들 코딩 */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-16 bg-purple-100 rounded border-2 border-dashed border-purple-300 flex items-center justify-center text-purple-500 font-medium"
                >
                  카드 {i} 코딩 영역
                </div>
              ))}
            </div>

            <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-purple-600">하단 컨텐츠 (스크롤 공간)</p>
            </div>
          </div>
        </div>

        {/* 상태 표시 영역 */}
        <div className="bg-white p-4 rounded border-2 border-dashed border-purple-400">
          <h5 className="font-medium text-purple-800 mb-2">📊 Observer 상태 (코딩 영역)</h5>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-600 border border-dashed border-purple-300"
              >
                카드 {i}: ⏳ 대기중
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 space-y-2">
        <p className="text-sm text-purple-600 text-center">
          💡 힌트: new IntersectionObserver(callback, {`{ root: container, threshold: 0.3 }`})
        </p>
        <div className="text-xs text-purple-500 text-center space-y-1">
          <p>• data-card, data-index 속성으로 요소 식별</p>
          <p>• entry.isIntersecting으로 진입/이탈 감지</p>
          <p>• Set을 사용하여 보이는 카드들 상태 관리</p>
        </div>
      </div>
    </div>
  );
}
