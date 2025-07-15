import { useState } from 'react';
import searchImage from "../../assets/MainPage/search.png";

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <div className="w-full mb-[24px]">
            <div className="px-[16px]">
                <div className="flex items-center w-full h-[44px] px-[16px] bg-white rounded-[8px] border border-[1px] border-grayscale-700">
                    <img 
                        src= {searchImage}
                        alt="검색" 
                        className="w-[16px] h-[16px] mr-[8px] color-grayscale-700" 
                    />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="원하시는 향수를 검색해보세요."
                        className="flex-1 text-body3 outline-none placeholder:text-grayscale-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar; 