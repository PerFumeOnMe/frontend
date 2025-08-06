import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { RecommendedPerfume } from '../../../types/ImageKeyword/imageKeyword';
import RecommendationCard from './RecommendationCard';
import ResultButton from './ResultButton';
import SaveNameModal from './SaveNameModal';
import SaveCompleteModal from './SaveCompleteModal';
import { postImageKeywordSave } from '../../../apis/ImageKeyword';

interface KeywordRecommendationProps {
    recommendations: RecommendedPerfume[];
}

export default function KeywordRecommendation({ recommendations }: KeywordRecommendationProps) {
    const navigate = useNavigate();
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showCompleteModal, setShowCompleteModal] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (savedName: string) => {
        try {
            setIsSaving(true);
            const response = await postImageKeywordSave({ savedName });
            
            if (response.isSuccess) {
                setShowSaveModal(false);
                setShowCompleteModal(true);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.error('Failed to save result:', error);
            alert('저장에 실패했습니다.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleComplete = () => {
        setShowCompleteModal(false);
        navigate('/');
    };

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
                        {...perfume}
                    />
                ))}
            </div>
            <div className="flex justify-center gap-[16px] mt-[24px] mb-[16px]">
                <ResultButton 
                    label="저장하기" 
                    onClick={() => setShowSaveModal(true)}
                    disabled={isSaving}
                />
                <ResultButton 
                    label="홈으로" 
                    onClick={() => navigate('/')}
                    disabled={false}
                />
            </div>

            {showSaveModal && (
                <SaveNameModal
                    onSubmit={handleSave}
                    onClose={() => setShowSaveModal(false)}
                />
            )}

            {showCompleteModal && (
                <SaveCompleteModal
                    onConfirm={handleComplete}
                />
            )}
        </div>
    );
}
