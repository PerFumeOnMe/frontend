import { useState } from 'react';
import { KEYWORD_CATEGORIES, CATEGORY_KOREAN, KEYWORD_OPTIONS } from '../../types/ImageKeyword/imageKeyword.const';
import type { KeywordCategory } from '../../types/ImageKeyword/imageKeyword.type';
import type { ImageKeywordRequest } from '../../types/ImageKeyword/imageKeyword';

// 각 단계별 설명 텍스트 정의
const STEP_CONTENT = {
    ambience: {
        question: "당신의 분위기는 어떤가요?",
        description: "적절한 향수 추천에 필요해요! 외부에 공개되지 않아요."
    },
    style: {
        question: "주로 옷 입는 스타일은 어떠신가요?",
        description: "스타일에 맞게끔 향수를 추천해 드릴게요."
    },
    gender: {
        question: "추구하는 성별이 어떻게 되시나요?",
        description: "적절한 향수 추천에 필요해요! 외부에 공개되지 않아요."
    },
    season: {
        question: "당신이 빛이 나는 계절은 언제인가요?",
        description: "맞춤형 향수를 위해 여러 정보들이 필요합니다."
    },
    character: {
        question: "당신의 성격은 어떠신가요?",
        description: "맞춤형 향수를 위해 여러 정보들이 필요합니다."
    }
} as const;

interface ImageKeywordContentProps {
    currentStep: number;
    onNext: () => void;
    onSubmit: (keywords: ImageKeywordRequest) => void;
}

export default function ImageKeywordContent({ currentStep, onNext, onSubmit }: ImageKeywordContentProps) {
    const [selectedKeywords, setSelectedKeywords] = useState<Partial<ImageKeywordRequest>>({});

    const currentCategory = KEYWORD_CATEGORIES[currentStep] as KeywordCategory;
    const isLastStep = currentStep === KEYWORD_CATEGORIES.length - 1;
    const isStepComplete = Boolean(selectedKeywords[currentCategory]);

    const handleKeywordSelect = (keyword: string) => {
        setSelectedKeywords(prev => ({
            ...prev,
            [currentCategory]: keyword
        }));

        if (isStepComplete) {
            if (isLastStep) {
                onSubmit(selectedKeywords as ImageKeywordRequest);
            } else {
                onNext();
            }
        }
    };

    return (
        <div className="px-[16px]">
            {/* 질문 제목 */}
            <h1 className="text-title2 text-grayscale-900 mb-[4px]">
                {STEP_CONTENT[currentCategory].question}
            </h1>

            {/* 설명 텍스트 */}
            <p className="text-body3 text-grayscale-600 mb-[16px]">
                {STEP_CONTENT[currentCategory].description}
            </p>

            {/* 키워드 선택 그리드 */}
            <div className="grid grid-cols-2 gap-[16.5px]">
                {KEYWORD_OPTIONS[currentCategory].map((keyword) => (
                    <button
                        key={keyword}
                        onClick={() => handleKeywordSelect(keyword)}
                        className={`
                            h-[40px] rounded-[16px] border transition-all
                            ${selectedKeywords[currentCategory] === keyword
                                ? 'bg-main-500 text-body3 text-white border-main-500'
                                : 'bg-white text-body3 text-grayscale-700 border-grayscale-500'
                            }
                        `}
                    >
                        {keyword}
                    </button>
                ))}
            </div>
        </div>
    );
} 