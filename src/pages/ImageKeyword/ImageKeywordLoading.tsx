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
                descriptions: "세련됨은 지나치게 달지 않고 절제된 고급스러움을 의미해요.\n유니크함은 흔하지 않은 조합과 개성 있는 향의 선택을 나타내요.\n조용함은 은은한 잔향으로 감정을 차분히 채워주는 향을 말해요.\n겨울은 따뜻하고 포근한 분위기를 품은 향이 잘 어울려요.\n여성은 부드럽고 섬세한 감정을 건드리는 향을 선택했어요.",
                scenario: "창밖엔 눈이 내리고, 따뜻한 머플러에 얼굴을 묻은 채 조용한 거리를 걷고 있어요.\n바스락거리는 낙엽, 코끝에 닿는 은은한 바닐라와 우디 향, 그 속에서 세련된 당신의 분위기가 더욱 빛나요.\n사람들 속에 섞여 있지만, 뚜렷한 개성과 고요한 존재감이 느껴져요.",
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