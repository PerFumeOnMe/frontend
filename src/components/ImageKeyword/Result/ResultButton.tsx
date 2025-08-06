interface ResultButtonProps {
    label: '저장하기' | '홈으로';
    onClick: () => void;
    disabled: boolean;
}

export default function ResultButton({
    label,
    onClick,
    disabled
}: ResultButtonProps) {
    const bgClass = label === '저장하기' ? 'bg-white border border-main-500 text-main-500' : 'bg-main-500';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex-1 h-[48px] ${bgClass} ${disabledClass} text-title3 text-grayscale-200 rounded-[16px] flex items-center justify-center
            `}
        >
            {label}
        </button>
    );
} 