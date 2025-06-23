"use client";

/**
 * 🎯 레이아웃 전환 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 mode="wait"와 key 기반 전환에만 집중할 수 있도록 최적화된 환경
 */
export default function LayoutTransitionLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-green-600 text-sm">여기서 레이아웃 전환 애니메이션을 직접 구현해보세요</p>
      </div>

      <div className="flex justify-center">{/* 여기에 라이브 코딩 */}</div>

      {/* 코딩 힌트 */}
      <div className="mt-4 bg-green-100 border border-green-200 rounded p-3">
        <h5 className="font-semibold text-green-800 mb-2">💡 코딩 힌트</h5>
        <ul className="text-green-700 text-sm space-y-1">
          <li>
            • <code>mode="wait"</code>로 순차적 전환 설정
          </li>
          <li>
            • 각 레이아웃에 고유한 <code>key</code> 값 지정
          </li>
          <li>
            • <code>x</code> 축 애니메이션으로 슬라이드 효과
          </li>
          <li>• 상태 기반 조건부 렌더링 구현</li>
        </ul>
      </div>
    </div>
  );
}
