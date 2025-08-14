import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageKeywordHeader from '../../components/ImageKeyword/ImageKeywordHeader';
import ImageKeywordContent from '../../components/ImageKeyword/ImageKeywordContent';
import Button from '../../components/ImageKeyword/Button';
import ImageKeywordModal from '../../components/ImageKeyword/ImageKeywordModal';
import { KEYWORD_CATEGORIES, CATEGORY_KOREAN } from '../../types/ImageKeyword/imageKeyword.const';
import type { KeywordCategory } from '../../types/ImageKeyword/imageKeyword.type';
import type { ImageKeywordPreviewRequestDto } from '../../types/apis/ImageKeyword';

export default function ImageKeywordPage() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedKeywords, setSelectedKeywords] = useState<Partial<ImageKeywordPreviewRequestDto>>({});
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        navigate('/');
    };

    const handleModalConfirm = () => {
        setShowModal(false);
    };

    const handleNext = () => {
        if (currentStep < KEYWORD_CATEGORIES.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleSubmit = async () => {
        navigate('/image-keyword/loading', {
            state: {
                keywords: [
                    selectedKeywords.ambience,
                    selectedKeywords.style,
                    selectedKeywords.gender,
                    selectedKeywords.season,
                    selectedKeywords.personality
                ]
            }
        });
    };

    const handleKeywordSelect = (keyword: string) => {
        setSelectedKeywords(prev => ({
            ...prev,
            [currentCategory]: keyword
        }));
    };

    const currentCategory = KEYWORD_CATEGORIES[currentStep] as KeywordCategory;
    const isLastStep = currentStep === KEYWORD_CATEGORIES.length - 1;
    const isStepComplete = Boolean(selectedKeywords[currentCategory as keyof ImageKeywordPreviewRequestDto]);

    return (
        <div className="relative bg-white min-w-[375px] max-w-[480px] min-h-screen w-full">
            <ImageKeywordHeader
                step={currentStep + 1}
                onClose={handleClose}
                categoryLabel={CATEGORY_KOREAN[currentCategory]}
            />
            <ImageKeywordContent
                currentStep={currentStep}
                selectedKeywords={selectedKeywords}
                onKeywordSelect={handleKeywordSelect}
            />
            <Button
                isLastStep={isLastStep}
                isStepComplete={isStepComplete}
                onNext={handleNext}
                onSubmit={handleSubmit}
            />
            {showModal && (
                <ImageKeywordModal
                    onClose={handleModalClose}
                    onConfirm={handleModalConfirm}
                />
            )}
        </div>
    );
}
