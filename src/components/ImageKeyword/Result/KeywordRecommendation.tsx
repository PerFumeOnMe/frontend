import type { RecommendedPerfume } from '../../../types/ImageKeyword/imageKeywordResult';
import RecommendationCard from './RecommendationCard';

interface KeywordRecommendationProps {
    recommendations: RecommendedPerfume[];
}

export default function KeywordRecommendation({ recommendations }: KeywordRecommendationProps) {
    return (
        <div className="w-full">
            <div className="w-full rounded-t-[24px] bg-[#FBFBFB]/40 border-[1px] border-white px-[25px] py-[16px]">
                <h3 className="text-title2 text-grayscale-1000 text-center mb-[4px]">
                    추천 향수
                </h3>
                <p className="text-title4 text-grayscale-900 text-center mb-[24px]">
                    당신의 향기 무드에 가장 잘 어울리는 향수예요.
                </p>
                <div className="space-y-[36px]">
                    {recommendations.map((perfume, index) => (
                        <RecommendationCard
                            key={index}
                            brand={perfume.brand}
                            name={perfume.name}
                            notes={{
                                topNote: perfume.topNote,
                                middleNote: perfume.middleNote,
                                baseNote: perfume.baseNote
                            }}
                            description={perfume.description}
                            imageUrl={perfume.imageUrl || '/perfumes/default.png'}
                            relatedKeywords={perfume.relatedKeywords}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
