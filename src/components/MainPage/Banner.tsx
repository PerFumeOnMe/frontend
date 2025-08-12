import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainBg from "../../assets/MainPage/main.png";
import Header from "./Header";
import { SlArrowRight } from "react-icons/sl";
import PerfumeSlider from "./PerfumeSlider";
import type { MyPerfume } from "../../types/apis/Fragrance";

interface BannerProps {
    userName: string;
    exists: boolean;
    myPerfumes: MyPerfume[];
}

export default function Banner({ userName, exists, myPerfumes }: BannerProps) {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!exists || !myPerfumes || myPerfumes.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % myPerfumes.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [exists, myPerfumes]);

    return (
        <div 
            className={`relative w-full min-w-[375px] bg-cover bg-center overflow-hidden ${
                exists ? 'h-[424px]' : 'h-[300px]'
            }`}
            style={{ 
                backgroundImage: `url(${mainBg})`,
                backgroundSize: exists ? '155%' : '130%',
                backgroundPosition: exists ? '80% 100%' : '90% 80%'
            }}
        >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 헤더 */}
            <div className="relative z-10">
                <Header />
            </div>

            {/* 컨텐츠 */}
            {exists ? (
                <div className="relative z-10 flex flex-col">
                    <div className="px-[16px] pt-[24px]">
                        <h2 className="text-title2 text-grayscale-200">
                            반가워요! {userName}님
                        </h2>
                        <p className="text-body3 text-grayscale-300 mt-[4px]">
                            오늘도 나와 맞는 향수를 찾아 보아요.
                        </p>
                    </div>

                    {/* 향수 슬라이드 */}
                    <PerfumeSlider perfumes={myPerfumes} currentIndex={currentIndex} />

                    {/* 나만의 향수 다시 만들기 버튼 */}
                    <div className="flex justify-end px-[16px]">
                        <button
                            onClick={() => navigate("/choose-path")}
                            className="mt-[16px] text-body4 text-grayscale-300 flex items-center"
                        >
                            나만의 향수 만들러 가기
                            <SlArrowRight size={12} />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 px-[16px] pt-[120px]">
                    <h2 className="text-display1 text-grayscale-200">
                        반가워요! {userName}님
                    </h2>
                    <p className="text-body3 text-grayscale-300 mt-[4px]">
                        퍼퓸온미에서 당신만의 향기를 찾아보세요
                    </p>
                    <div className="flex justify-end">
                        <button
                            onClick={() => navigate("/choose-path")}
                            className="mt-[9.5px] text-body3 text-grayscale-200 flex items-center"
                        >
                            나만의 향수 만들러 가기
                            <SlArrowRight size={12} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
