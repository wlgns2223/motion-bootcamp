"use client";

export default function CombinedInteractionPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: hover, tap, focus 효과를 모두 조합한 버튼을 만들어보세요</p>

      <div className="flex justify-center">
        {/* TODO: 복합 인터랙션 효과 추가 */}
        <button className="px-8 py-4 bg-pink-500 text-white rounded-lg font-bold text-lg shadow-lg focus:outline-none">
          🎉 복합 인터랙션!
          {/* 힌트: whileHover, whileTap, whileFocus 모두 사용 */}
        </button>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 복합 효과 추가
<motion.button
  whileHover={{ ? }}
  whileTap={{ ? }}
  whileFocus={{ ? }}
  transition={{ ? }}
>`}
        </code>
      </div>
    </div>
  );
}
