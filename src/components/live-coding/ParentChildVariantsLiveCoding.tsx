"use client";

/**
 * 🎯 Parent Child Variants 전용 라이브 코딩 컴포넌트
 * 강사가 부모-자식 variants 전파와 stagger 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ParentChildVariantsLiveCoding() {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-green-800 mb-2">🚧 부모-자식 Variants 라이브 코딩</h4>
        <p className="text-green-600">
          강사가 직접 delayChildren과 staggerChildren을 사용한 부모-자식 애니메이션을 구현합니다
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* 강사가 여기에 Parent Child Variants motion 코드 작성 */}
        <div className="w-full max-w-md border-2 border-dashed border-green-400 p-4 rounded-lg bg-white shadow-sm">
          <h4 className="text-lg font-semibold mb-4 text-center text-green-500">Container 코딩 영역</h4>
          <div className="p-3 bg-green-50 rounded-lg mb-2 border-2 border-dashed border-green-400">
            <span className="text-green-500 font-semibold">Item 1 코딩</span>
          </div>
          <div className="p-3 bg-green-50 rounded-lg mb-2 border-2 border-dashed border-green-400">
            <span className="text-green-500 font-semibold">Item 2 코딩</span>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border-2 border-dashed border-green-400">
            <span className="text-green-500 font-semibold">Item 3 코딩</span>
          </div>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border-2 border-dashed border-green-400 shadow-sm text-green-500 font-semibold">
          Toggle Menu 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-green-600">💡 힌트: delayChildren + staggerChildren in transition</p>
      </div>
    </div>
  );
}
