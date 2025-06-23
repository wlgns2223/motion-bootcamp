"use client";

/**
 * 🎯 Scroll Progress 전용 라이브 코딩 컴포넌트
 * 강사가 useScroll과 useTransform을 활용한 스크롤 진행도 표시기 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function ScrollProgressLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 Scroll Progress 라이브 코딩</h4>
        <p className="text-blue-600">강사가 직접 useScroll과 useTransform으로 스크롤 진행도 표시기를 구현합니다</p>
      </div>

      <div className="relative">
        {/* 강사가 여기에 progress bar motion.div 코드 작성 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white border-2 border-dashed border-blue-400 flex items-center justify-center text-xs text-blue-500">
          프로그레스 바 코딩
        </div>
        <div className="h-48 overflow-y-scroll bg-gray-100 rounded-lg p-4 space-y-4 border-2 border-dashed border-blue-400 mt-4">
          <div className="text-center text-blue-500 p-8 bg-white rounded border-2 border-dashed border-blue-300">
            스크롤 컨테이너 코딩 영역
          </div>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="h-16 bg-white rounded shadow p-4">
              <h4 className="font-semibold text-blue-700">Content Block {i + 1}</h4>
              <p className="text-sm text-blue-600">스크롤 컨텐츠 예시</p>
            </div>
          ))}
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-blue-600">
          💡 힌트: useScroll({`{ container: ref }`}) + useTransform(scrollYProgress, [0, 1], [0, 1])
        </p>
      </div>
    </div>
  );
}
