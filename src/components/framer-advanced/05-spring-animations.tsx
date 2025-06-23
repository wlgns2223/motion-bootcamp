"use client";

import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { useState } from "react";
import BasicSpringLiveCoding from "../live-coding/BasicSpringLiveCoding";
import SpringComparisonLiveCoding from "../live-coding/SpringComparisonLiveCoding";
import MouseFollowingLiveCoding from "../live-coding/MouseFollowingLiveCoding";
import SpringTransformLiveCoding from "../live-coding/SpringTransformLiveCoding";
import ElasticButtonLiveCoding from "../live-coding/ElasticButtonLiveCoding";

/**
 * 🎥 Lesson 5: useSpring (통합 강의)
 *
 * 핵심 개념:
 * 1. useSpring - 스프링 물리학 기반의 부드러운 애니메이션
 * 2. stiffness - 스프링의 강성 (높을수록 빠른 반응)
 * 3. damping - 스프링의 감쇠 (높을수록 빠른 정지)
 * 4. mass - 스프링의 질량 (높을수록 느린 반응)
 */

export default function SpringAnimations() {
  return (
    <div className="p-8 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎥 Lesson 5: useSpring</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          물리학 기반의 자연스러운 스프링 애니메이션을 배워보세요. 강사와 함께 다양한 스프링 효과를 직접 만들어봅니다.
        </p>
      </div>

      {/* 강의 1: Basic Spring */}
      <Lesson1_BasicSpring />

      {/* 강의 2: Spring Settings Comparison */}
      <Lesson2_SpringComparison />

      {/* 강의 3: Mouse Following Spring */}
      <Lesson3_MouseFollowing />

      {/* 강의 4: Spring + Transform */}
      <Lesson4_SpringTransform />

      {/* 강의 5: Elastic Button */}
      <Lesson5_ElasticButton />

      {/* 학습 요약 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">📚 학습 요약</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>
            • <strong>useSpring</strong>: 물리학 기반의 자연스러운 애니메이션 생성
          </li>
          <li>
            • <strong>stiffness</strong>: 스프링의 강성도 (50-300 권장)
          </li>
          <li>
            • <strong>damping</strong>: 진동 감쇠 정도 (10-40 권장)
          </li>
          <li>
            • <strong>mass</strong>: 요소의 질량감 (기본값 1)
          </li>
          <li>
            • <strong>실용성</strong>: 마우스 추적, 버튼 효과, 자연스러운 전환에 활용
          </li>
        </ul>
      </div>
    </div>
  );
}

// 예제 1: Basic Spring
function BasicSpringExample() {
  const springX = useSpring(0, { stiffness: 100, damping: 10 });
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    const newValue = isActive ? 0 : 200;
    springX.set(newValue);
    setIsActive(!isActive);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[300px] h-20 bg-gray-100 rounded-lg flex items-center">
        <motion.div style={{ x: springX }} className="w-12 h-12 bg-blue-500 rounded-full ml-4" />
      </div>
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        {isActive ? "Reset" : "Animate"}
      </button>
    </div>
  );
}

// 예제 2: Spring Comparison
function SpringComparisonExample() {
  const softSpring = useSpring(0, { stiffness: 50, damping: 20 });
  const normalSpring = useSpring(0, { stiffness: 100, damping: 10 });
  const stiffSpring = useSpring(0, { stiffness: 200, damping: 15 });

  const [isActive, setIsActive] = useState(false);

  const handleAnimate = () => {
    const targetValue = isActive ? 0 : 150;
    softSpring.set(targetValue);
    normalSpring.set(targetValue);
    stiffSpring.set(targetValue);
    setIsActive(!isActive);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Soft:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: softSpring }} className="w-6 h-6 bg-green-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Normal:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: normalSpring }} className="w-6 h-6 bg-blue-500 rounded-full ml-1" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="w-16 text-sm">Stiff:</span>
          <div className="relative w-[200px] h-8 bg-gray-100 rounded flex items-center">
            <motion.div style={{ x: stiffSpring }} className="w-6 h-6 bg-red-500 rounded-full ml-1" />
          </div>
        </div>
      </div>

      <button
        onClick={handleAnimate}
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Compare Springs
      </button>
    </div>
  );
}

// 예제 3: Mouse Following (간단한 버전)
function MouseFollowingExample() {
  const springX = useSpring(0, { stiffness: 50, damping: 15 });
  const springY = useSpring(0, { stiffness: 50, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 24; // 요소 크기의 절반
    const y = e.clientY - rect.top - 24;

    springX.set(x);
    springY.set(y);
  };

  return (
    <div
      className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg cursor-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-12 h-12 bg-purple-500 rounded-full pointer-events-none"
      />
      <div className="absolute inset-0 flex items-center justify-center text-gray-600">마우스를 움직여보세요</div>
    </div>
  );
}

// 예제 4: Spring + Transform
function SpringTransformExample() {
  const progress = useSpring(0, { stiffness: 150, damping: 12 });
  const scale = useTransform(progress, [0, 1], [1, 2]);
  const rotate = useTransform(progress, [0, 1], [0, 360]);
  const opacity = useTransform(progress, [0, 1], [0.5, 1]);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    progress.set(isExpanded ? 0 : 1);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        style={{ scale, rotate, opacity }}
        className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg cursor-pointer"
        onClick={handleToggle}
      />
      <button
        onClick={handleToggle}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        {isExpanded ? "Shrink" : "Expand"}
      </button>
    </div>
  );
}

// 예제 5: Elastic Button
function ElasticButtonExample() {
  const scale = useSpring(1, { stiffness: 300, damping: 10 });
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    scale.set(0.8);
    setTimeout(() => scale.set(1.1), 100);
    setTimeout(() => scale.set(1), 200);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.button
        style={{ scale }}
        onClick={handleClick}
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      >
        Elastic Button
      </motion.button>
      <p className="text-sm text-gray-600">클릭 횟수: {clickCount}</p>
    </div>
  );
}

// 강의 1: Basic Spring
function Lesson1_BasicSpring() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 1: Basic Spring Animation</h3>

      {/* 예제 시연 */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">✨ 완성된 예제</h4>
        <p className="text-sm text-blue-600 mb-4">기본 스프링 애니메이션 - 자연스러운 바운스 효과를 확인해보세요</p>
        <BasicSpringExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const springX = useSpring(0, { 
  stiffness: 100, 
  damping: 10 
});

// 값 변경
springX.set(100);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-blue-700 space-y-1 text-sm">
          <li>1단계: useSpring(0, {`{ stiffness, damping }`}) 생성</li>
          <li>2단계: motion.div에 style={`{ x: springX }`} 적용</li>
          <li>3단계: 버튼 클릭 시 springX.set() 호출</li>
          <li>4단계: stiffness/damping 값 조정하여 효과 확인</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <BasicSpringLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 생성</h5>
          <code className="text-sm text-gray-600">
            {`const springX = useSpring(0, {
  stiffness: 100,
  damping: 10
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 값 제어</h5>
          <code className="text-sm text-gray-600">
            {`<motion.div style={{ x: springX }} />

const handleClick = () => {
  springX.set(isActive ? 0 : 200);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 2: Spring Comparison
function Lesson2_SpringComparison() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 2: Spring Settings Comparison</h3>

      {/* 예제 시연 */}
      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-indigo-800">✨ 완성된 예제</h4>
        <p className="text-sm text-indigo-600 mb-4">
          다양한 stiffness와 damping 값에 따른 스프링 애니메이션 차이를 비교해보세요
        </p>
        <SpringComparisonExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`// 부드러운 스프링
const soft = useSpring(0, { stiffness: 50, damping: 20 });

// 일반 스프링  
const normal = useSpring(0, { stiffness: 100, damping: 10 });

// 강한 스프링
const stiff = useSpring(0, { stiffness: 200, damping: 15 });`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-4">
        <h4 className="font-semibold text-indigo-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-indigo-700 space-y-1 text-sm">
          <li>1단계: 3개의 서로 다른 설정값으로 스프링 생성</li>
          <li>2단계: 각각의 motion.div에 개별 스프링 적용</li>
          <li>3단계: 동시에 모든 스프링 값 변경</li>
          <li>4단계: stiffness/damping 차이로 인한 움직임 비교</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SpringComparisonLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 다양한 스프링</h5>
          <code className="text-sm text-gray-600">
            {`const softSpring = useSpring(0, { 
  stiffness: 50, damping: 20 
});
const normalSpring = useSpring(0, { 
  stiffness: 100, damping: 10 
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 동시 제어</h5>
          <code className="text-sm text-gray-600">
            {`const handleAnimate = () => {
  const targetValue = isActive ? 0 : 150;
  softSpring.set(targetValue);
  normalSpring.set(targetValue);
  stiffSpring.set(targetValue);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 3: Mouse Following
function Lesson3_MouseFollowing() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 3: Mouse Following Spring</h3>

      {/* 예제 시연 */}
      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-purple-800">✨ 완성된 예제</h4>
        <p className="text-sm text-purple-600 mb-4">
          마우스를 따라가는 스프링 애니메이션 - 부드럽고 자연스러운 추적 효과
        </p>
        <MouseFollowingExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const springX = useSpring(0);
const springY = useSpring(0);

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  springX.set(x);
  springY.set(y);
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-purple-700 space-y-1 text-sm">
          <li>1단계: X, Y 좌표용 두 개의 스프링 생성</li>
          <li>2단계: onMouseMove 이벤트 핸들러 추가</li>
          <li>3단계: 마우스 좌표를 컨테이너 기준으로 변환</li>
          <li>4단계: 스프링 값에 변환된 좌표 설정</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <MouseFollowingLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 설정</h5>
          <code className="text-sm text-gray-600">
            {`const springX = useSpring(0, { 
  stiffness: 50, damping: 15 
});
const springY = useSpring(0, { 
  stiffness: 50, damping: 15 
});`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 마우스 추적</h5>
          <code className="text-sm text-gray-600">
            {`const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  springX.set(e.clientX - rect.left);
  springY.set(e.clientY - rect.top);
};`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 4: Spring Transform
function Lesson4_SpringTransform() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 4: Spring + Transform Combination</h3>

      {/* 예제 시연 */}
      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-orange-800">✨ 완성된 예제</h4>
        <p className="text-sm text-orange-600 mb-4">
          스프링과 useTransform을 조합해 scale, rotate, opacity를 동시에 제어하는 복합 애니메이션
        </p>
        <SpringTransformExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const progress = useSpring(0);
const scale = useTransform(progress, [0, 1], [1, 2]);
const rotate = useTransform(progress, [0, 1], [0, 360]);
const opacity = useTransform(progress, [0, 1], [0.5, 1]);`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
        <h4 className="font-semibold text-orange-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-orange-700 space-y-1 text-sm">
          <li>1단계: progress용 스프링 생성 (0-1 값)</li>
          <li>2단계: useTransform으로 scale, rotate, opacity 매핑</li>
          <li>3단계: 클릭 핸들러에서 progress 값 토글</li>
          <li>4단계: 모든 transform을 style에 동시 적용</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <SpringTransformLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 스프링 + 변환</h5>
          <code className="text-sm text-gray-600">
            {`const progress = useSpring(0, { 
  stiffness: 150, damping: 12 
});
const scale = useTransform(progress, [0, 1], [1, 2]);
const rotate = useTransform(progress, [0, 1], [0, 360]);`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 상태 제어</h5>
          <code className="text-sm text-gray-600">
            {`const handleToggle = () => {
  progress.set(isExpanded ? 0 : 1);
  setIsExpanded(!isExpanded);
};
style={{ scale, rotate, opacity }}`}
          </code>
        </div>
      </div>
    </div>
  );
}

// 강의 5: Elastic Button
function Lesson5_ElasticButton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">📚 강의 5: Elastic Button Effect</h3>

      {/* 예제 시연 */}
      <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400 mb-6">
        <h4 className="text-lg font-semibold mb-4 text-cyan-800">✨ 완성된 예제</h4>
        <p className="text-sm text-cyan-600 mb-4">
          클릭 시 탄성있게 반응하는 버튼 - 눌림 → 확대 → 원상복구 순서로 애니메이션
        </p>
        <ElasticButtonExample />
        <div className="mt-4 bg-gray-800 text-gray-100 p-4 rounded text-sm">
          <code>
            {`const scale = useSpring(1, { 
  stiffness: 300, 
  damping: 10 
});

const handleClick = () => {
  scale.set(0.8);
  setTimeout(() => scale.set(1.1), 100);
  setTimeout(() => scale.set(1), 200);
};`}
          </code>
        </div>
      </div>

      {/* 코드 작성 단계 */}
      <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 mb-4">
        <h4 className="font-semibold text-cyan-800 mb-2">📝 코드 작성 단계</h4>
        <ol className="text-cyan-700 space-y-1 text-sm">
          <li>1단계: scale용 스프링 생성 (초기값 1)</li>
          <li>2단계: 높은 stiffness로 빠른 반응 설정</li>
          <li>3단계: 클릭 시 0.8 → 1.1 → 1 순서로 애니메이션</li>
          <li>4단계: setTimeout으로 타이밍 조절</li>
        </ol>
      </div>

      {/* 라이브 코딩 영역 */}
      <ElasticButtonLiveCoding />

      {/* 단계별 힌트 */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">1-2단계: 탄성 스프링</h5>
          <code className="text-sm text-gray-600">
            {`const scale = useSpring(1, { 
  stiffness: 300, 
  damping: 10 
});
// 높은 stiffness = 빠른 반응`}
          </code>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h5 className="font-semibold text-gray-800 mb-2">3-4단계: 연속 애니메이션</h5>
          <code className="text-sm text-gray-600">
            {`const handleClick = () => {
  scale.set(0.8);  // 눌림
  setTimeout(() => scale.set(1.1), 100);  // 확대
  setTimeout(() => scale.set(1), 200);    // 복구
};`}
          </code>
        </div>
      </div>

      {/* 완성 체크리스트 */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <h5 className="font-semibold text-green-800 mb-2">✅ 완성 체크리스트</h5>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>□ useSpring으로 물리 기반 애니메이션 생성</li>
          <li>□ stiffness/damping 값 조정으로 느낌 변경</li>
          <li>□ 마우스 인터랙션과 스프링 연동</li>
          <li>□ useTransform과 스프링 조합 활용</li>
          <li>□ 실용적인 UI 효과 구현</li>
        </ul>
      </div>
    </div>
  );
}
