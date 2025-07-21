import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mainBg from "../../assets/MainPage/main.png";
import Header from "./Header";
import { SlArrowRight } from "react-icons/sl";
import type { Perfume } from "../../types/perfume";
import PerfumeSlider from "./PerfumeSlider";

// 임시 데이터: 나만의 향수 목록
const MY_PERFUMES: Perfume[] = [
    {
        id: 1,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/617/230907006220617.jpg?RS=600&SP=1",
        brand: "LOIVIE",
        name: "오 드 퍼퓸 피오니 앤 화이트 머스크",
        price: 320000,
        isLiked: true
    },
    {
        id: 2,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/895/231117007082895.jpg?RS=600&SP=1",
        brand: "LOIVIE",
        name: "오 드 퍼퓸 망고 앤 민트 리브",
        price: 320000,
        isLiked: false
    },
    {
        id: 3,
        imageUrl: "https://image.sivillage.com/upload/C00001/goods/org/157/230922006452157.jpg?RS=600&SP=1",
        brand: "LOIVIE",
        name: "오 드 퍼퓸 휘그 앤 시더우드",
        price: 320000,
        isLiked: false
    }
];

interface BannerProps {
    hasPerfume?: boolean;
}

const Banner = () => {
    const navigate = useNavigate();
    const [hasMyPerfume] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!hasMyPerfume) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % MY_PERFUMES.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [hasMyPerfume]);

    return (
        <div 
            className={`relative w-full min-w-[375px] bg-cover bg-center overflow-hidden ${
                hasMyPerfume ? 'h-[424px]' : 'h-[300px]'
            }`}
            style={{ 
                backgroundImage: `url(${mainBg})`,
                backgroundSize: '120%',
                backgroundPosition: 'center 80%'
            }}
        >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 헤더 */}
            <div className="relative z-10">
                <Header />
            </div>

            {/* 컨텐츠 */}
            {hasMyPerfume ? (
                <div className="relative z-10 flex flex-col">
                    <div className="px-[16px] pt-[24px]">
                        <h2 className="text-title2 text-grayscale-200">
                            반가워요! 김조단님
                        </h2>
                        <p className="text-body3 text-grayscale-300 mt-[4px]">
                            오늘도 나와 맞는 향수를 찾아 보아요.
                        </p>
                    </div>

                    {/* 향수 슬라이드 */}
                    <PerfumeSlider perfumes={MY_PERFUMES} currentIndex={currentIndex} />

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
                        반가워요! 김조단님
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
};

export default Banner;
