import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mainBg from '../../assets/MainPage/main.png';
import { postImageKeywordPreview } from '../../apis/ImageKeyword';

export default function ImageKeywordLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const keywords = location.state?.keywords;

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
                <p className="text-title1 text-white mb-[24px]">
                    김성섭님의 이미지를
                </p>
                <p className="text-title1 text-white">
                    파악중이에요
                </p>
            </div>
        </div>
    );
} 