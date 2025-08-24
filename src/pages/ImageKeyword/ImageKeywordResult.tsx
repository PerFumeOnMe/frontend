import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBackgroundImage } from '../../utils/imageKeywordBackground';
import type { ImageKeywordResult } from '../../types/ImageKeyword/imageKeyword';
import type { ImageKeywordDetailResult } from '../../types/ImageKeyword/imageKeyword';
import KeywordBubbles from '../../components/ImageKeyword/Result/KeywordBubbles';
import KeywordDescription from '../../components/ImageKeyword/Result/KeywordDescription';
import KeywordScenario from '../../components/ImageKeyword/Result/KeywordScenario';
import KeywordCharacter from '../../components/ImageKeyword/Result/KeywordCharacter';
import KeywordRecommendations from '../../components/ImageKeyword/Result/KeywordRecommendation';
import { useAuth } from '../../context/AuthContext';
import { getImageKeywordDetail } from '../../apis/ImageKeyword';
import KeywordResultHeader from '../../components/ImageKeyword/Result/KeywordResultHeader';

export default function ImageKeywordResultPage() {
    const location = useLocation();
    const { imageKeywordId } = useParams<{ imageKeywordId: string }>();
    const { name } = useAuth();
    
    // 새로운 결과 페이지인지 상세 페이지인지 구분
    const isDetailView = !!imageKeywordId;
    
    // 새로운 결과 데이터 (location.state에서)
    const newResult = location.state?.result as ImageKeywordResult | undefined;
    
    // 상세 조회 데이터 및 상태
    const [detailResult, setDetailResult] = useState<ImageKeywordDetailResult | null>(null);
    const [loading, setLoading] = useState(isDetailView);
    const [error, setError] = useState<string | null>(null);

    // 상세 조회 데이터 가져오기 (상세 페이지인 경우)
    useEffect(() => {
        if (isDetailView && imageKeywordId) {
            const fetchDetail = async () => {
                try {
                    setLoading(true);
                    const response = await getImageKeywordDetail(Number(imageKeywordId));
                    if (response.isSuccess) {
                        setDetailResult(response.result);
                    } else {
                        setError(response.message);
                    }
                } catch (error) {
                    console.error('Failed to fetch detail:', error);
                    setError('상세 정보를 불러올 수 없습니다.');
                } finally {
                    setLoading(false);
                }
            };
            fetchDetail();
        }
    }, [isDetailView, imageKeywordId]);

    // 로딩 중
    if (loading) {
        return (
            <div className="w-full min-w-[375px] max-w-[480px] min-h-screen flex items-center justify-center">
                <p className="text-body1 text-grayscale-800">로딩 중...</p>
            </div>
        );
    }

    // 에러 상태
    if (error) {
        return (
            <div className="w-full min-w-[375px] max-w-[480px] min-h-screen flex items-center justify-center">
                <p className="text-body1 text-grayscale-800">{error}</p>
            </div>
        );
    }

    // 결과 데이터 결정 (새로운 결과 또는 상세 조회 결과)
    const result = isDetailView ? detailResult : newResult;

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
            <div className='w-full min-w-[375px] max-w-[480px] min-h-screen relative'>
                {/* 상세 페이지인 경우 헤더 표시 */}
                {isDetailView && (
                    <KeywordResultHeader
                        title={result && 'savedName' in result ? (result as ImageKeywordDetailResult).savedName : '키워드 결과'}
                        backPath="/MyPage?tab=recommendations&filter=keyword"
                    />
                )}
                
                <div className={`flex flex-col items-center justify-center ${isDetailView ? 'pt-[80px]' : 'pt-[24px]'}`}>
                    <h1 className="text-title2 text-grayscale-900">{name}님의</h1>
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
                            <KeywordRecommendations 
                                recommendations={result.recommendations} 
                                hideActions={isDetailView}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 