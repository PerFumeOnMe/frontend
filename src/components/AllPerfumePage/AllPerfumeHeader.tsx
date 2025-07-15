import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import FilterButton from './FilterButton';

interface AllPerfumeHeaderProps {
  onFilterClick?: () => void;
}

export default function AllPerfumeHeader({ onFilterClick }: AllPerfumeHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-[16px] pt-[24px] pb-[24px] w-full">
      {/* 왼쪽: 뒤로가기 */}
      <button
        onClick={() => navigate(-1)}
        className="w-[24px] h-[24px] flex items-center justify-center"
        aria-label="뒤로가기"
      >
        <SlArrowLeft className="w-[24px] h-[24px] text-grayscale-900" />
      </button>

      {/* 중앙: 타이틀 */}
      <h2 className="absolute left-1/2 -translate-x-1/2 text-title3 text-grayscale-900">
        모든 향수
      </h2>

      {/* 오른쪽: 상세조건 버튼 */}
      <FilterButton onClick={onFilterClick} />
    </header>
  );
}
