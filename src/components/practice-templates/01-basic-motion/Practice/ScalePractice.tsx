"use client";

export default function ScalePractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 작은 크기에서 시작해서 원래 크기로 커지는 애니메이션을 만들어보세요
      </p>

      {/* TODO: 스케일 애니메이션 추가 */}
      <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto">{/* 힌트: scale 속성 사용 */}</div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: scale 애니메이션을 추가해보세요
initial={{ scale: ? }}
animate={{ scale: ? }}`}
        </code>
      </div>
    </div>
  );
}
