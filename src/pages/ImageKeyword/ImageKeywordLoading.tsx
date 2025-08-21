import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mainBg from '../../assets/MainPage/main.png';
import TipProgress from "../../components/PBTI/Tip/TipProgress";
import TipContent from "../../components/PBTI/Tip/TipContent";
import { tips } from "../../constants/PBTI/ment";
import { postImageKeywordPreview } from '../../apis/ImageKeyword';
import { useAuth } from '../../context/AuthContext';

function shuffle<T>(arr: readonly T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function ImageKeywordLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const keywords = location.state?.keywords;

    // 키워드 결과 가져오기
    useEffect(() => {
        const fetchResult = async () => {
            if (!keywords || keywords.length < 5) {
                navigate('/');
                return;
            }

            try {
                const response = await postImageKeywordPreview({
                    ambience: keywords[0],
                    style: keywords[1],
                    gender: keywords[2],
                    season: keywords[3],
                    personality: keywords[4]
                });

                if (response.isSuccess) {
                    navigate('/image-keyword/result', {
                        state: {result: response.result}
                    });
                } else {
                    alert('향수 추천 결과를 가져오지 못했습니다.');
                    navigate('/');
                }
            } catch (error) {
                alert('서버 오류가 발생했습니다.');
                navigate('/');
            }
        };

        fetchResult();

    }, [navigate, keywords]);

      // 캐러셀
    const [visibleTips] = useState(() => {
        const cached = sessionStorage.getItem("pbti_visibleTips");
        if (cached) {
            try {
                const parsed = JSON.parse(cached) as typeof tips;
                return parsed;
            } catch {
                // 
            }
        }
        const picked = shuffle(tips).slice(0, Math.min(4, tips.length));
    
        sessionStorage.setItem("pbti_visibleTips", JSON.stringify(picked));
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
            <div className="absolute inset-0 w-[200%] animate-slide-bg flex">
                <img 
                    src={mainBg} 
                    alt="배경 이미지"
                    className="w-full h-full object-cover"
                />
                <img 
                    src={mainBg} 
                    alt="배경 이미지"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative w-full h-full flex flex-col items-center justify-center -mt-[100px]">

                
                {/* 팁 섹션 추가 */}
                <div className="mt-[60px] w-full">
                    <p className="text-title1 text-white mb-5 text-center">퍼퓨온미만의 Tip</p>

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

                    <div className="mt-6 flex justify-center">
                        <TipProgress current={progressStep} />
                    </div>
                </div>
            </div>
        </div>
    );
} 