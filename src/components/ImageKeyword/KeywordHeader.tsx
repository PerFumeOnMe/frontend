interface KeywordHeaderProps {
  step: number;
  onClose: () => void;
  categoryLabel: string;
}

export default function KeywordHeader({
  step,
  onClose,
  categoryLabel,
}: KeywordHeaderProps) {
  return (
    <div className="mb-[32px] px-[16px] pt-[24px]">
      {/* 상단 네비게이션 */}
      <div className="flex items-center justify-between">
        {/* 왼쪽: 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="w-[32px] h-[32px] flex items-center justify-center"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-grayscale-900"
          >
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* 중앙: 카테고리 라벨 */}
        <span className="text-title3 text-grayscale-900">
          {categoryLabel}
        </span>

        {/* 오른쪽: 단계 표시 */}
        <span className="text-body1 text-grayscale-900">
          {step}/5
        </span>
      </div>
    </div>
  );
}