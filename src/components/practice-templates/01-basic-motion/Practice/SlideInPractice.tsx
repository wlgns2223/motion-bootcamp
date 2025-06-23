"use client";

export default function SlideInPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 왼쪽에서 오른쪽으로 슬라이드하며 나타나는 애니메이션을 만들어보세요
      </p>

      {/* TODO: 아래 요소에 x축 이동 애니메이션 추가 */}
      <div className="w-32 h-16 bg-green-500 rounded-lg mx-auto flex items-center justify-center text-white font-bold">
        Slide Me!
        {/* 힌트: initial={{ x: ? }}, animate={{ x: ? }} */}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// TODO: 완성해보세요
<motion.div
  initial={{ x: /* 시작 위치 */ }}
  animate={{ x: /* 끝 위치 */ }}
  transition={{ /* 애니메이션 설정 */ }}
>`}
        </code>
      </div>
    </div>
  );
}
