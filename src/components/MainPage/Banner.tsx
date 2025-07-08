import { useNavigate } from "react-router-dom";
import perfumeImage from "../../assets/MainPage/perfume.png";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-w-[375px] h-[270px] bg-[#FFEDED] flex items-center justify-center mb-6">
            {/* 향수 아이콘 이미지 */}
            <img
                src= {perfumeImage}
                className="w-[126.72px] h-[175px] mr-[26px]"
            />

            {/* 텍스트, 버튼 */}
            <div className="flex flex-col items-center justify-center text-center mr-[26px]">
                <p className="text-[#785F5F] text-[16px] font-bold leading-[140%] mb-[7px]">
                    퍼퓨온미에서
                </p>
                <p className="text-[#785F5F] text-[20px] font-bold leading-[140%] mb-4">
                    나만의 향수를<br />찾아보세요
                </p>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-[#80498B] shadow-[0_4px_4px_#DF6966]">
                    <button
                        onClick={() => navigate("/choose-path")}
                        className="w-[190px] h-[36px] rounded-full bg-gradient-to-r from-[#FF9999] to-[#B159DA] text-white text-[13px] font-bold"
                    >
                        나만의 향수 만들러 가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
