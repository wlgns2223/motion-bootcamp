"use client";

/**
 * 🎯 모달 애니메이션 전용 라이브 코딩 컴포넌트
 * 강사가 모달과 오버레이 애니메이션에만 집중할 수 있도록 최적화된 환경
 */
export default function ModalAnimationLiveCoding() {
  return (
    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 bg-orange-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-orange-800 mb-2">🚧 라이브 코딩 영역</h4>
        <p className="text-orange-600 text-sm">여기서 모달 애니메이션을 직접 구현해보세요</p>
      </div>

      <div className="flex justify-center">{/* 여기에 라이브 코딩 */}</div>

      {/* 코딩 힌트 */}
      <div className="mt-4 bg-orange-100 border border-orange-200 rounded p-3">
        <h5 className="font-semibold text-orange-800 mb-2">💡 코딩 힌트</h5>
        <ul className="text-orange-700 text-sm space-y-1">
          <li>• 배경 오버레이와 모달 컨테이너 구분</li>
          <li>
            • <code>fixed</code> 포지셔닝과 중앙 정렬
          </li>
          <li>
            • <code>scale</code>, <code>y</code> 애니메이션 조합
          </li>
          <li>
            • <code>type: "spring"</code>으로 자연스러운 효과
          </li>
        </ul>
      </div>
    </div>
  );
}
