interface ImageKeywordButtonProps {
    isLastStep: boolean;
    isStepComplete: boolean;
    onNext: () => void;
    onSubmit: () => void;
}

export default function ImageKeywordButton({
    isLastStep,
    isStepComplete,
    onNext,
    onSubmit
}: ImageKeywordButtonProps) {
    return (
        <div className="absolute bottom-0 left-0 right-0 px-[16px] pb-[24px] bg-white">
            <button
                onClick={isLastStep ? onSubmit : onNext}
                disabled={!isStepComplete}
                className={`
                    w-full h-[48px] rounded-[15px] text-title3
                    ${isStepComplete
                        ? 'bg-main-500 text-grayscale-200'
                        : 'bg-grayscale-500 text-grayscale-200'
                    }
                `}
            >
                {isLastStep ? '확인' : '다음'}
            </button>
        </div>
    );
} 