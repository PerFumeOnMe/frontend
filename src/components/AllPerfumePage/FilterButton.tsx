import { PiSlidersHorizontal } from "react-icons/pi";

interface FilterButtonProps {
    onClick?: () => void;
    hasFilters?: boolean;
}

const FilterButton = ({ onClick, hasFilters = false }: FilterButtonProps) => {
    const colorClass = hasFilters ? "text-main-500 border-main-500" : "text-grayscale-900 border-grayscale-900";

    return (
        <button 
            onClick={onClick}
            className={`flex items-center justify-center gap-[4px] w-[85px] h-[26px] bg-white rounded-[16px] text-body4 border ${colorClass}`}
        >
            <PiSlidersHorizontal className="w-[16px] h-[16px]"/>
            상세조건
        </button>
    );
};

export default FilterButton; 