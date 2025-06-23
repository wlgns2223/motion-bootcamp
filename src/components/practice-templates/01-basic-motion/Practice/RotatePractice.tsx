"use client";

export default function RotatePractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">TODO: 360도 회전하는 애니메이션을 만들어보세요 (무한 반복)</p>

      {/* TODO: 회전 애니메이션 추가 */}
      <div className="w-16 h-16 bg-orange-500 mx-auto" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}>
        {/* 힌트: rotate 속성과 repeat: Infinity 사용 */}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 무한 회전 애니메이션을 만들어보세요
animate={{ rotate: ? }}
transition={{ 
  duration: ?, 
  repeat: ?,
  ease: "linear" 
}}`}
        </code>
      </div>
    </div>
  );
}
