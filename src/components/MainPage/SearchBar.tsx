import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterButton from './FilterButton';
import searchImage from "../../assets/MainPage/search.png";

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleFilterClick = () => {
        navigate('/filter');
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-[22px] mb-[18px]">
                <h2 className="text-lg font-bold">모든 향수</h2>
                <FilterButton onClick={handleFilterClick} />
            </div>
            <div className="px-[22px]">
                <div className="flex items-center w-full h-[44px] px-[22px] bg-white rounded-[5px] border border-[#9E9E9E]">
                    <img 
                        src= {searchImage}
                        alt="검색" 
                        className="w-[20px] h-[20px] mr-[12px]" 
                    />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="원하시는 향수를 검색해보세요"
                        className="flex-1 text-[16px] outline-none placeholder:text-[#9E9E9E]"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar; 