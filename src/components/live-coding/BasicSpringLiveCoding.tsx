"use client";

/**
 * 🎯 Basic Spring 전용 라이브 코딩 컴포넌트
 * 강사가 useSpring을 활용한 기본 스프링 애니메이션 코드 작성에만 집중할 수 있도록 최적화된 환경
 */
export default function BasicSpringLiveCoding() {
  return (
    <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50">
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold text-blue-800 mb-2">🚧 Basic Spring 라이브 코딩</h4>
        <p className="text-blue-600">강사가 직접 useSpring으로 자연스러운 바운스 애니메이션을 구현합니다</p>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-[300px] h-20 bg-gray-100 rounded-lg flex items-center border-2 border-dashed border-blue-400">
          {/* 강사가 여기에 motion.div와 useSpring 코드 작성 */}
          <div className="w-12 h-12 bg-white rounded-full ml-4 flex items-center justify-center text-blue-500 font-bold border-2 border-dashed border-blue-400 shadow-sm">
            스프링
          </div>
        </div>
        <div className="px-6 py-2 bg-white rounded-lg border-2 border-dashed border-blue-400 shadow-sm text-blue-500 font-semibold">
          Animate 버튼 코딩
        </div>
      </div>

      {/* 코딩 힌트 */}
      <div className="mt-4 text-center">
        <p className="text-sm text-blue-600">
          💡 힌트: const springX = useSpring(0, {`{ stiffness: 100, damping: 10 }`})
        </p>
      </div>
    </div>
  );
}
