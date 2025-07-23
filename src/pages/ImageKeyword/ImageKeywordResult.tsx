import { useLocation } from 'react-router-dom';
import { getBackgroundImage } from '../../utils/imageKeywordBackground';
import type { AMBIENCE_OPTIONS } from '../../types/ImageKeyword/imageKeyword.const';
import type { ImageKeywordResult } from '../../types/ImageKeyword/imageKeywordResult';

export default function ImageKeywordResultPage() {
    const location = useLocation();
    const result = location.state?.result as ImageKeywordResult;
    const ambienceKeyword = result?.keywords[0] as typeof AMBIENCE_OPTIONS[number];
    const backgroundImage = ambienceKeyword ? getBackgroundImage(ambienceKeyword) : undefined;

    return (
        <div 
            className="w-full min-w-[375px] max-w-[480px] min-h-screen bg-white bg-cover bg-center"
            style={{ 
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
            }}
        >
            <div className="flex flex-col items-center justify-center pt-[24px]">
                <h1 className="text-title2 text-grayscale-900">김성섭님의</h1>
                <h1 className="text-display1 text-[28px] text-grayscale-1000">향기무드 테스트</h1>
            </div>
        </div>
    );
} 