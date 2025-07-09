import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeywordHeader from '../components/ImageKeyword/KeywordHeader';
import { KEYWORD_CATEGORIES, CATEGORY_KOREAN } from '../types/ImageKeyword/imageKeyword.const';
import type { KeywordCategory } from '../types/ImageKeyword/imageKeyword.type';

const ImageKeywordPage = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);
    
    const handleClose = () => {
        navigate('/');
    };

    const currentCategory = KEYWORD_CATEGORIES[currentStep] as KeywordCategory;
    
    return (
        <div className="bg-white min-h-screen w-full">
            <KeywordHeader
                step={currentStep + 1}
                onClose={handleClose}
                categoryLabel={CATEGORY_KOREAN[currentCategory]}
            />
        </div>
    );
}

export default ImageKeywordPage;