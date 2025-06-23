"use client";

export default function TapEffectPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 클릭 시 작아지고 살짝 아래로 이동하는 버튼을 만들어보세요</p>

      <div className="flex justify-center space-x-4">
        {/* TODO: whileTap 효과 추가 */}
        <button className="px-8 py-4 bg-purple-500 text-white rounded-lg font-medium shadow-lg">
          👆 Click Me!
          {/* 힌트: whileTap={{ scale: 0.95, y: 2 }} */}
        </button>

        <div className="w-16 h-16 bg-red-500 rounded-lg cursor-pointer flex items-center justify-center text-white text-2xl">
          🎯
          {/* 힌트: whileTap={{ scale: 0.9, rotate: 45 }} */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 탭 효과 추가
<motion.button
  whileTap={{ 
    scale: ?,
    y: ?
  }}
>`}
        </code>
      </div>
    </div>
  );
}
