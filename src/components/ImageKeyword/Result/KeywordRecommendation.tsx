import { useNavigate } from 'react-router-dom';
import type { RecommendedPerfume } from '../../../types/ImageKeyword/imageKeywordResult';
import RecommendationCard from './RecommendationCard';
import ResultButton from './ResultButton';
import { useState } from 'react';
import SaveCompleteModal from './SaveCompleteModal';
import SaveNameModal from './SaveNameModal';

interface KeywordRecommendationProps {
    recommendations: RecommendedPerfume[];
}

export default function KeywordRecommendation({ recommendations }: KeywordRecommendationProps) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showCompleteModal, setShowCompleteModal] = useState(false);
    const [perfumeName, setPerfumeName] = useState('');

    return (
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
            <div className="flex justify-center gap-[16px] mt-[24px] mb-[16px]">
                <ResultButton label="저장하기" onClick={() => setShowModal(true)} />
                <ResultButton label="홈으로" onClick={() => navigate('/')} />
            </div>

            {showModal && (
                <SaveNameModal
                    onClose={() => setShowModal(false)}
                    onSubmit={(name) => {
                        setPerfumeName(name);
                        setShowModal(false);
                        setShowCompleteModal(true);
                    }}
                />
            )}

            {showCompleteModal && (
                <SaveCompleteModal
                    onConfirm={() => {
                        setShowCompleteModal(false);
                        navigate('/');
                    }}
                />
            )}
        </div>
    );
}
