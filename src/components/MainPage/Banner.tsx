import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-[270px] bg-[#FFEDED] flex items-center justify-between mb-6 pl-[65px] pr-[26px] py-4">
            {/* 향수 아이콘 이미지 */}
            <img
                src="/public/MainPage/perfume.png"
                className="w-[126.72px] h-[175px]"
            />

            {/* 텍스트, 버튼 */}
            {/* style은 추후에 index.css에 적용 후 주석 풀기 */}
            <div className="flex flex-col items-center justify-center text-center">
                <p 
                    className="text-[#785F5F] text-[16px] font-bold leading-[140%] mb-[7px]"
                    // style={{ fontFamily: 'Ria Sans' }}
                >
                    퍼퓨온미에서
                </p>
                <p 
                    className="text-[#785F5F] text-[20px] font-bold leading-[140%] mb-4"
                    // style={{ fontFamily: 'Ria Sans' }}
                >
                    나만의 향수를<br />찾아보세요
                </p>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-white to-[#80498B] shadow-[0_4px_4px_#DF6966]">
                    <button
                        onClick={() => navigate("/choose-path")}
                        className="w-[190px] h-[36px] rounded-full bg-gradient-to-r from-[#FF9999] to-[#B159DA] text-white text-[13px] font-bold"
                        // style={{ fontFamily: 'Ria Sans' }}
                    >
                        나만의 향수 만들러 가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
