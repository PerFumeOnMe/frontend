import { useState } from 'react';
import searchImage from "../../assets/MainPage/search2.png";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText.trim());
    };

    return (
        <div className="w-full">
            <div className="px-[16px]">
                <div className="flex items-center w-full h-[44px] px-[16px] bg-white rounded-[8px] border border-grayscale-700">
                    <img 
                        src={searchImage}
                        alt="검색" 
                        className="w-[16px] h-[16px] mr-[8px] color-grayscale-700" 
                    />
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="원하시는 향수를 검색해보세요."
                        className="flex-1 text-body3 outline-none placeholder:text-grayscale-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar; 