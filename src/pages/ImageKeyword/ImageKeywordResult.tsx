import { useLocation } from 'react-router-dom';
import { getBackgroundImage } from '../../utils/imageKeywordBackground';
import type { ImageKeywordResult } from '../../types/ImageKeyword/imageKeywordResult';
import KeywordBubbles from '../../components/ImageKeyword/Result/KeywordBubbles';
import KeywordDescription from '../../components/ImageKeyword/Result/KeywordDescription';

export default function ImageKeywordResultPage() {
    const location = useLocation();
    const result = location.state?.result as ImageKeywordResult;
    const backgroundImage = result ? getBackgroundImage(result.keywords[0]) : undefined;

    return (
        <div 
            className="w-full min-w-[375px] max-w-[480px] min-h-screen bg-white bg-cover bg-center"
            style={{ 
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            }}
        >
            <div className="flex flex-col items-center justify-center pt-[24px]">
                <h1 className="text-title2 text-grayscale-900">김성섭님의</h1>
                <h1 className="text-display1 text-[28px] text-grayscale-1000 mb-[40px]">향기무드 테스트</h1>
                
                {result?.keywords && <KeywordBubbles keywords={result.keywords} />}
                <div className="mt-[36px] w-full">
                    {result.descriptions && <KeywordDescription descriptions={result.descriptions} />}
                </div>
            </div>
        </div>
    );
} 