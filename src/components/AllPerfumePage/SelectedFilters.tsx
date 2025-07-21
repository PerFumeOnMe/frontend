import { useLocation, useNavigate } from 'react-router-dom';
import { 
    GENDER_TYPES, 
    FRAGRANCE_TYPES, 
    SITUATION_TYPES, 
    SEASON_TYPES,
    NOTE_CATEGORIES 
} from '../../types/filter';

// 필터 순서와 표시 이름 정의
const FILTER_ORDER = [
    { key: 'noteCategoryId', label: '카테고리' },
    { key: 'fragranceType', label: '향수 타입' },
    { key: 'gender', label: '성별' },
    { key: 'situation', label: '상황' },
    { key: 'season', label: '계절' },
    { key: 'priceMin', label: '가격' }
] as const;

export default function SelectedFilters() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);

    // 가격 범위 텍스트 생성
    const getPriceRangeText = (min: string | null | undefined, max: string | null | undefined) => {
        if (!min && !max) return null;
        if (min && !max) return `${Number(min).toLocaleString()}원 이상`;
        if (!min && max) return `${Number(max).toLocaleString()}원 이하`;
        return `${Number(min).toLocaleString()}원 ~ ${Number(max).toLocaleString()}원`;
    };

    // 필터 값을 표시 텍스트로 변환
    const getDisplayText = (key: string, value: string) => {
        switch (key) {
            case 'gender':
                return GENDER_TYPES.find(type => type.id === value)?.label;
            case 'fragranceType':
                return FRAGRANCE_TYPES.find(type => type.id === value)?.label;
            case 'season':
                return SEASON_TYPES.find(type => type.id === value)?.label;
            case 'situation':
                return SITUATION_TYPES.find(type => type.id === value)?.label;
            case 'noteCategoryId':
                return NOTE_CATEGORIES.find(category => category.id.toString() === value)?.label;
            case 'priceMin':
                return getPriceRangeText(params.get('priceMin'), params.get('priceMax'));
            default:
                return value;
        }
    };

    // 필터 제거 처리
    const handleRemoveFilter = (key: string) => {
        const newParams = new URLSearchParams(location.search);
        if (key === 'priceMin') {
            newParams.delete('priceMin');
            newParams.delete('priceMax');
        } else {
            newParams.delete(key);
        }
        navigate(`?${newParams.toString()}`);
    };

    // 선택된 필터 목록 생성
    const selectedFilters = FILTER_ORDER.map(({ key, label }) => {
        let value = params.get(key);
        if (key === 'priceMin' && (params.get('priceMin') || params.get('priceMax'))) {
            value = getPriceRangeText(params.get('priceMin'), params.get('priceMax'));
        }
        if (!value) return null;
        
        const displayText = getDisplayText(key, value) || value;

        return {
            key,
            label,
            displayText
        };
    }).filter(Boolean);

    if (selectedFilters.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-[8px] px-[16px] py-[8px] mb-[16px]">
            {selectedFilters.map(filter => filter && (
                <div
                    key={filter.key}
                    className="px-[12px] py-[4px] rounded-[100px] bg-white border border-grayscale-700"
                >
                    <span className="text-body3 text-grayscale-700">
                        {filter.displayText}
                    </span>
                </div>
            ))}
        </div>
    );
} 