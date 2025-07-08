import { useNavigate } from 'react-router-dom';

const ChoosePathPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex items-center">
            <div className="w-full px-[22px] flex flex-col items-center">
                {/* 이미지 */}
                <img 
                    src="/MainPage/choose_page_image.png" 
                    alt="선택 페이지 이미지" 
                    className="w-[295px] h-[240px] mb-[68px]"
                />

                {/* 텍스트 */}
                <h1 className="text-[20px] font-medium text-center mb-[29px]">
                    {/* 김성섭 부분 나중에 {name}으로 뱌꾸기 */}
                    김성섭님에게 어울리는 향수를 찾고싶어요!<br/>
                    어떠한 경로를 이용하시겠어요?
                </h1>

                {/* 버튼들 */}
                <div className="w-full flex flex-col gap-[29px] items-center">
                    <button 
                        onClick={() => navigate('/image-keyword')}
                        className="w-[213px] h-[50px] bg-[#000000] rounded-[5px] text-white text-[20px] font-medium"
                    >
                        이미지 키워드
                    </button>
                    <button 
                        className="w-[213px] h-[50px] bg-[#000000] rounded-[5px] text-white text-[20px] font-medium"
                    >
                        온라인 향수 공방
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePathPage;