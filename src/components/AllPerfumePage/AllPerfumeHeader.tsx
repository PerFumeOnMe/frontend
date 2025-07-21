import { SlArrowLeft } from "react-icons/sl";
import { useNavigate, useLocation } from 'react-router-dom';
import FilterButton from './FilterButton';
import { 
    GENDER_TYPES, 
    FRAGRANCE_TYPES, 
    SITUATION_TYPES, 
    SEASON_TYPES,
    NOTE_CATEGORIES 
} from '../../types/filter';

interface AllPerfumeHeaderProps {
    onFilterClick?: () => void;
}

export default function AllPerfumeHeader({ onFilterClick }: AllPerfumeHeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // 필터 값을 라벨로 변환하는 함수
    const getFilterLabel = (key: string, value: string): string | undefined => {
        switch (key) {
            case 'gender':
                return GENDER_TYPES.find(type => type.id === value)?.label;
            case 'fragranceType':
                return FRAGRANCE_TYPES.find(type => type.id === value)?.label;
            case 'situation':
                return SITUATION_TYPES.find(type => type.id === value)?.label;
            case 'season':
                return SEASON_TYPES.find(type => type.id === value)?.label;
            case 'noteCategoryId':
                return NOTE_CATEGORIES.find(category => category.id.toString() === value)?.label;
            default:
                return undefined;
        }
    };

    // 필터 선택 여부 확인 (라벨이 있는 경우만 필터로 인정)
    const hasFilters = Array.from(params.entries()).some(([key, value]) => {
        if (key === 'page' || key === 'size') return false;
        if (key === 'priceMin' || key === 'priceMax') return true;
        return getFilterLabel(key, value) !== undefined;
    });

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
            <FilterButton onClick={onFilterClick} hasFilters={hasFilters} />
        </header>
    );
}
