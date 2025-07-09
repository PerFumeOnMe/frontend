import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageKeywordHeader from '../../components/ImageKeyword/ImageKeywordHeader';
import ImageKeywordContent from '../../components/ImageKeyword/ImageKeywordContent';
import ImageKeywordButton from '../../components/ImageKeyword/ImageKeywordButton';
import ImageKeywordModal from '../../components/ImageKeyword/ImageKeywordModal';
import { KEYWORD_CATEGORIES, CATEGORY_KOREAN } from '../../types/ImageKeyword/imageKeyword.const';
import type { KeywordCategory } from '../../types/ImageKeyword/imageKeyword.type';
import type { ImageKeywordRequest } from '../../types/ImageKeyword/imageKeyword';

const ImageKeywordPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedKeywords, setSelectedKeywords] = useState<Partial<ImageKeywordRequest>>({});
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

    const handleSubmit = () => {
        // TODO: API 호출
        console.log('Final keywords:', selectedKeywords);
        navigate('/image-keyword/loading');
    };

    const handleKeywordSelect = (keyword: string) => {
        setSelectedKeywords(prev => ({
            ...prev,
            [currentCategory]: keyword
        }));
    };

    const currentCategory = KEYWORD_CATEGORIES[currentStep] as KeywordCategory;
    const isLastStep = currentStep === KEYWORD_CATEGORIES.length - 1;
    const isStepComplete = Boolean(selectedKeywords[currentCategory]);

    return (
        <div className="relative bg-white min-h-screen w-full">
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
            <ImageKeywordButton
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

export default ImageKeywordPage;
