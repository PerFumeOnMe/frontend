import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import loading from '../../assets/ImageKeyword/loading.png';

export default function ImageKeywordLoading() {
    const navigate = useNavigate();
    const location = useLocation();
    const keywords = location.state?.keywords;

    useEffect(() => {
        const timer = setTimeout(() => {
            // 임시 결과 데이터 생성
            const result = {
                keywords: keywords,
                descriptions: "세련됨은 지나치지 않게 절제된 고급스러움을 의미해요...",
                scenario: "잔잔한 눈이 내리고, 따뜻한 햇살이 얼굴을 감싸오는 장면에에요...",
                characterImageUrl: "https://example.com/character.png",
                recommendations: []
            };

            navigate('/image-keyword/result', {
                state: { result }
            });
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, keywords]);

    return (
        <div className="w-full min-w-[375px] max-w-[480px] bg-white flex flex-col items-center justify-center">
                <img 
                    src={loading} 
                    alt="로딩 이미지"
                    className="w-[295px] h-[240px]"
                />
                <p className="text-title2 text-grayscale-1000">
                    김성섭님의 이미지를 파악중이에요
                </p>
        </div>
    );
} 