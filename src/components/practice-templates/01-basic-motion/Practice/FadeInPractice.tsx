"use client";

export default function FadeInPractice() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
      <h4 className="text-md font-semibold mb-3 text-blue-700">👨‍💻 여기서 연습해보세요:</h4>
      <p className="text-sm text-blue-600 mb-4">
        TODO: 투명도 0에서 1로 변하는 애니메이션을 만들어보세요 (duration: 1초)
      </p>

      {/* TODO: 아래 div를 motion.div로 변경하고 애니메이션 추가 */}
      <div className="w-32 h-32 bg-blue-500 rounded-lg mx-auto">
        {/* 힌트: initial={{ opacity: ? }}, animate={{ opacity: ? }}, transition={{ duration: ? }} */}
      </div>

      <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
        <code>
          {`// 여기에 완성한 코드를 작성해보세요
<motion.div
  initial={{ /* TODO */ }}
  animate={{ /* TODO */ }}
  transition={{ /* TODO */ }}
  className="w-32 h-32 bg-blue-500 rounded-lg mx-auto"
/>`}
        </code>
      </div>
    </div>
  );
}
