"use client";

export default function HoverEffectPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 호버 시 크기가 1.1배 커지고 그림자가 생기는 버튼을 만들어보세요
      </p>

      <div className="flex justify-center space-x-4">
        {/* TODO: motion.button으로 변경하고 whileHover 추가 */}
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium">
          Hover Me!
          {/* 힌트: whileHover={{ scale: 1.1 }} */}
        </button>

        <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium">
          🔄 Rotate
          {/* 힌트: whileHover={{ rotate: 360 }} */}
        </button>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 호버 효과 추가
<motion.button
  whileHover={{ 
    scale: ?,
    backgroundColor: "?",
    boxShadow: "?"
  }}
  transition={{ duration: ? }}
>`}
        </code>
      </div>
    </div>
  );
}
