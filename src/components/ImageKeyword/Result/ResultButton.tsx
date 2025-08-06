interface ResultButtonProps {
    label: '저장하기' | '홈으로';
    onClick: () => void;
}

export default function ResultButton({
    label,
    onClick
}: ResultButtonProps) {
    const bgClass = label === '저장하기' ? 'bg-white border border-main-500 text-main-500' : 'bg-main-500';

    return (
        <button
            onClick={onClick}
            className={`
                flex-1 h-[48px] ${bgClass} text-title3 text-grayscale-200 rounded-[16px] flex items-center justify-center
            `}
        >
            {label}
        </button>
    );
} 