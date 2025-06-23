"use client";

/**
 * 🎯 리스트 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 리스트 아이템의 추가/제거 애니메이션에만 집중할 수 있도록 최적화된 환경
 */
export default function ListAnimationLiveCoding() {
  return (
    <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 bg-purple-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-purple-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-purple-600 text-sm">여기서 리스트 애니메이션을 직접 구현해보세요</p>
      </div>

      <div className="flex justify-center">{/* 여기에 라이브 코딩 */}</div>

      {/* 코딩 힌트 */}
      <div className="mt-4 bg-purple-100 border border-purple-200 rounded p-3">
        <h5 className="font-semibold text-purple-800 mb-2">💡 코딩 힌트</h5>
        <ul className="text-purple-700 text-sm space-y-1">
          <li>
            • <code>useState</code>로 리스트 상태 관리
          </li>
          <li>
            • <code>map</code> 함수로 리스트 렌더링
          </li>
          <li>
            • 각 아이템에 고유한 <code>key</code> 설정
          </li>
          <li>
            • <code>scale</code> 기반 나타남/사라짐 효과
          </li>
        </ul>
      </div>
    </div>
  );
}
