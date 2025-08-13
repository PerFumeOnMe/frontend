import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBackgroundImage } from '../../utils/imageKeywordBackground';
import type { ImageKeywordResult } from '../../types/ImageKeyword/imageKeyword';
import KeywordBubbles from '../../components/ImageKeyword/Result/KeywordBubbles';
import KeywordDescription from '../../components/ImageKeyword/Result/KeywordDescription';
import KeywordScenario from '../../components/ImageKeyword/Result/KeywordScenario';
import KeywordCharacter from '../../components/ImageKeyword/Result/KeywordCharacter';
import KeywordRecommendations from '../../components/ImageKeyword/Result/KeywordRecommendation';
import { getMdChoice } from '../../apis/Fragrance';

export default function ImageKeywordResultPage() {
    const location = useLocation();
    const result = location.state?.result as ImageKeywordResult | undefined;
    
    //useContext에 name이 없어서 임시로 mainpage에서 가져오도록 함
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMdChoice();
                setUserName(data.result.name);
            } catch (error) {
                console.error('Failed to fetch:', error);
            }
        };
        fetchData();
    }, []);

    if (!result || !result.keywords || result.keywords.length === 0) {
        return (
            <div className="w-full min-w-[375px] max-w-[480px] min-h-screen flex items-center justify-center">
                <p className="text-body1 text-grayscale-800">
                    결과 데이터를 불러오지 못했어요. 홈으로 돌아가주세요.
                </p>
            </div>
        );
    }

    const backgroundImage = getBackgroundImage(result.keywords[0]);

    return (
        <div 
            className="w-full min-w-[375px] max-w-[480px] min-h-screen bg-white bg-cover bg-center overflow-y-auto"
            style={{ 
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            }}
        >
            <div className="flex flex-col items-center justify-center pt-[24px]">
                <h1 className="text-title2 text-grayscale-900">{userName}님의</h1>
                <h1 className="text-display1 text-[28px] text-grayscale-1000 mb-[40px]">향기무드 테스트</h1>
                
                {result?.keywords && <KeywordBubbles keywords={result.keywords} />}
                <div className="mt-[36px] w-full">
                    {result.descriptions && <KeywordDescription descriptions={result.descriptions} />}
                </div>
                <div className="mt-[32px] w-full">
                    {result.scenario && <KeywordScenario scenario={result.scenario} />}
                </div>
                <div className="mt-[32px] w-full">
                    {result.characterImageUrl && <KeywordCharacter characterImageUrl={result.characterImageUrl} />}
                </div>
                <div className="mt-[48px] w-full">
                    {result.recommendations?.length > 0 && (
                        <KeywordRecommendations recommendations={result.recommendations} />
                    )}
                </div>
            </div>
        </div>
    );
} 