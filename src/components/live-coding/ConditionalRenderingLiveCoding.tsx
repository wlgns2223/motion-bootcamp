"use client";

/**
 * 🎯 조건부 렌더링 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 AnimatePresence와 exit 애니메이션에만 집중할 수 있도록 최적화된 환경
 */
export default function ConditionalRenderingLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-blue-600 text-sm">여기서 조건부 렌더링 애니메이션을 직접 구현해보세요</p>
      </div>

      <div className="flex justify-center">{/* 여기에 라이브 코딩 */}</div>

      {/* 코딩 힌트 */}
      <div className="mt-4 bg-blue-100 border border-blue-200 rounded p-3">
        <h5 className="font-semibold text-blue-800 mb-2">💡 코딩 힌트</h5>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>
            • <code>AnimatePresence</code>로 조건부 렌더링 영역 감싸기
          </li>
          <li>
            • <code>initial</code>, <code>animate</code>, <code>exit</code> 속성 설정
          </li>
          <li>• 버튼으로 상태 토글 기능 구현</li>
          <li>
            • <code>transition</code>으로 애니메이션 시간 조절
          </li>
        </ul>
      </div>
    </div>
  );
}
