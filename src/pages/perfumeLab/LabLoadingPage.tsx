import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePerfumeLab } from "../../hooks/PerfumeLab/usePerfumeLab";
import mainBg from "../../assets/MainPage/main.png";
import TipContent from "../../components/PBTI/Tip/TipContent";
import { tips } from "../../constants/PBTI/ment";

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LabLoadingPage = () => {
  const navigate = useNavigate();
  const { isLoading, completedPerfume, error } = usePerfumeLab();

  useEffect(() => {
    if (error) {
      navigate("/lab");
      return;
    }

    if (!isLoading && completedPerfume) {
      const timer = setTimeout(() => {
        navigate("/lab/result");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, completedPerfume, error, navigate]);

  // 캐러셀 로직 (PBTI와 동일)
  const [visibleTips] = useState(() => {
    const cached = sessionStorage.getItem("perfume_lab_visibleTips");
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as typeof tips;
        return parsed;
      } catch {
        // 파싱 실패시 새로 생성
      }
    }
    const picked = shuffle(tips).slice(0, Math.min(4, tips.length));
    sessionStorage.setItem("perfume_lab_visibleTips", JSON.stringify(picked));
    return picked;
  });

  const slides = useMemo(
    () => (visibleTips.length ? [...visibleTips, visibleTips[0]] : []),
    [visibleTips]
  );

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const intervalRef = useRef<number | null>(null);

  // 4초마다 오른쪽으로 한 칸씩
  useEffect(() => {
    if (!slides.length) return;
    intervalRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  // 애니메이션 종료 -> 0번으로 리셋
  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsAnimating(false);
      setCurrent(0);
      setTimeout(() => setIsAnimating(true), 50);
    }
  };

  return (
    <div className="w-full min-w-[375px] max-w-[480px] min-h-screen relative overflow-hidden z-51">
      <div className="absolute inset-0 w-[200%] animate-infinite-slide">
        <img
          src={mainBg}
          alt="배경 이미지"
          className="w-full h-full object-cover"
        />
      </div>

      <style>{`
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-slide { animation: infinite-slide 20s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full h-full flex flex-col items-center justify-center -mt-[100px]">
        <p className="text-title1 text-white mb-5">퍼퓨온미만의 Tip</p>

        {/* 캐러셀 */}
        <div className="w-full overflow-hidden px-4">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: isAnimating ? "transform 500ms ease-out" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((t, idx) => (
              <div key={idx} className="w-full flex-shrink-0">
                <TipContent title={t.title} content={t.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabLoadingPage;
