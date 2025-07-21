import { useNavigate } from "react-router-dom";
import mainBg from "../../assets/MainPage/main.png";
import Header from "./Header";
import { SlArrowRight } from "react-icons/sl";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="relative w-full min-w-[375px] h-[300px] bg-cover bg-center"
            style={{ 
                backgroundImage: `url(${mainBg})`,
                backgroundSize: '120%',  // 이미지를 120%로 확대
                backgroundPosition: 'center 80%'  // 중앙에서 아래쪽으로 더 이동
            }}
        >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 헤더 */}
            <div className="relative z-10">
                <Header />
            </div>

            {/* 컨텐츠 */}
            <div className="relative z-10 px-[16px] pt-[110px]">
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
        </div>
    );
};

export default Banner;
