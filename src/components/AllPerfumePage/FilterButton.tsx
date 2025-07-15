import { PiSlidersHorizontal } from "react-icons/pi";

interface FilterButtonProps {
    onClick?: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className="flex items-center justify-center gap-[4px] w-[85px] h-[26px] bg-white rounded-[16px] text-body4 text-grayscale-900 border border-grayscale-900"
        >
            <PiSlidersHorizontal className="w-[16px] h-[16px]"/>
            상세조건
        </button>
    );
};

export default FilterButton; 