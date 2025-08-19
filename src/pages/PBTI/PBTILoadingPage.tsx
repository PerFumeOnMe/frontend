import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mainBg from "../../assets/mainPage/main.png";
import TipProgress from "../../components/PBTI/Tip/TipProgress";
import TipContent from "../../components/PBTI/Tip/TipContent";
import { tips } from "../../constants/PBTI/ment";
import { postPBTIResult } from "../../apis/PBTI";
import type { RequestPbtiQuestion } from "../../types/apis/PBTI";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PBTILoadingPage() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { answers?: number[] } };
  const answers = state?.answers;

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 잘못 진입 방지
  useEffect(() => {
    if (!answers || answers.length !== 8) {
      navigate("/PBTI", { replace: true }); // 뒤로가기 방지
    }
  }, [answers, navigate]);

  // 정상 데이터일때만
  useEffect(() => {
    if (!answers || answers.length !== 8) return;

    let cancelled = false;

    // API 요청 body 구성
    const requestBody: RequestPbtiQuestion = {
      qOne: answers[0].toString(),
      qTwo: answers[1].toString(),
      qThree: answers[2].toString(),
      qFour: answers[3].toString(),
      qFive: answers[4].toString(),
      qSix: answers[5].toString(),
      qSeven: answers[6].toString(),
      qEight: answers[7].toString(),
    };

    (async () => {
      try {
        // 결과 result 받기
        const result = await postPBTIResult(requestBody); 

        if (cancelled) return;

        console.log("조회 결과", result);

        // 결과 페이지 이동 
        navigate("/PBTI/result", { state: { answers, result }, replace: true });
      } catch (err: any) {
        if (cancelled) return;
        console.error("PBTI 제출 실패:", err?.response?.status, err?.response?.data || err);
        setErrorMsg(
          err?.response?.data?.message ??
            "결과 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [answers, navigate]);

  // 캐러셀
  const order = useMemo(() => shuffle([0, 1, 2, 3]), []);
  const visibleTips = useMemo(() => order.map((i) => tips[i]), [order]);

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

  // 애니메이션 종료 -> 0번으로 
  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setIsAnimating(false);
      setCurrent(0);
      setTimeout(() => setIsAnimating(true), 50);
    }
  };

  const progressStep = (current % visibleTips.length) + 1;

  return (
    <div className="w-full min-w-[375px] max-w-[480px] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-[200%] animate-infinite-slide">
        <img src={mainBg} alt="배경 이미지" className="w-full h-full object-cover" />
      </div>

      <style>{`
        @keyframes infinite-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-slide { animation: infinite-slide 20s linear infinite; }
      `}</style>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-full h-full flex flex-col items-center justify-center mt-60">
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

        <div className="mt-6">
          <TipProgress current={progressStep} />
        </div>

        {/* 서버 오류시 -> 수정 필요????????*/}
        {errorMsg && (
          <div className="mt-6 bg-white/90 rounded-xl px-4 py-3">
            <p className="text-body3 text-error">{errorMsg}</p>
            <div className="mt-3 flex gap-2 justify-center">
              <button
                className="px-3 py-2 rounded-lg bg-gray-200"
                onClick={() => navigate("/PBTI", { replace: true })}
              >
                처음으로
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-purple-200"
                onClick={() => navigate(-1)}
              >
                이전으로
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}