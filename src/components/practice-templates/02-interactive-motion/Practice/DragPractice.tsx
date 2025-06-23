"use client";

export default function DragPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 드래그할 수 있는 요소를 만들고 제약 조건을 설정해보세요</p>

      <div className="flex justify-center space-x-8">
        {/* TODO: drag 속성 추가 */}
        <div className="w-20 h-20 bg-orange-500 rounded-lg cursor-grab flex items-center justify-center text-white font-bold">
          Drag
          {/* 힌트: drag, dragConstraints, whileDrag 사용 */}
        </div>

        <div className="w-16 h-16 bg-cyan-500 rounded-full cursor-grab flex items-center justify-center text-white">
          ↔️
          {/* 힌트: drag="x" 사용 */}
        </div>
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 드래그 기능 추가
<motion.div
  drag
  dragConstraints={{ left: ?, right: ?, top: ?, bottom: ? }}
  whileDrag={{ scale: ?, rotate: ? }}
>`}
        </code>
      </div>
    </div>
  );
}
