import { FiX } from 'react-icons/fi';
interface ImageKeywordHeaderProps {
  step: number;
  onClose: () => void;
  categoryLabel: string;
}

export default function ImageKeywordHeader({
  step,
  onClose,
  categoryLabel,
}: ImageKeywordHeaderProps) {
  return (
    <div className="mb-[32px] px-[16px] pt-[24px]">
      {/* 상단 네비게이션 */}
      <div className="flex items-center justify-between">
        {/* 왼쪽: 닫기 버튼 */}
        <button 
          onClick={onClose}
          className="w-[32px] h-[32px] color-grayscale-900"
        >
          <FiX className="w-[32px] h-[32px] text-grayscale-900" />
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