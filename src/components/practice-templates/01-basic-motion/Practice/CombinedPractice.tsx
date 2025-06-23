"use client";

export default function CombinedPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 페이드인 + 슬라이드 + 스케일을 조합한 복합 애니메이션을 만들어보세요
      </p>

      {/* TODO: 여러 속성을 조합한 애니메이션 추가 */}
      <div className="w-40 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold">
        🎉 복합 애니메이션
        {/* 힌트: opacity, x, scale, rotate 등을 모두 사용해보세요 */}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 창의적인 복합 애니메이션을 만들어보세요
<motion.div
  initial={{ 
    opacity: ?,
    x: ?,
    scale: ?,
    rotate: ?
  }}
  animate={{ 
    opacity: ?,
    x: ?,
    scale: ?,
    rotate: ?
  }}
  transition={{ 
    duration: ?,
    delay: ?,
    ease: "easeOut"
  }}
>`}
        </code>
      </div>
    </div>
  );
}
