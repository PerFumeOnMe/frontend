import {
    FRAGRANCE_TYPES,
    GENDER_TYPES,
    SITUATION_TYPES,
    SEASON_TYPES,
    PRICE_RANGES,
    type FilterParams
} from '../../../types/filter';
import FilterSection from './FilterSection';

interface DetailFilterProps {
    selectedFilters: Partial<FilterParams>;
    onFilterSelect: (key: keyof FilterParams, value: any) => void;
}

export default function DetailFilter({ selectedFilters, onFilterSelect }: DetailFilterProps) {
    const handlePriceRangeSelect = (min: number, max?: number) => {
        if (selectedFilters.priceMin === min && selectedFilters.priceMax === max) {
            onFilterSelect('priceMin', undefined);
            onFilterSelect('priceMax', undefined);
        } else {
            onFilterSelect('priceMin', min);
            onFilterSelect('priceMax', max);
        }
    };

    return (
        <div className="px-[16px] py-[24px] space-y-[32px]">
            <FilterSection
                title="향수 타입"
                options={FRAGRANCE_TYPES}
                selectedId={selectedFilters.fragranceType}
                onSelect={(value) => onFilterSelect('fragranceType', value)}
            />

            <FilterSection
                title="성별 필터"
                options={GENDER_TYPES}
                selectedId={selectedFilters.gender}
                onSelect={(value) => onFilterSelect('gender', value)}
            />

            <FilterSection
                title="사용하는 상황 필터"
                options={SITUATION_TYPES}
                selectedId={selectedFilters.situationId}
                onSelect={(value) => onFilterSelect('situationId', value)}
            />

            <FilterSection
                title="계절별 필터"
                options={SEASON_TYPES}
                selectedId={selectedFilters.seasonId}
                onSelect={(value) => onFilterSelect('seasonId', value)}
            />

            <FilterSection
                title="가격대별 필터"
                options={PRICE_RANGES}
                selectedId={selectedFilters.priceMin ? 
                    PRICE_RANGES.find(range => 
                        range.min === selectedFilters.priceMin && 
                        range.max === selectedFilters.priceMax
                    )?.id : undefined}
                onSelect={(value) => {
                    const range = PRICE_RANGES.find(r => r.id === value);
                    if (range) {
                        handlePriceRangeSelect(range.min, range.max);
                    }
                }}
            />
        </div>
    );
} 