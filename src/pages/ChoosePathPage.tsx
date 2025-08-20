import { useNavigate } from 'react-router-dom';
import choosePageImage from "../assets/MainPage/choose_page_image.png";
import returnIcon from "../assets/MainPage/return_white.png";
import logo from "../assets/common/logo.png";
import { useAuth } from "../context/AuthContext";

const ChoosePathPage = () => {
    const navigate = useNavigate();
    const { name } = useAuth();

    return (
        <div className="relative min-h-screen overflow-hidden">
            <img
                src={choosePageImage}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 min-h-screen flex items-center">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-[24px] left-[11px] w-[24px] h-[24px] flex items-center justify-center"
                >
                    <img
                        src={returnIcon}
                        alt="뒤로가기"
                        className="ml-[6px] mt-[3px] mb-[1.33px]"
                    />
                </button>
                <div className="w-full px-[16px] flex flex-col items-center">
                    {/* 이미지 */}
                    <img 
                        src= {logo}
                        alt="logo"
                        className="w-[208px] h-[208px] mb-[20px]"
                    />

                    {/* 텍스트 */}
                    <h1 className="text-title2 text-white text-center mb-[36px]">
                        {name}님에게 어울리는 향수를 찾고싶어요!<br/>
                        어떠한 경로를 이용하시겠어요?
                    </h1>

                    {/* 버튼들 */}
                    <div className="w-full flex flex-col gap-[16px] items-center text-title3 text-grayscale-200">
                        <button 
                            onClick={() => navigate('/image-keyword')}
                            className="w-full h-[48px] bg-main-500 rounded-[16px]"
                        >
                            이미지 키워드
                        </button>
                        <button 
                            onClick={() => navigate('/lab')}
                            className="w-full h-[48px] bg-main-500 rounded-[16px]"
                        >
                            온라인 향수 공방
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoosePathPage;