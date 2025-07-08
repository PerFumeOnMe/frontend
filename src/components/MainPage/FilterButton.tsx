interface FilterButtonProps {
    onClick?: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className="flex items-center justify-center gap-1 w-[73px] h-[30px] bg-white rounded-[20px] text-[12px] text-semibold text-black border border-[#000000] border-[1.5px]"
        >
            <img 
                src="/MainPage/filter.png" 
                alt="필터" 
                className="w-[12px] h-[12px] mr-[2px]"
            />
            필터
        </button>
    );
};

export default FilterButton; 